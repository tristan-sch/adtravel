import { Content, CustomImage, Link, MediaItemType } from './sharedTypes'

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

export type Menu = {
  id: string
  databaseId: number
  name: string
  menuItems: {
    edges: Array<{
      node: MenuItem
    }>
  }
}

export type MenusTypes = {
  nodes: Array<Menu>
}

export type BannerTypes = {
  activate: boolean
  link: string
} & Content

export type HeaderTypes = {
  images: {
    logo: CustomImage
    backgroundImage: CustomImage
    favicon: CustomImage
  }
  teaser: {
    activate: boolean
    teaser: string
    teaserButton: Link
  }
  buttons: {
    primaryButton: Link
    secondaryButton: Link
  }
} & Content

type Service = Content

export type AboutTypes = {
  services: Array<Service>
} & Content

type Staff = {
  name: string
  department: string
  picture: MediaItemType
}

export type TeamTypes = {
  staff: Array<Staff>
} & Content

export type SustainabilityTypes = {
  slug: string
  content: string
  featuredImage?: {
    node: CustomImage
  }
  sustainability: {
    image: CustomImage
    logo: CustomImage
    actionsGroup: {
      heading: string
      textblock: string
      actions: Array<{
        actionsPoints: {
          actionsHeading: string
          actions: Array<Content>
          current: boolean
        }
      }>
    }
    banner: {
      text: string
      label: string
      email: string
    }
  } & Content
}

type Question = Content

export type FaqTypes = {
  questions: Array<Question>
} & Content

export type ContactTypes = {
  contactUs: Array<{
    heading: string
    textblock: string
    link: Link
  }>
} & Content

export type FooterTypes = {
  footerLinks: Array<{
    link: Link
  }>
  logo: CustomImage
  partnerLogos: Array<{
    partnerLogo: CustomImage
  }>
} & Content
