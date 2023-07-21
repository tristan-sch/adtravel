import { ContactTypes, MenusTypes } from "types/queryTypes";
import { Container } from "./Containers";
import Link from "next/link";

type Props = {
  contact: ContactTypes;
  menus: MenusTypes;
};

export default function Contact({ contact, menus }: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[4]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[4]?.node.path?.substring(1) || "";

  return (
    <section
      id={currentMenuPath}
      aria-label={currentMenuLabel}
      className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32"
    >
      <Container>
        <div className="text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <p className="text-base font-semibold leading-7 text-cyan-700">
                Contact
              </p>
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                {contact.contactHeading}
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                {contact.contactDescription}
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <h3 className="border-l border-cyan-700 pl-6 font-semibold text-gray-900">
                  Write us
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>Email</p>
                  <Link
                    className="font-semibold text-cyan-700"
                    href={contact.emailUrl}
                  >
                    {contact.email}
                  </Link>
                </address>
              </div>
              <div>
                <h3 className="border-l border-cyan-700 pl-6 font-semibold text-gray-900">
                  Call us
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>Phone</p>

                  <Link
                    className="font-semibold text-cyan-700"
                    href={contact.phoneUrl}
                  >
                    {contact.phone}
                  </Link>
                </address>
              </div>
              <div>
                <h3 className="border-l border-cyan-700 pl-6 font-semibold text-gray-900">
                  Visit us
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                  <p>Our location</p>
                  <Link
                    className="font-semibold text-cyan-700"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contact.adressUrl}
                  >
                    {contact.adress}
                  </Link>
                </address>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
