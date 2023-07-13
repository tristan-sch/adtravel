import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import {
  MenusTypes,
  SettingsTypes,
  HeaderTypes,
  ContactTypes,
  FAQTypes,
} from '@/types/queryTypes'
import { Container } from './Containers'

type Props = {
  menus: MenusTypes
  settings: SettingsTypes
  header: HeaderTypes
  contact: ContactTypes
  faq: FAQTypes
}

export default function Header({
  menus,
  settings,
  header,
  contact,
  faq,
}: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <Container className="">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">{settings.title}</span>
                <Image
                  src={header.adTravelLogo.sourceUrl}
                  alt={header.adTravelLogo.altText}
                  width={133}
                  height={94}
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <>
              {menus.nodes.map((menu, i) => (
                <div key={i} className="hidden lg:flex lg:gap-x-12">
                  {menu.menuItems.edges.map(({ node }) => (
                    <div key={node.id}>
                      <div>
                        <Link
                          href={node.path}
                          passHref
                          className="font-semibold text-sm leading-6 text-white"
                        >
                          <div>{node.label}</div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <h3 className="text-base font-semibold leading-6 text-white">
                {settings.description}
              </h3>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">{settings.title}</span>
                  <Image
                    src={header.adTravelLogo.sourceUrl}
                    alt={header.adTravelLogo.altText}
                    width={133}
                    height={94}
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <>
                    {menus.nodes.map((menu, i) => (
                      <div key={i} className="space-y-2 py-6">
                        {menu.menuItems.edges.map(({ node }) => (
                          <div key={node.id}>
                            <div>
                              <Link
                                href={node.path}
                                passHref
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-cyan-700"
                              >
                                <div>{node.label}</div>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </>

                  <div className="py-6">
                    <Link
                      href={contact.phoneUrl}
                      passHref
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-cyan-700"
                    >
                      {contact.phone}
                    </Link>
                    <Link
                      href={contact.emailUrl}
                      passHref
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-cyan-700"
                    >
                      {contact.email}
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </Container>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <Image
          className="absolute inset-0 -z-10 w-full bg-black object-cover opacity-30"
          alt={header.heroImg.altText}
          src={header.heroImg.sourceUrl}
          fill
          priority
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm lg:text-base leading-6 text-gray-100 ring-1 ring-white/10 hover:ring-white/20">
              {/* TODO: add query */}
              We are committed to growing our business in a sustainable manner.{' '}
              <Link href="#sustainability" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
              {settings.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-100">
              {header.headerDescription}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={header.headerCtaUrl}
                passHref
                className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {header.headerCta}
              </Link>
              <Link
                // TODO: add queries for faq url and title
                href="#faq"
                className="text-sm font-semibold leading-6 text-white"
              >
                FAQ <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
