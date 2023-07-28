import Image from "next/image";
import { Container } from "./Containers";
import SustainabilityModal from "./SustainabilityModal";
import { useState } from "react";
import { MenusTypes, SustainabilityTypes } from "../types/queryTypes";

type Props = {
  menus: MenusTypes;
  sustainability: SustainabilityTypes;
};

export default function Sustainability({ menus, sustainability }: Props) {
  const [isGroundModalOpen, setIsGroundModalOpen] = useState(false);
  const [isOfficesModalOpen, setIsOfficesModalOpen] = useState(false);

  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[2]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[2]?.node.path?.substring(1) || "";

  return (
    <section
      id={currentMenuPath}
      aria-label={currentMenuLabel}
      className="bg-white py-24 sm:py-32"
    >
      <Container>
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center sm:text-left lg:mx-8">
              <p className="text-base font-semibold leading-7 text-cyan-600">
                {currentMenuLabel}
              </p>

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
            <div className="relative hidden overflow-hidden pt-16 sm:block">
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
                {sustainability.actions.actionPoints.map((actionPoint, i) => (
                  <div key={i} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {actionPoint.heading}
                    </dt>{" "}
                    <dd className="inline">{actionPoint.textblock}</dd>
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
                    {sustainability.actions.onTheGround.heading}
                  </button>
                </div>
                {isGroundModalOpen && (
                  <SustainabilityModal
                    data={sustainability.actions.onTheGround.onTheGroundActions}
                    closeModal={() => setIsGroundModalOpen(false)}
                    title={sustainability.actions.onTheGround.heading}
                  />
                )}

                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    onClick={() => setIsOfficesModalOpen(true)}
                    className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {sustainability.actions.atTheOffice.heading}
                  </button>
                </div>
                {isOfficesModalOpen && (
                  <SustainabilityModal
                    data={sustainability.actions.atTheOffice.atTheOfficeActions}
                    closeModal={() => setIsOfficesModalOpen(false)}
                    title={sustainability.actions.atTheOffice.heading}
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
