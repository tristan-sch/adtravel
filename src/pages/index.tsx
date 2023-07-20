import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Team from "../components/Team";
import About from "../components/About";
import Footer from "../components/Footers";
import Sustainability from "../components/Sustainability";
import Faqs from "../components/Faqs";
import Contact from "../components/Contact";
import {
  SettingsTypes,
  MenusTypes,
  LogosTypes,
  HeaderTypes,
  AboutTypes,
  ServicesTypes,
  TeamTypes,
  StaffTypes,
  SustainabilityTypes,
  ContactTypes,
  FAQTypes,
  QuestionTypes,
} from "../types/queryTypes";
import {
  getSettings,
  getMenus,
  getLogos,
  getHeader,
  getAbout,
  getServices,
  getTeam,
  getStaff,
  getSustainability,
  getContact,
  getFaq,
  getQuestions,
} from "./api/api";

type Props = {
  settings: SettingsTypes;
  menus: MenusTypes;
  logos: LogosTypes;
  header: HeaderTypes;
  about: AboutTypes;
  aboutServices: ServicesTypes;
  team: TeamTypes;
  teamStaff: StaffTypes;
  sustainability: SustainabilityTypes;
  faq: FAQTypes;
  faqQuestions: QuestionTypes;
  contact: ContactTypes;
};

export default function Home({
  settings,
  menus,
  logos,
  header,
  about,
  aboutServices,
  team,
  teamStaff,
  sustainability,
  faq,
  faqQuestions,
  contact,
}: Props) {
  const ADTravelFavicon =
    logos[0]?.node.logoItems.adTravelFavicon?.mediaItemUrl;

  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href={ADTravelFavicon} />
        <meta name="description" content={settings.description} />
      </Head>
      <Header
        settings={settings}
        menus={menus}
        logos={logos}
        contact={contact}
      />
      <main>
        <Hero settings={settings} header={header} />
        <About menus={menus} about={about} aboutServices={aboutServices} />
        <Team team={team} teamStaff={teamStaff} menus={menus} />
        <Sustainability menus={menus} sustainability={sustainability} />
        <Faqs menus={menus} faq={faq} faqQuestions={faqQuestions} />
        <Contact contact={contact} />
      </main>
      <Footer logos={logos} contact={contact} />
    </>
  );
}

export async function getStaticProps() {
  const [
    menus,
    logos,
    settings,
    header,
    about,
    aboutServices,
    team,
    teamStaff,
    sustainability,
    contact,
    faq,
    faqQuestions,
  ] = await Promise.all([
    getMenus(),
    getLogos(),
    getSettings(),
    getHeader(),
    getAbout(),
    getServices(),
    getTeam(),
    getStaff(),
    getSustainability(),
    getContact(),
    getFaq(),
    getQuestions(),
  ]);

  return {
    props: {
      menus,
      logos,
      settings,
      header,
      about,
      aboutServices,
      team,
      teamStaff,
      sustainability,
      contact,
      faq,
      faqQuestions,
    },
    revalidate: 10,
  };
}
