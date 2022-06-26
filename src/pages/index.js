// import Image from "next/image"
import Head from "next/head";
import styles from "../styles/Index.module.scss";

import Header from "../components/Header/Header";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";

import {
  getMenus,
  getSettings,
  getHeader,
  getAbout,
  getServices,
  getTeam,
  getStaff,
  getContact,
} from "../lib/api";

export default function Home({
  menus,
  settings,
  header,
  about,
  services,
  team,
  staff,
  contact,
}) {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <Header header={header} menus={menus} settings={settings} />
      </div>
      <div className={styles.aboutContainer}>
        <About
          menus={menus}
          settings={settings}
          about={about}
          services={services}
        />
      </div>
      <div className={styles.teamContainer}>
        <Team menus={menus} team={team} staff={staff} />
      </div>
      <div className={styles.contactContainer}>
        <Contact contact={contact} menus={menus} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const menus = await getMenus();
  const settings = await getSettings();
  const header = await getHeader();
  const about = await getAbout();
  const services = await getServices();
  const team = await getTeam();
  const staff = await getStaff();
  const contact = await getContact();

  return {
    props: {
      menus,
      settings,
      header,
      about,
      services,
      team,
      staff,
      contact,
    },
    revalidate: 10, // In seconds
  };
}
