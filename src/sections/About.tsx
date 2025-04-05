import { CheckIcon } from "@heroicons/react/20/solid";
import { AboutTypes, MenusTypes } from "types/queryTypes";
import { SectionHeader } from "../components/Text/SectionHeader";
import { SectionContainer } from "../components/SectionContainer";

type Props = {
  menus: MenusTypes;
  about: AboutTypes;
  containerClasses?: string;
};

export default function About({ menus, about, containerClasses }: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[0]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[0]?.node.path?.substring(1) || "";

  return (
    <SectionContainer id={currentMenuPath}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeader
            headingId="features-heading"
            currentMenuLabel={currentMenuLabel}
            headingText={about.heading}
            description={about.textblock}
            descriptionSecondary={about.textblockSecondary}
          />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {about.services.map((service, i) => (
              <div key={i} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-700">
                    <CheckIcon
                      className="h-5 w-5 text-white"
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
    </SectionContainer>
  );
}
