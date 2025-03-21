import { useState } from "react";
import Head from "next/head";
import Header from "components/Header";
import Hero from "components/Hero";
import Team from "components/Team";
import About from "components/About";
import Footer from "components/Footer";
import Sustainability from "components/Sustainability";
import Faq from "components/Faq";
import Contact from "components/Contact";
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
      <Header
        settings={settings}
        menus={menus}
        contact={contact}
        isBanner={isBanner}
        header={header}
      />
      <main>
        <Hero settings={settings} header={header} />
        <About menus={menus} about={about} />
        <Team team={team} menus={menus} />
        <Sustainability menus={menus} sustainability={sustainability} />
        <Faq menus={menus} faq={faq} />
        <Contact menus={menus} contact={contact} />
      </main>
      <Footer footer={footer} />
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
