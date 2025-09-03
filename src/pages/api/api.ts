// ---------------------------------------------------------------------------

import {
  BannerTypes,
  MenusTypes,
  PrivacyPolicyTypes,
  SettingsTypes,
} from 'types/queryTypes'

const API_URL = process.env.WORDPRESS_API_URL

// ---------------------------------------------------------------------------

type ApiData = {
  generalSettings?: SettingsTypes
  menus?: MenusTypes
  page?: PrivacyPolicyTypes | { banner: BannerTypes } // Allow page to have a banner property
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
  // TODO: remove type assertion
  return data.page as PrivacyPolicyTypes
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
  if (!data.page) {
    throw new Error('Banner not found')
  }
  if ('banner' in data.page) {
    return data.page.banner
  }
  throw new Error('Banner property not found on page')
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

  if (!data.page) {
    throw new Error('Header not found')
  }
  if ('header' in data.page) {
    return data.page.header
  }
  throw new Error('Header property not found on page')
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
  if (!data.page) {
    throw new Error('About not found')
  }
  if ('about' in data.page) {
    return data.page.about
  }
  throw new Error('About property not found on page')
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
  if (!data.page) {
    throw new Error('Team not found')
  }
  if ('team' in data.page) {
    return data.page.team
  }
  throw new Error('Team property not found on page')
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
  if (!data.page) {
    throw new Error('FAQ not found')
  }
  if ('faq' in data.page) {
    return data.page.faq
  }
  throw new Error('FAQ property not found on page')
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
  if (!data.page) {
    throw new Error('Contact not found')
  }
  if ('contact' in data.page) {
    return data.page.contact
  }
  throw new Error('Contact property not found on page')
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
  if (!data.page) {
    throw new Error('Footer not found')
  }
  if ('footer' in data.page) {
    return data.page.footer
  }
  throw new Error('Footer property not found on page')
}
