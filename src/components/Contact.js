import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
// import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, ContactContainer } from "../misc/Layouts.js";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;

const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none font-nunito`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium font-openSans`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-dark leading-none hocus:text-primary-dark transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const Footer = tw.div`relative bg-gray-200 text-gray-700 -mb-8 px-8 pb-20 lg:pb-10`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const Divider = tw.div`my-10 border-b-2 border-gray-300 w-full`;
const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;
const LogoContainer = tw.div`flex items-center justify-center `;
const CopywrightNotice = tw.p`text-center text-sm sm:text-base my-8  md:my-0 font-medium text-gray-500`;

const Contact = ({ contact, menus }) => {
  return (
    <Container id="contact">
      <ContactContainer>
        {menus.nodes.map((menu, i) => (
          <Subheading key={i}>{menu.menuItems.edges[3].node.label}</Subheading>
        ))}
        <Heading>{contact.contact.contactHeading}</Heading>
        <Description>{contact.contact.contactDescription}</Description>
        <ThreeColumnContainer>
          <Column>
            <Card href={contact.contact.adressUrl} target="_blank">
              <span className="imageContainer">
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={contact.contact.adressPicto.mediaItemUrl}
                />
              </span>
              <span className="title">Our office</span>
              <p className="description">{contact.contact.adress}</p>

              <span className="link">
                <span>Visit us</span>
              </span>
            </Card>
          </Column>
          <Column>
            <Card href={contact.contact.phoneUrl}>
              <span className="imageContainer">
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={contact.contact.phonePicto.mediaItemUrl}
                />
              </span>
              <span className="title">Phone</span>
              <p className="description">{contact.contact.phone}</p>

              <span className="link">
                <span>Call us</span>
              </span>
            </Card>
          </Column>
          <Column>
            <Card href={contact.contact.emailUrl}>
              <span className="imageContainer">
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={contact.contact.emailPicto.mediaItemUrl}
                />
              </span>
              <span className="title">Email</span>
              <p className="description">{contact.contact.email}</p>

              <span className="link">
                <span>Write us</span>
              </span>
            </Card>
          </Column>
        </ThreeColumnContainer>
      </ContactContainer>
      <Footer>
        <Content>
          <Divider />
          <ThreeColRow>
            <LogoContainer>
              <Image
                width={130}
                height={91}
                alt={contact.contact.logo1.altText}
                src={contact.contact.logo1.sourceUrl}
              />
            </LogoContainer>
            <CopywrightNotice>
              &copy; 2022 AD Travel. All Rights Reserved.
            </CopywrightNotice>
            <LogoContainer>
              <Image
                width={115}
                height={115}
                alt={contact.contact.logo2.altText}
                src={contact.contact.logo2.sourceUrl}
              />
            </LogoContainer>
          </ThreeColRow>
        </Content>
      </Footer>
    </Container>
  );
};
export default Contact;
