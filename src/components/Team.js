import React from "react";
import tw, { styled } from "twin.macro";
import { css } from "styled-components/macro";
import { TeamContainerWrapper, TeamContainer } from "../misc/Layouts.js";
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
  ${({ imageSrc }) => `
background-image: url("${imageSrc}");
`};

  ${tw`w-40 h-40 bg-contain bg-center rounded-full`}
`;
const CardContent = tw.div`flex flex-col items-center mt-6`;
const Position = tw.span`uppercase font-bold tracking-wide text-xs text-primary-dark font-nunito`;
const Name = tw.span`mt-1 text-lg font-medium text-gray-900 font-openSans`;

const Team = ({ menus, team, staff }) => {
  return (
    <TeamContainerWrapper>
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
                <Position
                  dangerouslySetInnerHTML={{ __html: staff.node.content }}
                />
                <Name>{staff.node.title}</Name>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </TeamContainer>
    </TeamContainerWrapper>
  );
};
export default Team;
