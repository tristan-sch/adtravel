import { CheckIcon } from "@heroicons/react/20/solid";
import { Container } from "./Containers";
import { AboutTypes, MenusTypes } from "types/queryTypes";

type Props = {
  menus: MenusTypes;
  about: AboutTypes;
};

export default function About({ menus, about }: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[0]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[0]?.node.path?.substring(1) || "";

  return (
    <section
      id={currentMenuPath}
      aria-label={currentMenuLabel}
      className="bg-white py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="text-base font-semibold leading-7 text-cyan-700">
              {currentMenuLabel}
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {about.heading}
            </h2>
            {about.textblock && (
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {about.textblock}
              </p>
            )}
            {about.textblockSecondary && (
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {about.textblockSecondary}
              </p>
            )}
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {about.services.map((service, i) => (
                <div key={i} className="relative pl-8">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <CheckIcon
                        className="absolute left-0 top-1 h-5 w-5 text-cyan-700"
                        aria-hidden="true"
                      />
                    </div>
                    {service.heading}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-700">
                    {service.textblock}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
