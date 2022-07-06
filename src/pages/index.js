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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header header={header} menus={menus} settings={settings} />
      <About
        menus={menus}
        settings={settings}
        about={about}
        services={services}
      />
      <Team menus={menus} team={team} staff={staff} />
      {/* <div className={styles.header}>
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
      </div> */}
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
