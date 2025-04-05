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
import SustainabilityDescription from "./SustainabilityDescription";
import SustainabilityActions from "./SustainabilityActions";
import { CallToAction } from "components/CallToAction";

type Props = {
  menus: MenusTypes;
  sustainability: SustainabilityTypes;
};

export default function Sustainability({ menus, sustainability }: Props) {
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[2]?.node.path?.substring(1) || "";

  return (
    <SectionContainer id={currentMenuPath}>
      <SustainabilityDescription
        menus={menus}
        sustainability={sustainability}
      />
      <SustainabilityActions menus={menus} sustainability={sustainability} />
      <CallToAction
        text="If you have any questions or feedback regarding sustainability, please send us an email."
        buttonText="contact[at]adtravel.is"
        onClick={() => {}}
        label="We care about your feedback."
      />
    </SectionContainer>
  );
}
