import { ContactTypes, MenusTypes } from "types/queryTypes";
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
      className="py-8 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                {contact.heading}
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                {contact.textblock}
              </p>
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
                      <Link href={contactItem?.link?.url ?? "/"}>
                        <p>{contactItem?.link?.title}</p>
                      </Link>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
