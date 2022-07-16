import Head from "next/head";

import Header from "../components/Header/Header";
import About from "../components/About";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

import {
  getMenus,
  getSettings,
  getHeader,
  getAbout,
  getServices,
  getTeam,
  getStaff,
  getContact,
  getFaq,
  getQuestions,
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
  faq,
  questions,
}) {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header={header} menus={menus} settings={settings} />
      <About
        menus={menus}
        settings={settings}
        about={about}
        services={services}
      />
      <Team menus={menus} team={team} staff={staff} />
      <Faq menus={menus} faq={faq} questions={questions} />
      <Contact menus={menus} contact={contact} />
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
  const faq = await getFaq();
  const questions = await getQuestions();

  return {
    revalidate: 60, // In seconds
    props: {
      menus,
      settings,
      header,
      about,
      services,
      team,
      staff,
      contact,
      faq,
      questions,
    },
  };
}
