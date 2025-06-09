import { SectionContainer } from 'components/SectionContainer'
import { SectionHeader } from 'components/Text/SectionHeader'

import { ContactTypes, MenusTypes } from 'types/queryTypes'

type Props = {
  contact: ContactTypes
  menus: MenusTypes
  containerClasses?: string
}

export const Contact = ({ contact, menus }: Props) => {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[4]?.node.label || ''
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[4]?.node.path?.substring(1) || ''

  return (
    <SectionContainer id={currentMenuPath}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div>
              <SectionHeader
                headingId={currentMenuPath}
                currentMenuLabel={currentMenuLabel}
                headingText={contact.heading}
                description={contact.textblock}
                descriptionSecondary={contact.textblockSecondary}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {contact.contactUs.map((contactItem, i) => (
                <div className="rounded-2xl bg-gray-50 p-10" key={i}>
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    {contactItem.heading}
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <p className="font-semibold text-cyan-700">
                        {contactItem.textblock}
                      </p>
                    </div>

                    <div className="mt-1">
                      {contactItem.link.url !== '#' ? (
                        <a
                          href={contactItem.link.url}
                          className="text-cyan-700 underline"
                          {...(contactItem.link.url.startsWith('http') && {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          })}
                        >
                          {contactItem.link.title}
                        </a>
                      ) : (
                        <span>{contactItem.link.title}</span>
                      )}
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
