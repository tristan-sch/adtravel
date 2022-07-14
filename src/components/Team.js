import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, TeamContainer } from "../misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center font-openSans`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-20 w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-40 h-40 bg-contain bg-center rounded-full`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-wide text-xs text-primary-dark font-nunito`}
  }
  .name {
    ${tw`mt-1 text-lg font-medium text-gray-900 font-openSans`}
  }
`;

export default ({ menus, team, staff }) => {
  return (
    <Container>
      <TeamContainer>
        <HeadingContainer id="team">
          {menus.nodes.map((menu, i) => (
            <Subheading key={i}>
              {menu.menuItems.edges[1].node.label}
            </Subheading>
          ))}
          <Heading>{team.teamHeading}</Heading>
          <Description>{team.teamDescription}</Description>
        </HeadingContainer>
        <Cards>
          {staff.map((staff, i) => (
            <Card key={i}>
              <CardImage imageSrc={staff.node.featuredImage.node.sourceUrl} />
              <CardContent>
                <span
                  className="position"
                  dangerouslySetInnerHTML={{ __html: staff.node.content }}
                />
                <span className="name">{staff.node.title}</span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </TeamContainer>
    </Container>
  );
};
