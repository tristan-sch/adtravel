// ---------------------------------------------------------------------------

import {
  AboutTypes,
  BannerTypes,
  ContactTypes,
  FaqTypes,
  FooterTypes,
  HeaderTypes,
  MenusTypes,
  PrivacyPolicyTypes,
  SettingsTypes,
  SustainabilityTypes,
  TeamTypes,
} from 'types/queryTypes'

const API_URL = process.env.WORDPRESS_API_URL

// ---------------------------------------------------------------------------

// type ApiData = {
//   generalSettings?: SettingsTypes
//   menus?: MenusTypes
//   page?: PrivacyPolicyTypes | { banner: BannerTypes } // Allow page to have a banner property
//   // home?: HomePageContent
//   // news?: LinkedinContent
// }

type GraphQLError = {
  message: string
  locations?: Array<{ line: number; column: number }>
  path?: Array<string | number>
  extensions?: Record<string, unknown>
}

type ApiResponse<T> = {
  data: T
  errors?: Array<GraphQLError>
}

// ---------------------------------------------------------------------------

const fetchAPI = async <T>(query: string): Promise<T> => {
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

    const json: ApiResponse<T> = await res.json()

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
  const data = await fetchAPI<{ generalSettings?: SettingsTypes }>(
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
  const data = await fetchAPI<{ menus?: MenusTypes }>(
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
  const data = await fetchAPI<{ page?: PrivacyPolicyTypes }>(
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

export const getBanner = async (): Promise<BannerTypes> => {
  const data = await fetchAPI<{ page?: { banner: BannerTypes } }>(
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
  return data.page.banner
}

// ---------------------------------------------------------------------------

export const getHeader = async (): Promise<HeaderTypes> => {
  const data = await fetchAPI<{ page?: { header: HeaderTypes } }>(
    `
    query header {
      page(id: "/header", idType: URI) {
        header {
          images {
            logo {
              node {
                sourceUrl
                altText
              }
            }
            backgroundImage {
              node {
                sourceUrl
                altText
              }
            }
            favicon {
              node {
                sourceUrl
                altText
              }
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

  return data.page.header
}

// ---------------------------------------------------------------------------

export const getAbout = async (): Promise<AboutTypes> => {
  const data = await fetchAPI<{ page?: { about: AboutTypes } }>(
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
  return data.page.about
}

// ---------------------------------------------------------------------------

export const getTeam = async (): Promise<TeamTypes> => {
  const data = await fetchAPI<{ page?: { team: TeamTypes } }>(
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
              node {
                id
                mediaItemUrl
                altText
              }
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
  return data.page.team
}

// ---------------------------------------------------------------------------

export const getSustainability = async (): Promise<SustainabilityTypes> => {
  const data = await fetchAPI<{ page?: { sustainability: SustainabilityTypes } }>(
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
  if (!data.page) {
    throw new Error('Sustainability not found')
  }
  return data.page.sustainability
}

// ---------------------------------------------------------------------------

export const getFaq = async (): Promise<FaqTypes> => {
  const data = await fetchAPI<{ page?: { faq: FaqTypes } }>(
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
  return data.page.faq
}

// ---------------------------------------------------------------------------

export const getContact = async (): Promise<ContactTypes> => {
  const data = await fetchAPI<{ page?: { contact: ContactTypes } }>(
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

  return data.page.contact
}

// ---------------------------------------------------------------------------

export const getFooter = async (): Promise<FooterTypes> => {
  const data = await fetchAPI<{ page?: { footer: FooterTypes } }>(
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
            node {
              sourceUrl
              altText
            }
          }
          partnerLogos {
            partnerLogo {
              node {
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
    }
    `,
  )
  if (!data.page) {
    throw new Error('Footer not found')
  }

  return data.page.footer
}
