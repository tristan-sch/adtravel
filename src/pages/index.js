import Image from "next/image";
import styles from "../styles/Index.module.scss";

import Container from "../components/Container/Container";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";

import { getAllPostsForHome, getAllMenusForHome } from "../lib/api";

export default function Home({ allPosts, allMenus }) {
  // console.log(allPosts);
  // console.log(allMenus);
  return (
    <div>
      <Container>
        <Nav allMenus={allMenus} />
        <Header />
      </Container>

      <main className={styles.main}>
        {allPosts.edges.map(({ node, index }) => (
          <h1 key={index} className={styles.title}>
            {node.title}
          </h1>
        ))}

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  const allMenus = await getAllMenusForHome();

  return {
    props: { allPosts, allMenus },
  };
}
