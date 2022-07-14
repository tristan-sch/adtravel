import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center font-openSans`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-xl leading-none font-nunito`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium leading-loose font-openSans`}
  }
`;

const About = ({ services, menus, about }) => {
  return (
    <Container id="about">
      <ThreeColumnContainer>
        {menus.nodes.map((menu, i) => (
          <Subheading key={i}>{menu.menuItems.edges[0].node.label}</Subheading>
        ))}
        <Heading>{about.aboutHeading}</Heading>
        <Description>{about.aboutDescription}</Description>
        <VerticalSpacer />
        {services.map((service, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <Image
                  src={service.node.icon.icon.mediaItemUrl}
                  alt={service.node.icon.icon.altText}
                  width={24}
                  height={24}
                />
              </span>
              <span className="textContainer">
                <span className="title">{service.node.title}</span>

                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: service.node.content }}
                ></div>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
export default About;
