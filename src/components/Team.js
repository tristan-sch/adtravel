import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import tw, { styled } from "twin.macro";
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
const Cards = tw.div`hidden sm:flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-20 w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center`;
const CardImage = styled.div`
  ${({ imageSrc }) => `
background-image: url("${imageSrc}");
`};
  ${tw`w-40 h-40 bg-contain bg-center rounded-full`}
`;
const CardContent = tw.div`flex flex-col items-center mt-6`;
const Position = tw.span`uppercase text-center font-bold tracking-wide text-xs text-primary-dark font-nunito`;

const Name = tw.span`mt-1 text-lg font-medium text-gray-900 font-openSans`;

//Slider
const SliderWrapper = tw.div`pt-6 sm:hidden`;
const SliderPosition = tw.span`uppercase text-center font-bold tracking-wide text-xs text-primary-dark font-nunito pt-6`;
const ControlsWrapper = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Controls = tw.div`flex items-center`;
const SliderCard = tw.div`mt-6 w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center`;
//Arrow icon from FAQ
const PrevButton = tw.span`px-8 py-3 rotate-90`;
const NextButton = tw.span`px-8 py-3 -rotate-90`;

const Team = ({ menus, team, staff, faq }) => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [],
  };

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

        {/* Slider for Mobile  */}
        <SliderWrapper>
          <ControlsWrapper>
            <Controls>
              <PrevButton onClick={sliderRef?.slickPrev}>
                <Image
                  src={faq.faq.faqIcon.sourceUrl}
                  alt={faq.faq.faqIcon.altText}
                  width={24}
                  height={24}
                />
              </PrevButton>
              <NextButton onClick={sliderRef?.slickNext}>
                <Image
                  src={faq.faq.faqIcon.sourceUrl}
                  alt={faq.faq.faqIcon.altText}
                  width={24}
                  height={24}
                />
              </NextButton>
            </Controls>
          </ControlsWrapper>
          <Slider ref={setSliderRef} {...sliderSettings}>
            {staff.map((staff, i) => (
              <SliderCard key={i}>
                <CardContent>
                  <CardImage
                    imageSrc={staff.node.featuredImage.node.sourceUrl}
                  />
                  <SliderPosition
                    dangerouslySetInnerHTML={{ __html: staff.node.content }}
                  />
                  <Name>{staff.node.title}</Name>
                </CardContent>
              </SliderCard>
            ))}
          </Slider>
        </SliderWrapper>
      </TeamContainer>
    </TeamContainerWrapper>
  );
};
export default Team;
