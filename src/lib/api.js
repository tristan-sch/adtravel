const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
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
    `
  );

  return data?.generalSettings;
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
    `
  );

  return data?.menus;
}

export async function getHeader() {
  const data = await fetchAPI(
    `
      query header {
        page(id: "/homepage", idType: URI) {
          header {
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
          }
        }
      }
    `
  );

  const header = data?.page.header;

  return {
    header,
  };
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
    `
  );

  return data?.page.about;
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
    `
  );

  return data?.services.edges;
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
    `
  );

  return data?.page.team;
}

export async function getStaff() {
  const data = await fetchAPI(
    `
    query staff {
      staff {
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
    `
  );

  return data?.staff.edges;
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
          }
            logo2 {
            sourceUrl
            altText
          }
        }
       
      }
    }
    `
  );

  const contact = data?.page.contact;

  return {
    contact,
  };
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
    `
  );

  const faq = data?.page.faq;

  return {
    faq,
  };
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
    `
  );

  return data?.questions.edges;
}
