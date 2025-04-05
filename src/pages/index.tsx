import { useState } from "react";
import Head from "next/head";
import Header from "sections/Header";
import Hero from "sections/Hero";
import Team from "sections/Team";
import About from "sections/About";
import Footer from "sections/Footer";
import Sustainability from "sections/Sustainability/Sustainability";
import Faq from "sections/Faq";
import Contact from "sections/Contact";
import Banner from "components/Banner";
import {
  SettingsTypes,
  MenusTypes,
  HeaderTypes,
  AboutTypes,
  TeamTypes,
  SustainabilityTypes,
  ContactTypes,
  FaqTypes,
  BannerTypes,
  FooterTypes,
} from "types/queryTypes";
import {
  getSettings,
  getMenus,
  getHeader,
  getAbout,
  getTeam,
  getSustainability,
  getContact,
  getFaq,
  getBanner,
  getFooter,
} from "./api/api";
import { Layout } from "components/Layout";
import SustainabilityActions from "sections/Sustainability/SustainabilityActions";

type Props = {
  settings: SettingsTypes;
  menus: MenusTypes;
  header: HeaderTypes;
  about: AboutTypes;
  team: TeamTypes;
  sustainability: SustainabilityTypes;
  faq: FaqTypes;
  contact: ContactTypes;
  banner: BannerTypes;
  footer: FooterTypes;
};

export default function Home({
  settings,
  menus,
  header,
  about,
  team,
  sustainability,
  contact,
  faq,
  banner,
  footer,
}: Props) {
  const [isBanner, setIsBanner] = useState(true);
  const isBannerActivated = banner.activate;
  const containerClasses = "mx-auto max-w-7.5xl";

  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href={header.images.favicon.sourceUrl} />
        <meta name="description" content={settings.description} />
      </Head>
      {isBannerActivated && isBanner && (
        <Banner closeBanner={() => setIsBanner(false)} banner={banner} />
      )}
      <Layout
        settings={settings}
        menus={menus}
        banner={banner}
        header={header}
        footer={footer}
      >
        <Hero
          header={header}
          settings={settings}
          containerClasses="mx-auto max-w-7xl"
        />
        <About
          menus={menus}
          about={about}
          containerClasses={containerClasses}
        />
        <Team team={team} menus={menus} containerClasses={containerClasses} />
        <Sustainability menus={menus} sustainability={sustainability} />
        <Faq menus={menus} faq={faq} containerClasses={containerClasses} />
        <Contact
          menus={menus}
          contact={contact}
          containerClasses={containerClasses}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const [
    menus,
    settings,
    header,
    about,
    team,
    sustainability,
    contact,
    faq,
    banner,
    footer,
  ] = await Promise.all([
    getMenus(),
    getSettings(),
    getHeader(),
    getAbout(),
    getTeam(),
    getSustainability(),
    getContact(),
    getFaq(),
    getBanner(),
    getFooter(),
  ]);

  return {
    props: {
      menus,
      settings,
      header,
      about,
      team,
      sustainability,
      contact,
      faq,
      banner,
      footer,
    },
    revalidate: 10,
  };
}
