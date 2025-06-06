import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { Link } from 'components/NextLink'

import { HeaderTypes, MenusTypes, SettingsTypes } from 'types/queryTypes'

type Props = {
  menus: MenusTypes
  header: HeaderTypes
  settings: SettingsTypes
  isBanner?: boolean
}

export const Header = ({ menus, settings, isBanner, header }: Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentMenuItem, setCurrentMenuItem] = useState('')

  const handleMenuItemClick = (path: string) => {
    setCurrentMenuItem(path)
    setMobileMenuOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
          <nav
            aria-label="Global"
            className="flex items-center justify-between lg:justify-start"
          >
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{settings.title}</span>
              {header.images.logo.sourceUrl && (
                <Image
                  src="/logo.png"
                  alt={header.images.logo.altText}
                  width={133}
                  height={94}
                />
              )}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 rounded-md p-2.5 text-cyan-700 lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
            <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
              {menus.nodes.map((menu, i) => (
                <div key={i} className="hidden lg:flex lg:gap-x-12">
                  {menu.menuItems.edges.map(({ node }) => (
                    <div key={node.id}>
                      <Link
                        href={node.path}
                        className="whitespace-nowrap text-sm font-semibold leading-6 text-gray-900"
                      >
                        {node.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{settings.title}</span>
              {header.images.logo.sourceUrl && (
                <Image
                  // TODO: update the src attribute to the correct path
                  src="/logo.png"
                  alt={header.images.logo.altText}
                  width={133}
                  height={94}
                />
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-cyan-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {menus.nodes.map((menu, i) => (
                <div key={i} className="space-y-2 py-6">
                  {menu.menuItems.edges.map(({ node }) => (
                    <div key={node.id}>
                      <Link
                        href={node.path}
                        onClick={() => handleMenuItemClick(node.path)}
                        className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 ${
                          currentMenuItem === node.path
                            ? 'border-l-4 border-cyan-700 bg-cyan-50 text-cyan-700'
                            : 'border-l-4 border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                        }`}
                      >
                        {node.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
