import Image from "next/image";
import { Container } from "./Containers";
import SustainabilityModal from "./SustainabilityModal";
import { useState } from "react";
import { MenusTypes, SustainabilityTypes } from "../types/queryTypes";

const features = [
  {
    name: "Complying ",
    description:
      "with all relevant environmental, public, and occupational health and safety, hygiene and employment legislation and regulations.",
    // icon: CloudArrowUpIcon,
  },
  {
    name: "Comply ",
    description:
      "with all relevant legislation and embed sustainable development principles into core business practices.",
    // icon: LockClosedIcon,
  },

  {
    name: "Provide ",
    description:
      "sustainable information about our products to encourage our clients to opt for sustainable travel options.",
    // icon: ServerIcon,
  },
  {
    name: "Preserve ",
    description:
      "our environment and continually improve our environmental performance.",
    // icon: FingerPrintIcon,
  },
  {
    name: "Provide ",
    description: "information, training and support to colleagues.",
    // icon: Cog6ToothIcon,
  },
  {
    name: "Use ",
    description: "our position to drive sustainability within our destination.",
    // icon: ArrowPathIcon,
  },
];
const offices = [
  {
    // name: 'Complying ',
    description:
      "We ensure our employees understand our goals and are accountable for the implementation of our sustainable policies",
    // icon: CloudArrowUpIcon,
  },
  {
    // name: 'Comply ',
    description: "We monitor, reduce and manage waste in a responsible way. ",
    // icon: LockClosedIcon,
  },
  {
    // name: 'Provide ',
    description:
      "We measure our use of natural resources especially energy and look for ways to reduce them.",
    // icon: ServerIcon,
  },
  {
    // name: 'Complying ',
    description:
      "We respect our employees, their diversity and advance their wellbeing wherever we can.",
    // icon: CloudArrowUpIcon,
  },
  {
    // name: 'Comply ',
    description:
      "We share best practices and raise awareness on sustainability among our teams and partners.",
    // icon: LockClosedIcon,
  },

  {
    // name: 'Provide ',
    description:
      "We communicate on our achievements against our sustainable goals, internally and externally through thorough reporting at least once a year.",
    // icon: ServerIcon,
  },
];

const ground = [
  {
    // name: 'Complying ',
    description:
      "We prefer to work with locally owned businesses reflecting local cultures (hotels, lodges, restaurants, handicraft outlets, arts and culture centers).",
    // icon: CloudArrowUpIcon,
  },
  {
    // name: 'Comply ',
    description:
      "We incite positive change within our supply chain by sharing best practices.",
    // icon: LockClosedIcon,
  },
  {
    // name: 'Provide ',
    description:
      "We ensure that travels we organize do not have adverse effects on the environment or society, especially sensitive activities that may bring travelers into contact with animals.",
    // icon: ServerIcon,
  },
  {
    // name: 'Provide ',
    description:
      "We put our clients and guests at the forefront of our business and help them to make informed decisions when travelling.",
    // icon: ServerIcon,
  },
];

type Props = {
  menus: MenusTypes;
  sustainability: SustainabilityTypes;
};

export default function Sustainability({ menus, sustainability }: Props) {
  const [isGroundModalOpen, setIsGroundModalOpen] = useState(false);
  const [isOfficesModalOpen, setIsOfficesModalOpen] = useState(false);

  console.log("sedfesf");

  return (
    <section
      id="sustainability"
      aria-label="Sustainability"
      className="bg-white py-24 sm:py-32"
    >
      <Container>
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center sm:text-left lg:mx-8">
              {menus.nodes.map((menu, i) => (
                <p
                  className="text-base font-semibold leading-7 text-cyan-600"
                  key={i}
                >
                  {menu.menuItems.edges[2].node.label}
                </p>
              ))}
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                {sustainability.heading}
              </h2>
              <div className="mt-6 grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 text-justify lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {sustainability.textblock && (
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {sustainability.textblock}
                  </p>
                )}
                {sustainability.textblockSecondary && (
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {sustainability.textblockSecondary}
                  </p>
                )}
              </div>
            </div>
          </div>
          {sustainability.image && (
            <div className="relative overflow-hidden pt-16">
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <Image
                  src={sustainability.image.sourceUrl}
                  alt={sustainability.image.altText}
                  className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                  width={2432}
                  height={1442}
                />
                <div className="relative" aria-hidden="true">
                  <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[1%]" />
                </div>
              </div>
            </div>
          )}
          <div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                {sustainability.textblockTertiary && (
                  <p className="mt-16 text-lg leading-8 text-gray-600">
                    {sustainability.textblockTertiary}
                  </p>
                )}
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-10 md:mt-16 lg:px-8">
              <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature, i) => (
                  <div key={i} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="hidden pt-16 sm:block">
            <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-6 md:mt-10 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 text-center text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    onClick={() => setIsGroundModalOpen(true)}
                    className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Our actions on the ground
                  </button>
                </div>
                {isGroundModalOpen && (
                  <SustainabilityModal
                    data={ground}
                    closeModal={() => setIsGroundModalOpen(false)}
                    title="On the Ground"
                  />
                )}

                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    onClick={() => setIsOfficesModalOpen(true)}
                    className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Our actions in our office
                  </button>
                </div>
                {isOfficesModalOpen && (
                  <SustainabilityModal
                    data={offices}
                    closeModal={() => setIsOfficesModalOpen(false)}
                    title="In our office"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
