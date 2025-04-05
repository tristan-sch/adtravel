import Image from "next/image";

import { useState } from "react";
import { MenusTypes, SustainabilityTypes } from "../../types/queryTypes";
import { Content } from "types/sharedTypes";
import sanitizeHtml from "sanitize-html";
import Link from "next/link";
import { SectionHeader } from "../../components/Text/SectionHeader";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { SectionContainer } from "../../components/SectionContainer";
import { NextImage } from "components/NextImage";

type Props = {
  menus: MenusTypes;
  sustainability: SustainabilityTypes;
};

export default function SustainabilityDescription({
  menus,
  sustainability,
}: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[2]?.node.label || "";

  const initialActions = sustainability.actionsGroup.actions.map(
    (initialAction) => [
      {
        name: initialAction.actionsPoints.actionsHeading,
        current: !!initialAction.actionsPoints.current ?? false,
        actions: initialAction.actionsPoints.actions?.map((action) => [
          { heading: action.heading, textblock: action.textblock },
        ]),
      },
    ]
  );

  const [actions, setActions] = useState(initialActions);
  const initialFirstTabActions = actions[0][0]?.actions || [];
  const flattenedInitialFirstTabActions = initialFirstTabActions.flat();
  const [currentActionsPoints, setCurrentActionsPoints] = useState<Content[]>(
    flattenedInitialFirstTabActions
  );

  const handleTabClick = (clickedTabName: string) => {
    const updatedActions = actions.map((actionsArray) =>
      actionsArray.map((action) => ({
        ...action,
        current: action.name === clickedTabName,
      }))
    );
    setActions(updatedActions);

    const selectedActionsArray = actions.find(
      (actionsArray) => actionsArray[0].name === clickedTabName
    );

    if (selectedActionsArray) {
      const flattenedActions = selectedActionsArray[0].actions.flat();
      setCurrentActionsPoints(flattenedActions);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedActionName = event.target.value;
    const selectedActionsArray = actions.find(
      (actionsArray) => actionsArray[0].name === selectedActionName
    );

    if (selectedActionsArray) {
      const flattenedActions = selectedActionsArray[0].actions.flat();
      setCurrentActionsPoints(flattenedActions);
    }
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative hidden h-80 lg:-ml-8 lg:block lg:h-auto lg:w-full lg:grow xl:ml-0">
            <NextImage
              // TODO: add query for image
              src="/sustainability.png"
              alt={sustainability.image.altText}
              className="size-full absolute inset-0 bg-gray-50 object-cover"
              width={2560}
              height={3413}
            />
          </div>
          <div className="lg:hidden">
            <NextImage
              // TODO: add query for image
              // TODO: add different image for mobile
              src="/sustainability.png"
              alt={sustainability.image.altText}
              width={2560}
              height={3413}
              className="aspect-[3/2] object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-0 xl:w-1/2">
            <SectionHeader
              headingId="SustainabilityDescription-heading"
              currentMenuLabel={currentMenuLabel}
              headingText={sustainability.heading}
            />
            <p className="mt-6 text-xl/6 text-gray-700">
              {sustainability.textblock}
            </p>
            <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
              <p>{sustainability.textblockSecondary}</p>

              {/* TODO: add query for h2 and paragraph  */}
              <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">
                Responsible travel
              </h2>
              <p className="mt-6">
                Responsible travel is a cornerstone of our company's identity.
                We aspire to magnify the positive impacts of tourism on
                individuals and local communities while mitigating negative
                social, environmental, and economic effects. Our dedication to
                sustainability is an ongoing endeavour involving every member of
                our company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
