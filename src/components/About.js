import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, AboutContainer } from "../misc/Layouts.js";

const ThreeColumnContainer = tw.div`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-2`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center font-openSans`;
const VerticalSpacer = tw.div`mt-10 w-full`;
const Column = tw.div`md:w-1/2 lg:w-1/3 max-w-sm`;
const Card = tw.div`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`;
const ImageContainer = tw.span`border text-center rounded-full p-5 flex-shrink-0`;
const TextContainer = tw.span`sm:ml-4 mt-4 sm:mt-2`;
const Title = tw.span`mt-4 tracking-wide font-bold text-xl leading-none font-nunito`;
const SiteDescription = tw.div`mt-1 sm:mt-4 font-medium leading-loose font-openSans`;

const About = ({ services, menus, about }) => {
  return (
    <Container id="about">
      <AboutContainer>
        <ThreeColumnContainer>
          {menus.nodes.map((menu, i) => (
            <Subheading key={i}>
              {menu.menuItems.edges[0].node.label}
            </Subheading>
          ))}
          <Heading>{about.aboutHeading}</Heading>
          <Description>{about.aboutDescription}</Description>
          <VerticalSpacer />
          {services.map((service, i) => (
            <Column key={i}>
              <Card>
                <ImageContainer>
                  <Image
                    src={service.node.icon.icon.mediaItemUrl}
                    alt={service.node.icon.icon.altText}
                    width={24}
                    height={24}
                  />
                </ImageContainer>
                <TextContainer>
                  <Title>{service.node.title}</Title>

                  <SiteDescription
                    dangerouslySetInnerHTML={{ __html: service.node.content }}
                  ></SiteDescription>
                </TextContainer>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </AboutContainer>
    </Container>
  );
};
export default About;
