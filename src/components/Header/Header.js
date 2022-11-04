import React from "react";
import tw from "twin.macro";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";

const Hero = tw.div`relative`;
const Container = tw.div`-mt-8 sm:-mt-1 bg-center bg-cover h-screen min-h-144 max-w-screen-xl mx-auto md:px-10`;
// Nav
const NavWrapper = tw.div`flex items-center justify-between pt-16 `;
const BrandWrapper = tw.div`flex items-center justify-between text-gray-100 font-nunito`;
const Logo = tw.div`mr-3 z-20`;
const Title = tw.div`hidden h-6 text-lg font-semibold lg:block`;
const DesktoplinksWrapper = tw.div`flex items-center text-base leading-5`;
const DesktoplinksWrapperUnder = tw.div`flex`;
const DesktopLink = tw.div`relative hidden sm:block`;
const DesktopLinkItem = tw.div`border-b-2 border-transparent hocus:text-gray-200 hocus:border-gray-100 pb-1 transition duration-300 p-1 font-medium text-gray-100 lg:p-6 sm:p-4 font-nunito cursor-pointer`;
const PrimaryAction = tw.button`rounded-lg px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-dark text-gray-100 hocus:bg-secondary-dark hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
// Header
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 md:-mt-20 flex flex-1 flex-col justify-center items-center`;
const Heading = tw.h1`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 leading-snug -mt-24 sm:mt-0 font-nunito`;
const Subheading = tw.span`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-200`;

const Header = ({ header, menus, settings }) => {
  return (
    <Hero>
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
                <DesktoplinksWrapperUnder key={i}>
                  {menu.menuItems.edges.map(({ node }) => (
                    <div key={node.id}>
                      <DesktopLink>
                        <Link href={node.path} passHref>
                          <DesktopLinkItem>{node.label}</DesktopLinkItem>
                        </Link>
                      </DesktopLink>
                    </div>
                  ))}
                </DesktoplinksWrapperUnder>
              ))}

              <MobileNav menus={menus} header={header} />
            </DesktoplinksWrapper>
          </NavWrapper>

          <Content>
            <Heading>
              {settings.title}
              <br />
              <Subheading> {settings.description} </Subheading>
            </Heading>

            <PrimaryAction>
              <Link href={header.header.headerCtaUrl} passHref>
                <a>{header.header.headerCta}</a>
              </Link>
            </PrimaryAction>
          </Content>
        </HeroContainer>
      </Container>
    </Hero>
  );
};

export default Header;
