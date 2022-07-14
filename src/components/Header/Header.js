import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  ${tw`relative -mt-8 bg-center bg-cover h-screen min-h-144`}
`;

// Nav
const NavWrapper = tw.div`flex items-center justify-between pt-16  lg:px-10`;
const BrandWrapper = tw.div`flex items-center justify-between text-gray-100 font-nunito`;
const Logo = tw.div`mr-3 z-20`;
const Title = tw.div`hidden h-6 text-lg font-semibold lg:block`;

const DesktoplinksWrapper = styled.div`
  ${tw`flex items-center text-base leading-5`}
  .wrapper {
    ${tw`flex`}
  }
`;

const DesktopLink = styled.div`
  ${tw`relative hidden sm:block `}
  .link {
    ${tw`p-1 font-medium text-gray-100 lg:p-6 sm:p-4 font-nunito hover:underline cursor-pointer`}
  }
`;

const PrimaryAction = tw.button`rounded-lg px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-dark text-gray-100 hocus:bg-secondary-dark hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

// Header
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-60`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 md:-mt-20 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 leading-snug  -mt-24 sm:mt-0 font-nunito`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export default ({ header, menus, settings }) => {
  return (
    <Container>
      <OpacityOverlay />
      <Image
        alt={header.header.heroImg.altText}
        src={header.header.heroImg.sourceUrl}
        layout="fill"
        objectFit="cover"
        priority="true"
      />
      <HeroContainer>
        <NavWrapper>
          <div>
            <Link href="/" aria-label="aria label">
              <BrandWrapper>
                <Logo className="logo">
                  <Image
                    src={header.header.adTravelLogo.sourceUrl}
                    alt={header.header.adTravelLogo.altText}
                    width={133}
                    height={94}
                  />
                </Logo>

                <Title className="title">{settings.description}</Title>
              </BrandWrapper>
            </Link>
          </div>
          <DesktoplinksWrapper>
            {menus.nodes.map((menu, i) => (
              <div className="wrapper" key={i}>
                {menu.menuItems.edges.map(({ node }) => (
                  <div key={node.id}>
                    <DesktopLink>
                      <Link href={node.path} passHref>
                        <div className="link">{node.label}</div>
                      </Link>
                    </DesktopLink>
                  </div>
                ))}
              </div>
            ))}

            <MobileNav menus={menus} header={header} />
          </DesktoplinksWrapper>
        </NavWrapper>

        <Content>
          <Heading>
            {settings.title}
            <br />
            {settings.description}
          </Heading>

          <PrimaryAction>
            <Link href={header.header.headerCtaUrl} passHref>
              <a>{header.header.headerCta}</a>
            </Link>
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
