import { NextImage } from 'components/NextImage'

import { SectionHeader } from '../../components/Text/SectionHeader'
import { MenusTypes, SustainabilityTypes } from '../../types/queryTypes'

type Props = {
  menus: MenusTypes
  sustainability: SustainabilityTypes
}

export const SustainabilityDescription = ({ menus, sustainability }: Props) => {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[2]?.node.label || ''

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative hidden h-80 lg:-ml-8 lg:block lg:h-auto lg:w-full lg:grow xl:ml-0">
            <NextImage
              // TODO: add query for image
              src="/sustainability.png"
              alt={sustainability.image.altText}
              className="size-full absolute inset-0 bg-gray-50 object-cover"
              width={2560}
              height={3413}
            />
          </div>
          <div className="lg:hidden">
            <NextImage
              // TODO: add query for image
              // TODO: add different image for mobile
              src="/sustainability.png"
              alt={sustainability.image.altText}
              width={2560}
              height={3413}
              className="aspect-[3/2] object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-0 xl:w-1/2">
            <SectionHeader
              headingId="sustainabilityDescription"
              currentMenuLabel={currentMenuLabel}
              headingText={sustainability.heading}
            />
            <p className="mt-6 text-xl/6 text-gray-700">{sustainability.textblock}</p>
            <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
              <p>{sustainability.textblockSecondary}</p>

              {/* TODO: add query for h2 and paragraph  */}
              <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">
                Responsible travel
              </h2>
              <p className="mt-6">
                Responsible travel is a cornerstone of our company's identity. We aspire
                to magnify the positive impacts of tourism on individuals and local
                communities while mitigating negative social, environmental, and economic
                effects. Our dedication to sustainability is an ongoing endeavour
                involving every member of our company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
