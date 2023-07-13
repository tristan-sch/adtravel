import { MenusTypes, StaffTypes, TeamTypes } from '@/types/queryTypes'
import Image from 'next/image'
import { Container } from './Containers'
import sanitizeHtml from 'sanitize-html'

const people = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // More people...
]

type Props = {
  team: TeamTypes
  staff: StaffTypes
  menus: MenusTypes
}

export default function Team({ team, staff, menus }: Props) {
  return (
    <section
      // TODO: add query for id
      id="team"
      // TODO: add Aria label
      aria-label=""
      className="bg-gray-100 py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {menus.nodes.map((menu, i) => (
              <p
                className="text-base font-semibold leading-7 text-cyan-600"
                key={i}
              >
                {menu.menuItems.edges[1].node.label}
              </p>
            ))}
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {team.teamHeading}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {team.teamDescription}
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {staff.map((person) => (
              <li key={person.node.id}>
                <Image
                  className="mx-auto rounded-full"
                  width={96}
                  height={96}
                  src={person.node.featuredImage.node.sourceUrl}
                  alt={person.node.featuredImage.node.altText}
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.node.title}
                </h3>

                <div
                  className="text-sm leading-6 text-gray-600"
                  data-is-seen
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(person.node.content),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
