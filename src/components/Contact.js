import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, ContactContainer } from "../misc/Layouts.js";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = tw.div`mt-10 flex flex-col items-center justify-center sm:items-stretch sm:flex-row flex-wrap  max-w-screen-lg mx-auto`;
const Column = tw.div`lg:w-1/3 max-w-xs`;
const Card = tw.a`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`;
const ImageContainer = tw.span`text-center rounded-full p-4 bg-gray-100`;
const Title = tw.span`mt-4 font-bold text-xl leading-none font-nunito`;
const SubDescription = tw.p`mt-4 text-sm font-medium font-openSans`;
const DescriptionLink = tw.span`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-dark leading-none hocus:text-primary-dark transition duration-300`;
// Footer
const Footer = tw.div`relative bg-gray-100`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-12 lg:py-12 flex flex-wrap items-center`;
const ColumnFooter = tw.div` w-1/2 md:w-1/4 flex items-center justify-center `;
const ColumnHeading = tw.h5`font-bold`;
const LinkList = tw.ul`hidden mt-4 text-sm font-medium md:block`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-dark `;
const LogoContainer = tw.div`flex items-center justify-center `;

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
              <ImageContainer>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={contact.contact.adressPicto.mediaItemUrl}
                />
              </ImageContainer>
              <Title>Our office</Title>
              <SubDescription>{contact.contact.adress}</SubDescription>

              <DescriptionLink>
                <span>Visit us</span>
              </DescriptionLink>
            </Card>
          </Column>
          <Column>
            <Card href={contact.contact.phoneUrl}>
              <ImageContainer>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={contact.contact.phonePicto.mediaItemUrl}
                />
              </ImageContainer>
              <Title>Phone</Title>
              <SubDescription>{contact.contact.phone}</SubDescription>

              <DescriptionLink>
                <span>Call us</span>
              </DescriptionLink>
            </Card>
          </Column>
          <Column>
            <Card href={contact.contact.emailUrl}>
              <ImageContainer>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={contact.contact.emailPicto.mediaItemUrl}
                />
              </ImageContainer>
              <Title>Email</Title>
              <SubDescription>{contact.contact.email}</SubDescription>

              <DescriptionLink>
                <span>Write us</span>
              </DescriptionLink>
            </Card>
          </Column>
        </ThreeColumnContainer>
      </ContactContainer>
      <Footer>
        <FiveColumns>
          <ColumnFooter>
            <LinkList>
              <ColumnHeading>Menu</ColumnHeading>
              {menus.nodes.map((menu, i) => (
                <div key={i}>
                  {menu.menuItems.edges.map(({ node }) => (
                    <Link key={node.id} href={node.path} passHref>
                      <LinkListItem>{node.label}</LinkListItem>
                    </Link>
                  ))}
                </div>
              ))}
            </LinkList>
          </ColumnFooter>
          <ColumnFooter>
            <LinkList>
              <ColumnHeading>Useful links</ColumnHeading>
              <LinkListItem>
                <Link
                  href={contact.contact.usefulLinks.usefulLink1Link}
                  target="_blank"
                >
                  {contact.contact.usefulLinks.usefulLink1}
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link
                  href={contact.contact.usefulLinks.usefulLink2Link}
                  target="_blank"
                >
                  {contact.contact.usefulLinks.usefulLink2}
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link
                  href={contact.contact.usefulLinks.usefulLink3Link}
                  target="_blank"
                >
                  {contact.contact.usefulLinks.usefulLink3}
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link
                  href={contact.contact.usefulLinks.usefulLink4Link}
                  target="_blank"
                >
                  {contact.contact.usefulLinks.usefulLink4}
                </Link>
              </LinkListItem>
            </LinkList>
          </ColumnFooter>
          <ColumnFooter>
            <LogoContainer>
              <Link href={contact.contact.logo2Link} target="_blank">
                <Image
                  width={150}
                  height={150}
                  alt={contact.contact.logo2.altText}
                  src={contact.contact.logo2.sourceUrl}
                />
              </Link>
            </LogoContainer>
          </ColumnFooter>
          <ColumnFooter>
            <LogoContainer>
              <Link href="/#">
                <Image
                  width={150}
                  height={105}
                  alt={contact.contact.logo1.altText}
                  src={contact.contact.logo1.sourceUrl}
                  className="logoFooter"
                />
              </Link>
            </LogoContainer>
          </ColumnFooter>
        </FiveColumns>
      </Footer>
    </Container>
  );
};
export default Contact;
