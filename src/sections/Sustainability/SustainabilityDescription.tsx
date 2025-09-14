import { SustainabilityContentTypes } from 'fragments/sustainabilityFields'

import { NextImage } from 'components/NextImage'
import { SectionHeader } from 'components/Text/SectionHeader'

import { MenusTypes } from 'types/queryTypes'

type Props = {
  menus: MenusTypes
  sustainabilityContent: SustainabilityContentTypes
}

export const SustainabilityDescription = ({ menus, sustainabilityContent }: Props) => {
  const currentMenuLabel = menus.nodes[0]?.menuItems?.edges?.[2]?.node?.label ?? ''

  return (
    <div className="relative">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        {/* Image on the left */}
        <div className="w-full flex-shrink-0 lg:w-1/2">
          {sustainabilityContent.sustainabilityContentImage?.node.sourceUrl && (
            <>
              <div className="hidden aspect-[3/4] h-full w-full lg:block">
                <NextImage
                  src={sustainabilityContent.sustainabilityContentImage.node.sourceUrl}
                  alt={
                    sustainabilityContent.sustainabilityContentImage.node.altText || ''
                  }
                  className="h-full w-full bg-gray-50 object-cover"
                  width={1920}
                  height={2560}
                />
              </div>
              <div className="lg:hidden">
                <NextImage
                  src={sustainabilityContent.sustainabilityContentImage.node.sourceUrl}
                  alt={
                    sustainabilityContent.sustainabilityContentImage.node.altText || ''
                  }
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
                  headingText={sustainabilityContent.sustainabilityContentHeading}
                />
                {sustainabilityContent.sustainabilityContentTextblock && (
                  <p className="mt-5 text-justify text-base/7 leading-6">
                    {sustainabilityContent.sustainabilityContentTextblock}
                  </p>
                )}
                {sustainabilityContent.sustainabilityContentTextblock && (
                  <p className="mt-5 text-justify text-base/7 leading-6">
                    {sustainabilityContent.sustainabilityContentTextblock}
                  </p>
                )}
                {sustainabilityContent.sustainabilityContentHeadingSecondary && (
                  <h2 className="mt-8 text-lg font-semibold text-gray-900">
                    {sustainabilityContent.sustainabilityContentHeadingSecondary}
                  </h2>
                )}
                {sustainabilityContent.sustainabilityContentTextblockTertiary && (
                  <p className="mt-4 text-justify text-base/7 leading-6">
                    {sustainabilityContent.sustainabilityContentTextblockTertiary}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
