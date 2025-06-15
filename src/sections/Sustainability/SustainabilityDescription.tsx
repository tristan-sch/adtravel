import { NextImage } from 'components/NextImage'
import { SectionHeader } from 'components/Text/SectionHeader'

import { useIsMounted } from 'hooks/useIsMounted'
import { sanitizeAllHtmlContent } from 'utils/utils'

import { MenusTypes, SustainabilityTypes } from '../../types/queryTypes'

type Props = {
  menus: MenusTypes
  sustainability: SustainabilityTypes
}

export const SustainabilityDescription = ({ menus, sustainability }: Props) => {
  const isMounted = useIsMounted()
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[2]?.node.label || ''

  return (
    <div className="relative">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        {/* Image on the left */}
        <div className="w-full flex-shrink-0 lg:w-1/2">
          {sustainability.featuredImage?.node.sourceUrl && (
            <>
              <div className="hidden aspect-[3/4] h-full w-full lg:block">
                <NextImage
                  src={sustainability.featuredImage.node.sourceUrl}
                  alt={sustainability.featuredImage.node.altText}
                  className="h-full w-full bg-gray-50 object-cover"
                  width={1920}
                  height={2560}
                />
              </div>
              <div className="lg:hidden">
                <NextImage
                  src={sustainability.featuredImage.node.sourceUrl}
                  alt={sustainability.featuredImage.node.altText}
                  width={1920}
                  height={2560}
                  className="aspect-[3/2] object-cover"
                />
              </div>
            </>
          )}
        </div>
        {/* Content on the right */}
        <div className="flex w-full flex-col justify-start lg:w-1/2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pl-5">
            <div className="lg:contents">
              <div className="px-12 pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:px-0 lg:pt-10">
                <SectionHeader
                  headingId="sustainabilityDescription"
                  currentMenuLabel={currentMenuLabel}
                  headingText={sustainability.sustainability.heading}
                />
                {/* TODO: comment this and fix display bug when there is not enough content */}
                {isMounted && (
                  <p
                    className="roup-hover:text-primaryNeutral mt-5 text-justify text-sm leading-6"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeAllHtmlContent(sustainability.content || ''),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
