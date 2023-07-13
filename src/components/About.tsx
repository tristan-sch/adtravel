import { CheckIcon } from '@heroicons/react/20/solid'
import { Container } from './Containers'
import { AboutTypes, MenusTypes, ServicesTypes } from '@/types/queryTypes'

type Props = {
  menus: MenusTypes
  about: AboutTypes
  services: ServicesTypes
}

export default function About({ menus, about, services }: Props) {
  return (
    <section
      // TODO: add query for id
      id="about"
      // TODO: add Aria label
      className="bg-white py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {menus.nodes.map((menu, i) => (
              <p
                className="text-base font-semibold leading-7 text-cyan-700"
                key={i}
              >
                {menu.menuItems.edges[0].node.label}
              </p>
            ))}

            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {about.aboutHeading}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offers tours around Iceland all year around, both to
              individuals and groups.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With more than 30 years experience and deep ties within the
              Icelandic travel industry, we offer tailor-made services for
              Travel agencies and Tour Operators, putting a great emphasis on
              excellent service and a great experience on every tours.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {services.map((service, i) => (
                <div key={service.node.id} className="relative pl-8">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      {/* TODO: update icons? */}
                      <CheckIcon
                        className="absolute left-0 top-1 h-5 w-5 text-cyan-700"
                        aria-hidden="true"
                      />
                    </div>
                    {service.node.title}
                  </dt>
                  <dd
                    className="mt-2 text-base leading-7 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: service.node.content }}
                  />
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}
