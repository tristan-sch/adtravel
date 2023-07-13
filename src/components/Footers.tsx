import Image from 'next/image'
import { Container } from './Containers'
import { ContactTypes } from '@/types/queryTypes'
import Link from 'next/link'

type Props = {
  contact: ContactTypes
}

export default function Footer({ contact }: Props) {
  const navigation = {
    links: [
      {
        name: contact.usefulLinks.usefulLink1,
        href: contact.usefulLinks.usefulLink1Link,
      },
      {
        name: contact.usefulLinks.usefulLink2,
        href: contact.usefulLinks.usefulLink2Link,
      },
      {
        name: contact.usefulLinks.usefulLink3,
        href: contact.usefulLinks.usefulLink3Link,
      },
      {
        name: contact.usefulLinks.usefulLink4,
        href: contact.usefulLinks.usefulLink4Link,
      },
    ],
  }
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div>
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8 border-t border-gray-900/10">
            <nav
              className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
              aria-label="Footer"
            >
              {navigation.links.map((item) => (
                <div key={item.name} className="pb-6">
                  <a
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-cyan-700"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
            <div className="mt-10 flex justify-center space-x-10">
              <Image
                src="/adtravel-logo.png"
                alt="AD Travel logo"
                width={150}
                height={100}
              />
              <Link
                href={contact.logo2Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={100}
                  height={100}
                  alt={contact.logo2.altText}
                  src={contact.logo2.sourceUrl}
                  className="logoFooter"
                />
              </Link>
              <Link
                href={contact.logo1Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={100}
                  height={100}
                  alt={contact.logo1.altText}
                  src={contact.logo1.sourceUrl}
                  className="logoFooter"
                />
              </Link>
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              &copy; 2023 AD Travel, All rights reserved. This website does not
              use cookies.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
