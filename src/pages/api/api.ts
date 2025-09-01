// ---------------------------------------------------------------------------

import { MenusTypes, PrivacyPolicyTypes, SettingsTypes } from 'types/queryTypes'

const API_URL = process.env.WORDPRESS_API_URL

// ---------------------------------------------------------------------------

type ApiData = {
  generalSettings?: SettingsTypes
  menus?: MenusTypes
  page?: PrivacyPolicyTypes
  // home?: HomePageContent
  // news?: LinkedinContent
}

type GraphQLError = {
  message: string
  locations?: Array<{ line: number; column: number }>
  path?: Array<string | number>
  extensions?: Record<string, unknown>
}

type ApiResponse = {
  data: ApiData
  errors?: Array<GraphQLError>
}

// ---------------------------------------------------------------------------

const fetchAPI = async (query: string): Promise<ApiData> => {
  const headers = { 'Content-Type': 'application/json' }

  if (!API_URL) {
    throw new Error('API_URL is missing')
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
      next: { revalidate: 10 },
    })

    if (!res.ok) {
      const errorBody = await res.text()
      console.error('Response body:', errorBody)
      throw new Error('Failed to fetch API')
    }

    const json: ApiResponse = await res.json()
    if (json.errors && json.errors.length > 0) {
      console.error('API errors:', json.errors)
      throw new Error('Failed to fetch API')
    }

    return json.data
  } catch (error) {
    console.error('Fetch API error:', error)
    throw new Error('Failed to fetch API')
  }
}

// ---------------------------------------------------------------------------

export const getSettings = async (): Promise<SettingsTypes> => {
  const data = await fetchAPI(
    `
      query settings {
        generalSettings {
          title
          description
          url
        }
      }
    `,
  )
  if (!data.generalSettings) {
    throw new Error('Settings not found')
  }
  return data.generalSettings
}

// ---------------------------------------------------------------------------

export const getMenus = async (): Promise<MenusTypes> => {
  const data = await fetchAPI(
    `
      query menus {
        menus {
          nodes {
            id
            databaseId
            name
            menuItems {
              edges {
                node {
                  id
                  label
                  parentId
                  path
                }
              }
            }
          }
        }
      }
    `,
  )
  if (!data.menus) {
    throw new Error('Menus not found')
  }
  return data.menus
}

// ---------------------------------------------------------------------------

export const getPrivacyPolicy = async (): Promise<PrivacyPolicyTypes> => {
  const data = await fetchAPI(
    `
      query privacyPolicy {
        page(id: "/privacy-policy", idType: URI) {
            title
            content
        }
      }
    `,
  )
  if (!data.page) {
    throw new Error('Privacy Policy not found')
  }
  return data.page
}

// ---------------------------------------------------------------------------

export async function getBanner() {
  const data = await fetchAPI(
    `
    query banner {
      page(id: "/banner", idType: URI) {
        banner {
          activate
          textblock
          textblockSecondary
          link
        }
      }
    }
    `,
  )
  return data.page.banner
}

// ---------------------------------------------------------------------------

export async function getHeader() {
  const data = await fetchAPI(
    `
    query header {
      page(id: "/header", idType: URI) {
        header {
          images {
            logo {
              sourceUrl
              altText
            }
            backgroundImage {
              sourceUrl
              altText
            }
            favicon {
              sourceUrl
              altText
            }
          }
          teaser {
            activate
            teaser
            teaserButton {
              url
              title
            }
          }
          heading
          textblock
          buttons {
            primaryButton {
              url
              title
            }
            secondaryButton {
              url
              title
            }
          }
        }
      }
    }
    `,
  )
  return data.page.header
}

// ---------------------------------------------------------------------------

export async function getAbout() {
  const data = await fetchAPI(
    `
    query about {
      page(id: "/about", idType: URI) {
        about {
          heading
          textblock
          textblockSecondary
          services {
            heading
            textblock
          }
        }
      }
    }
    `,
  )
  return data.page.about
}

// ---------------------------------------------------------------------------

export async function getTeam() {
  const data = await fetchAPI(
    `
    query team {
      page(id: "/team", idType: URI) {
        team {
          heading
          textblock
          textblockSecondary
          staff {
            name
            department
            picture {
              id
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
    `,
  )
  return data.page.team
}

// ---------------------------------------------------------------------------

export async function getSustainability() {
  const data = await fetchAPI(
    `
    query sustainability {
    page(id: "/sustainability", idType: URI) {
      slug
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      sustainability {
        actionsGroup {
          heading
          textblock
          actions {
            actionsPoints {
              current
              actionsHeading
              actions {
                textblock
              }
            }
          }
        }
        banner {
          text
          label
          email
        }
      }
    }
  }
    `,
  )
  // return data?.page.sustainability
  return data.page
}

// ---------------------------------------------------------------------------

export async function getFaq() {
  const data = await fetchAPI(
    `
    query faq {
      page(id: "/faq", idType: URI) {
        faq {
          heading
          textblock
          textblockSecondary
          questions {
            heading
            textblock
          }
        }
      }
    }
    `,
  )
  return data.page.faq
}

// ---------------------------------------------------------------------------

export async function getContact() {
  const data = await fetchAPI(
    `
    query contact {
      page(id: "/contact", idType: URI) {
        contact {
          heading
          textblock
          textblockSecondary
          contactUs {
            heading
            textblock
            link {
              title
              url
            }
          }
        }
      }
    }
    `,
  )

  return data.page.contact
}

// ---------------------------------------------------------------------------

export async function getFooter() {
  const data = await fetchAPI(
    `
    query footer {
      page(id: "/footer", idType: URI) {
        footer {
          textblock
          footerLinks {
            link {
              title
              url
            }
          }
          logo {
            sourceUrl
            altText
          }
          partnerLogos {
            partnerLogo {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
              imageLink {
                imageLink
              }
            }
          }
        }
      }
    }
    `,
  )
  return data.page.footer
}
