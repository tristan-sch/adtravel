import { Content, CustomImage, Link, mediaItemType } from './sharedTypes'

export type SettingsTypes = {
  title: string
  description: string
  url: string
}

type MenuItem = {
  id: string
  label: string
  parentId: string
  path: string
}

type Menu = {
  id: string
  databaseId: number
  name: string
  menuItems: {
    edges: {
      node: MenuItem
    }[]
  }
}

export type MenusTypes = {
  nodes: Menu[]
}

export type LogosTypes = {
  node: {
    logoItems: {
      adTravelLogo: mediaItemType
      adTravelLogoWhite: mediaItemType
      adTravelFavicon: mediaItemType
      fmsLogo: mediaItemType
      fasLogo: mediaItemType
    }
  }
}[]

export interface HeaderTypes extends Content {
  backgroundImage: CustomImage
  teaser: string
  teaserButton: Link
  heading: string
  textblock: string
  primaryButton: Link
  secondaryButton: Link
}

export interface AboutTypes extends Content {}
export interface TeamTypes extends Content {}
export interface SustainabilityTypes extends Content {
  image: CustomImage
}

export interface ContactTypes {
  contactHeading: string
  contactDescription: string
  email: string
  emailUrl: string
  phone: string
  phoneUrl: string
  adress: string
  adressUrl: string
  logo1: {
    sourceUrl: string
    altText: string
    description: string
  }
  logo1Link: string
  logo2: {
    sourceUrl: string
    altText: string
    description: string
  }
  logo2Link: string
  usefulLinks: {
    usefulLink1: string
    usefulLink1Link: string
    usefulLink2: string
    usefulLink2Link: string
    usefulLink3: string
    usefulLink3Link: string
    usefulLink4: string
    usefulLink4Link: string
  }
}

export interface FAQTypes {
  faqHeading: string
  faqDescription: string
}

type Staff = {
  node: {
    modified: string
    id: string
    title: string
    featuredImage: {
      node: {
        altText: string
        sourceUrl: string
      }
    }
    content: string
  }
}

export type StaffTypes = Staff[]

export type Service = {
  node: {
    id: string
    title: string
    content: string
    icon: {
      icon: {
        id: string
        mediaItemUrl: string
      }
    }
  }
}
export type ServicesTypes = Service[]

type Question = {
  node: {
    modified: string
    id: string
    title: string
    content: string
  }
}
export type QuestionTypes = Question[]
