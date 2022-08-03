import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import Image from "next/image";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, FaqContainer } from "../misc/Layouts.js";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center font-openSans`;
const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;
const QuestionsContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold font-nunito`;
const QuestionToggleIcon = motion(tw.span`ml-2 transition duration-300`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed font-openSans`
);

const Faq = ({ menus, faq, questions }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container id="faq">
      <FaqContainer>
        <Column>
          <HeaderContent>
            {menus.nodes.map((menu, i) => (
              <Subheading key={i}>
                {menu.menuItems.edges[2].node.label}
              </Subheading>
            ))}
            <Heading>{faq.faq.faqHeading}</Heading>
            <Description>{faq.faq.faqDescription}</Description>
          </HeaderContent>
          <QuestionsContainer>
            {questions.map((question, i) => (
              <FAQ
                key={i}
                onClick={() => {
                  toggleQuestion(i);
                }}
                className="group"
              >
                <Question>
                  <QuestionText> {question.node.title} </QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === i ? "open" : "collapsed"}
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <span>
                      <Image
                        src={faq.faq.faqIcon.sourceUrl}
                        alt={faq.faq.faqIcon.altText}
                        width={24}
                        height={24}
                      />
                    </span>
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === i ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: question.node.content }}
                  />
                </Answer>
              </FAQ>
            ))}
          </QuestionsContainer>
        </Column>
      </FaqContainer>
    </Container>
  );
};
export default Faq;
