export type MediaItemType = {
  id: string
  mediaItemUrl: string
  altText: string
}

export type Link = {
  url: string
  title: string
}

export type CustomImage = {
  sourceUrl: string
  altText: string
  mediaDetails?: {
    width?: number
    height?: number
  }
  imageLink?: {
    imageLink: string
  }
}

export type Content = {
  heading?: string
  textblock?: string
  textblockSecondary?: string
  textblockTertiary?: string
}
