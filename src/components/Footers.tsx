import Image from "next/image";
import { Container } from "./Containers";
import Link from "next/link";
import { ContactTypes, LogosTypes } from "types/queryTypes";

type Props = {
  logos: LogosTypes;
  contact: ContactTypes;
};

export default function Footer({ logos, contact }: Props) {
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
  };

  const ADTravelLogo = logos[0]?.node.logoItems.adTravelLogo?.mediaItemUrl;
  const ADTravelLogoAlt = logos[0]?.node.logoItems.adTravelLogo?.altText;

  const FMSLogo = logos[0]?.node.logoItems.fmsLogo?.mediaItemUrl;
  const FMSLogoAlt = logos[0]?.node.logoItems.fmsLogo?.altText;

  const FASLogo = logos[0]?.node.logoItems.fasLogo?.mediaItemUrl;
  const FASLogoAlt = logos[0]?.node.logoItems.fasLogo?.altText;

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div>
          <div className="mx-auto max-w-7xl overflow-hidden border-t border-gray-900/10 px-6 py-20 sm:py-24 lg:px-8">
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
              {ADTravelLogo && (
                <Image
                  src={ADTravelLogo}
                  alt={ADTravelLogoAlt}
                  width={150}
                  height={100}
                />
              )}
              {FMSLogo && (
                <Link
                  href={contact.logo2Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={100}
                    height={100}
                    src={FMSLogo}
                    alt={FMSLogoAlt}
                    className="logoFooter"
                  />
                </Link>
              )}
              {FASLogo && (
                <Link
                  href={contact.logo1Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={100}
                    height={100}
                    src={FASLogo}
                    alt={FASLogoAlt}
                    className="logoFooter"
                  />
                </Link>
              )}
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              &copy; 2023 AD Travel, All rights reserved. This website does not
              use cookies.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
