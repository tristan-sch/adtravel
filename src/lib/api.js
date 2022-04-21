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

export async function getHero() {
  const data = await fetchAPI(
    `
      query hero {
        page(id: "/homepage", idType: URI) {
          hero {
            heroImg {
              sourceUrl
            }
          }
        }
      }
    `
  );

  const heroURL = data?.page.hero.heroImg.sourceUrl;

  return {
    heroURL,
  };
}

// export async function getAllPostsForHome() {
//   const data = await fetchAPI(
//     `
//       query allPosts {
//         posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
//           edges {
//             node {
//               title
//               excerpt
//               slug
//               date

//             }
//           }
//         }
//       }
//     `
//   );

//   return data?.posts;
// }
