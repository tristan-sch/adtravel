const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query: string) {
  const headers = { 'Content-Type': 'application/json' }

  if (API_URL) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
      }),
    })
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  } else {
    throw new Error('API_URL is missing')
  }
}

export async function getSettings() {
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
  return data?.generalSettings
}

export async function getMenus() {
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
  return data?.menus
}

export async function getLogos() {
  const data = await fetchAPI(
    `
    query logos {
      logos {
        edges {
          node {
            logoItems {
              adTravelLogo {
                id
                mediaItemUrl
                altText
              }
              adTravelLogoWhite {
                id
                mediaItemUrl
                altText
              }
              adTravelFavicon {
                id
                mediaItemUrl
                altText
              }
              fmsLogo {
                id
                mediaItemUrl
                altText
              }
              fasLogo {
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
  return data?.logos.edges
}

export async function getHeader() {
  const data = await fetchAPI(
    `
    query header {
      page(id: "/header", idType: URI) {
        header {
          backgroundImage {
            sourceUrl
            altText
          }
          teaser
          teaserButton {
            url
            title
          }
          heading
          textblock
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
    `,
  )
  return data?.page.header
}

export async function getAbout() {
  const data = await fetchAPI(
    `
    query about {
      page(id: "/about", idType: URI) {
        about {
          heading
          textblock
          textblockSecondary
        }
      }
    }
    `,
  )
  return data?.page.about
}

export async function getServices() {
  const data = await fetchAPI(
    `
    query services {
      services {
        edges {
          node {
            id
            title
            content
          }
        }
      }
    }
    `,
  )
  return data?.services.edges
}

export async function getTeam() {
  const data = await fetchAPI(
    `
    query team {
      page(id: "/team", idType: URI) {
        team {
          heading
          textblock
          textblockSecondary
        }
      }
    }
    `,
  )
  return data?.page.team
}

export async function getStaff() {
  const data = await fetchAPI(
    `
    query staff {
      staff( first: 100 ) {
        edges {
          node {
            modified
            id
            title
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            content
          }
        }
      }
    }
    `,
  )
  return data?.staff.edges
}

export async function getSustainability() {
  const data = await fetchAPI(
    `
    query sustainability {
      page(id: "/sustainability", idType: URI) {
        sustainability {
          heading
          textblock
          textblockSecondary
          textblockTertiary
          image {
            sourceUrl
            altText
          }
        }
      }
    }
    `,
  )
  return data?.page.sustainability
}

export async function getContact() {
  const data = await fetchAPI(
    `
    query contact {
      page(id: "/homepage", idType: URI) {
        contact {
          contactHeading
          contactDescription
          emailPicto {
            id
            mediaItemUrl
          }
          phonePicto {
            id
            mediaItemUrl
          }
          adressPicto {
            id
            mediaItemUrl
          }
          email
          emailUrl
          phone
          phoneUrl
          adress
          adressUrl
          logo1 {
            sourceUrl
            altText
            description
          }
          logo1Link
            logo2 {
            sourceUrl
            altText
            description
          }
          logo2Link
          usefulLinks {
            usefulLink1
            usefulLink1Link
            usefulLink2
            usefulLink2Link
            usefulLink3
            usefulLink3Link
            usefulLink4
            usefulLink4Link
          }
        }
      }
    }
    `,
  )

  return data?.page.contact
}

export async function getFaq() {
  const data = await fetchAPI(
    `
    query faq {
      page(id: "/homepage", idType: URI) {
        faq {
          faqHeading
          faqDescription
          faqIcon {
            sourceUrl
            altText
          }
        }
      }
    }
    `,
  )

  return data?.page.faq
}

export async function getQuestions() {
  const data = await fetchAPI(
    `
    query questions {
      questions {
        edges {
          node {
            modified
            id
            title
            content
          }
        }
      }
    }
    `,
  )

  return data?.questions.edges
}
