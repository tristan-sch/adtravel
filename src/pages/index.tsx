import Head from 'next/head'
import Header from '@/components/Header'
import Team from '@/components/Team'
import About from '@/components/About'
import Footer from '@/components/Footers'
import Sustainability from '@/components/Sustainability'
import Faqs from '@/components/Faqs'
import Contact from '@/components/Contact'
import {
  MenusTypes,
  SettingsTypes,
  HeaderTypes,
  ContactTypes,
  FAQTypes,
  TeamTypes,
  StaffTypes,
  AboutTypes,
  ServicesTypes,
  QuestionTypes,
} from '@/types/queryTypes'
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
} from './api/api'

type Props = {
  menus: MenusTypes
  settings: SettingsTypes
  header: HeaderTypes
  contact: ContactTypes
  faq: FAQTypes
  team: TeamTypes
  staff: StaffTypes
  about: AboutTypes
  services: ServicesTypes
  questions: QuestionTypes
}

export default function Home({
  menus,
  settings,
  header,
  contact,
  faq,
  team,
  staff,
  about,
  services,
  questions,
}: Props) {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <meta name="description" content={settings.description} />
      </Head>
      <Header
        menus={menus}
        settings={settings}
        header={header}
        contact={contact}
        faq={faq}
      />
      <main>
        <About menus={menus} about={about} services={services} />
        <Team team={team} staff={staff} menus={menus} />
        <Sustainability />
        <Faqs
          menus={menus}
          services={services}
          faq={faq}
          questions={questions}
        />
        <Contact contact={contact} />
      </main>
      <Footer contact={contact} />
    </>
  )
}

export async function getStaticProps() {
  const [
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
  ] = await Promise.all([
    getMenus(),
    getSettings(),
    getHeader(),
    getAbout(),
    getServices(),
    getTeam(),
    getStaff(),
    getContact(),
    getFaq(),
    getQuestions(),
  ])

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
      faq,
      questions,
    },
  }
}
