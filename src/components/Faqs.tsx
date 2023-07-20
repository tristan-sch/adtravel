import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { Container } from "./Containers";
import { FAQTypes, MenusTypes, QuestionTypes } from "../types/queryTypes";

type Props = {
  menus: MenusTypes;
  faq: FAQTypes;
  faqQuestions: QuestionTypes;
};

export default function Faqs({ menus, faq, faqQuestions }: Props) {
  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ];

  return (
    <section
      // TODO: add query for id
      id="faq"
      // TODO: add Aria label
      className="bg-gray-100 py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {menus.nodes.map((menu, i) => (
              <p
                className="text-base font-semibold leading-7 text-cyan-700"
                key={i}
              >
                {menu.menuItems.edges[3].node.label}
              </p>
            ))}

            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {faq.faqHeading}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {faq.faqDescription}
            </p>
          </div>
          <div>
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqQuestions.map((question, i) => (
                  <Disclosure as="div" key={question.node.id} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {question.node.title}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <div
                            className="text-base leading-7 text-gray-600"
                            dangerouslySetInnerHTML={{
                              __html: question.node.content,
                            }}
                          />
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
