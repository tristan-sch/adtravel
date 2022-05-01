// import Image from "next/image";
import styles from "../styles/Index.module.scss";

import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";

import {
  getMenus,
  getSettings,
  getHeader,
  getContact,
  getTeam,
} from "../lib/api";

export default function Home({ menus, settings, header, contact, team }) {
  // console.log(allPosts);
  // console.log(allMenus);
  // console.log(team);
  return (
    <>
      <div className={styles.navHeaderContainer}>
        <div className={styles.headerContainer}>
          <Header header={header} menus={menus} />
        </div>
        <nav className={styles.navContainer}>
          <Nav menus={menus} settings={settings} />
        </nav>
      </div>
      <div className={styles.aboutContainer}>
        <About menus={menus} settings={settings} />
      </div>
      <div className={styles.teamContainer}>
        <Team menus={menus} team={team} />
      </div>
      <div className={styles.contactContainer}>
        <Contact contact={contact} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const menus = await getMenus();
  const settings = await getSettings();
  const header = await getHeader();
  const contact = await getContact();
  const team = await getTeam();

  return {
    props: { menus, settings, header, contact, team },
  };
}
