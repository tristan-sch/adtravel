import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import { SectionHeader } from 'components/Text/SectionHeader'

import { FaqTypes, MenusTypes } from 'types/queryTypes'

import { SectionContainer } from '../components/SectionContainer'

type Props = {
  menus: MenusTypes
  faq: FaqTypes
}

export const Faq = ({ menus, faq }: Props) => {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[3]?.node.label || ''
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[3]?.node.path?.substring(1) || ''

  return (
    <SectionContainer id={currentMenuPath} bgGray>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            headingId={currentMenuPath}
            currentMenuLabel={currentMenuLabel}
            headingText={faq.heading}
            description={faq.textblock}
            descriptionSecondary={faq.textblockSecondary}
          />
          {faq.textblockSecondary && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {faq.textblockSecondary}
            </p>
          )}
        </div>
        <div>
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faq.questions.map((question, i) => (
                <Disclosure as="div" key={i} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {question.heading}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {question.textblock}
                        </p>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
