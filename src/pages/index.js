import Image from "next/image";
import styles from "../styles/Index.module.scss";

import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";

import { getMenus, getSettings, getHero } from "../lib/api";

export default function Home({ menus, settings, hero }) {
  // console.log(allPosts);
  // console.log(allMenus);
  return (
    <>
      <div className={styles.navHeaderContainer}>
        <div className={styles.headerContainer}>
          <Header hero={hero} />
        </div>
        <nav className={styles.navContainer}>
          <Nav menus={menus} settings={settings} />
        </nav>
      </div>
      <div className={styles.aboutContainer}>
        <h1>Test</h1>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const menus = await getMenus();
  const settings = await getSettings();
  const hero = await getHero();

  return {
    props: { menus, settings, hero },
  };
}
