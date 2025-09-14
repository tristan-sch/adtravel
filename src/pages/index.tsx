import { NextPage } from 'next'
import Head from 'next/head'
import { About } from 'sections/About'
import { Contact } from 'sections/Contact'
import { Faq } from 'sections/Faq'
import { Hero } from 'sections/Hero'
import { Sustainability } from 'sections/Sustainability/Sustainability'
import { Team } from 'sections/Team'

import { Layout } from 'components/Layout'

import {
  AboutTypes,
  BannerTypes,
  ContactTypes,
  FaqTypes,
  FooterTypes,
  HeaderTypes,
  MenusTypes,
  SettingsTypes,
  SustainabilityTypesNew,
  TeamTypes,
} from 'types/queryTypes'

import {
  getAbout,
  getBanner,
  getContact,
  getFaq,
  getFooter,
  getHeader,
  getMenus,
  getSettings,
  getSustainabilityNew,
  getTeam,
} from './api/api'

type Props = {
  settings: SettingsTypes
  menus: MenusTypes
  header: HeaderTypes
  about: AboutTypes
  team: TeamTypes
  sustainabilityNew: SustainabilityTypesNew
  faq: FaqTypes
  contact: ContactTypes
  banner: BannerTypes
  footer: FooterTypes
}

const Home: NextPage<Props> = ({
  settings,
  menus,
  header,
  about,
  team,
  sustainabilityNew,
  contact,
  faq,
  banner,
  footer,
}) => {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href={header.images.favicon.node.sourceUrl} />
        <meta name="description" content={settings.description} />
      </Head>

      <Layout
        settings={settings}
        menus={menus}
        banner={banner}
        header={header}
        footer={footer}
      >
        <Hero header={header} settings={settings} containerClasses="mx-auto max-w-7xl" />
        <About menus={menus} about={about} />
        <Team team={team} menus={menus} />
        <Sustainability menus={menus} sustainability={sustainabilityNew} />
        <Faq menus={menus} faq={faq} />
        <Contact menus={menus} contact={contact} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const [
    menus,
    settings,
    header,
    about,
    team,
    sustainabilityNew,
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
    getSustainabilityNew(),
    getContact(),
    getFaq(),
    getBanner(),
    getFooter(),
  ])

  return {
    props: {
      menus,
      settings,
      header,
      about,
      team,
      sustainabilityNew,
      contact,
      faq,
      banner,
      footer,
    },
    revalidate: 10,
  }
}
export default Home
