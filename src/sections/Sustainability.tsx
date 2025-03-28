import Image from "next/image";

import { useState } from "react";
import { MenusTypes, SustainabilityTypes } from "../types/queryTypes";
import { Content } from "types/sharedTypes";
import sanitizeHtml from "sanitize-html";
import Link from "next/link";
import { SectionHeader } from "../components/Text/SectionHeader";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { SectionContainer } from "../components/SectionContainer";

type Props = {
  menus: MenusTypes;
  sustainability: SustainabilityTypes;
  containerClasses?: string;
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Sustainability({
  menus,
  sustainability,
  containerClasses,
}: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[2]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[2]?.node.path?.substring(1) || "";

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
    <SectionContainer id={currentMenuPath}>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                className="size-full absolute inset-0 bg-gray-50 object-cover"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-base/7 font-semibold text-indigo-600">
                Deploy faster
              </p>
              <h1 className="text-pretty mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                A better workflow
              </h1>
              <p className="mt-6 text-xl/6 text-gray-700">
                The acknowledgment of the "Travelife Partner" award reflects our
                dedication to social and environmental sustainability. We adhere
                to over 145 criteria encompassing sustainability management,
                office operations, collaboration with suppliers, and
                communication with customers. Our ongoing efforts are geared
                towards continual enhancements with the ultimate goal of
                attaining the "Travelife Certified" status, complying to 230
                criteria.
              </p>
              <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
                <p>
                  At AD Travel, we are steadfast in our commitment to fostering
                  sustainable growth in our business operations. Recognising the
                  profound importance of the environment, communities, and
                  cultures that surround us, we acknowledge that their
                  well-being is integral to the success of our enterprise.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Responsible travel
                </h2>
                <p className="mt-6">
                  Responsible travel is a cornerstone of our company's identity.
                  We aspire to magnify the positive impacts of tourism on
                  individuals and local communities while mitigating negative
                  social, environmental, and economic effects. Our dedication to
                  sustainability is an ongoing endeavour involving every member
                  of our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
