import Image from 'next/image'

import { MenusTypes, TeamTypes } from 'types/queryTypes'

import { SectionContainer } from '../components/SectionContainer'
import { SectionHeader } from '../components/Text/SectionHeader'

type Props = {
  team: TeamTypes
  menus: MenusTypes
}

export const Team = ({ team, menus }: Props) => {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[1]?.node.label || ''
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[1]?.node.path?.substring(1) || ''

  return (
    <SectionContainer id={currentMenuPath} bgGray>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeader
            headingId={currentMenuPath}
            currentMenuLabel={currentMenuLabel}
            headingText={team.heading}
            description={team.textblock}
            descriptionSecondary={team.textblockSecondary}
          />
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {team.staff.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  width={96}
                  height={96}
                  src={person.picture.mediaItemUrl}
                  alt={person.picture.altText}
                />
                <div>
                  <h3 className="text-left text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-cyan-700">
                    {person.department}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}
