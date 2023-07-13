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

export async function getHeader() {
  const data = await fetchAPI(
    `
    query header {
      page(id: "/homepage", idType: URI) {
        header {
          headerDescription
          headerCta
          headerCtaUrl
          heroImg {
            sourceUrl
            altText
          }
          adTravelLogo {
            sourceUrl
            altText
          }
          hamburgerIcon {
            altText
            sourceUrl
          }
          closeIcon {
            altText
            sourceUrl
          }
          favicon {
            sourceUrl
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
      page(id: "/homepage", idType: URI) {
        about {
          aboutHeading
          aboutDescription
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
            icon {
              icon {
                id
                mediaItemUrl
              }
            }
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
      page(id: "/homepage", idType: URI) {
        team {
          teamHeading
          teamDescription
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
