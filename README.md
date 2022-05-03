# AD Travel Website

This is my assignment for **Module 7 - Exploration**

## Links

- [Live Site](https://adtravel.vercel.app/)
- [Source Code](https://github.com/tristan-sch/adtravel)
- [Design in Figma](https://www.figma.com/file/UZvRBsLBbBPICrp4t56L7q/AD-Travel---Design-system?node-id=106%3A2)
- [Research Plan](https://docs.google.com/document/d/1Lq--M53CwQ4ZyFjOFD1ZwGI5e80EkSEynTXy66MiCKQ/edit)

## About

I redesigned the website from the Travel Agency [AD Travel](http://adtravel.is/) using **Wordpress** and **Next.js**

- Everything is connected to a **Wordpress** Dashboard
- I created queries with the **GraphQL API for WordPress**
- I deployed the App on **Vercel**

## Work in progress

- I wanted to build a **Trip Builder** as well but I ran out of time.
- I also still need to:
  - finish some queries
  - simplify and improve the scss
  - create a slider for the team members instead of a Slide Show with arrows
  - finish the responsive design (only 2 breakpoints for now)
  - check the accessibility
  - create some animations

## Running the site

Add a .env.local file at the root of the project:

```
WORDPRESS_API_URL=YOUR GRAPHQL ENDPOINT
```

```
yarn install
yarn next dev
```

## Stack

- Next.js
- Scss
- Vercel
- WPGraphQL

## Resources

- [Next.js starter](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress)
- [GraphQL API for
  WordPress](https://www.wpgraphql.com/)
