import { Image } from 'types/sharedTypes'

// ---------------------------------------------------------------------------

export type SustainabilityContentTypes = {
  sustainabilityContentHeading?: string
  sustainabilityContentTextblock?: string
  sustainabilityContentTextblockSecondary?: string
  sustainabilityContentHeadingSecondary?: string
  sustainabilityContentTextblockTertiary?: string
  sustainabilityContentImage?: Image
}

export const SUSTAINABILITY_CONTENT_FIELDS = `
  fragment sustainabilityContentFields on SustainabilityContent {
    sustainabilityContentHeading
    sustainabilityContentTextblock
    sustainabilityContentTextblockSecondary
    sustainabilityContentHeadingSecondary
    sustainabilityContentTextblockTertiary
    sustainabilityContentImage {
      node {
        sourceUrl
        altText
      }
    }
  }
`

// ---------------------------------------------------------------------------

export type SustainabilityActionsGroup = {
  sustainabilityActionsHeading: string
  sustainabilityActionsTextblock: string
  sustainabilityActionsCategories: Array<{
    actionsTypes: {
      label: string
      actions: Array<{
        title: string
        details: Array<{
          bulletpoint: string
        }>
      }>
    }
  }>
}

export const SUSTAINABILITY_ACTIONS_FIELDS = `
  fragment sustainabilityActionsFields on SustainabilityActions {
    sustainabilityActionsHeading
    sustainabilityActionsTextblock
    sustainabilityActionsCategories {
      actionsTypes {
        label
        actions {
          title
          details {
            bulletpoint
          }
        }
      }
    }
  }
`

// ---------------------------------------------------------------------------

export type SustainabilityBannerTypes = {
  text: string
  label: string
  email: string
}

export const SUSTAINABILITY_BANNER_FIELDS = `
  fragment sustainabilityBannerFields on SustainabilityBanner {
    text
    label
    email
  }
`
