import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

import { SelectMenu } from 'components/SelectMenu'
import { SectionHeader } from 'components/Text/SectionHeader'

import { useIsMounted } from 'hooks/useIsMounted'
import { useViewportChange } from 'hooks/useResponsiveActions'
import { MenusTypes, SustainabilityTypes } from 'types/queryTypes'

type Props = {
  menus: MenusTypes
  sustainability: SustainabilityTypes
}

export const SustainabilityActions = ({ menus, sustainability }: Props) => {
  const isMounted = useIsMounted()
  const currentMenuLabel =
    menus.nodes[0]?.menuItems?.edges?.[2]?.node?.label ?? 'Sustainability'

  // Prepare actions
  const categories = sustainability.sustainabilityActions.sustainabilityActionsCategories
  const actions = categories.map((category) => ({
    label: category.actionsTypes.label,
    topics: category.actionsTypes.actions.map((topic) => ({
      title: topic.title,
      details: topic.details.map((d) => d.bulletpoint),
    })),
  }))

  // Use first category as initial
  const initialCategory = actions[0] ?? { label: '', topics: [] }
  const [currentCategoryLabel, setCurrentCategoryLabel] = useState(initialCategory.label)
  const [currentTopics, setCurrentTopics] = useState(initialCategory.topics)

  // Handle tab click
  const handleTabClick = (clickedLabel: string) => {
    const selectedCategory = actions.find((cat) => cat.label === clickedLabel)
    setCurrentCategoryLabel(selectedCategory?.label ?? '')
    setCurrentTopics(selectedCategory?.topics ?? [])
  }

  // Reset on viewport change
  useViewportChange(640, () => {
    setCurrentCategoryLabel(initialCategory.label)
    setCurrentTopics(initialCategory.topics)
  })

  return (
    <div className="relative pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            headingId="sustainabilityActions"
            currentMenuLabel={currentMenuLabel}
            headingText={
              sustainability.sustainabilityActions.sustainabilityActionsHeading
            }
            description={
              sustainability.sustainabilityActions.sustainabilityActionsTextblock
            }
          />
        </div>

        {/* Desktop View */}
        <div className="mt-16 hidden justify-center sm:flex">
          <fieldset aria-label="Sustainability actions">
            <RadioGroup
              value={currentCategoryLabel}
              onChange={handleTabClick}
              className={`grid gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200 ${
                actions.length === 1
                  ? 'grid-cols-1'
                  : actions.length === 2
                  ? 'grid-cols-2'
                  : actions.length === 3
                  ? 'grid-cols-3'
                  : actions.length === 4
                  ? 'grid-cols-4'
                  : 'grid-cols-5'
              }`}
            >
              {actions.map((cat, i) => (
                <Radio
                  key={i}
                  value={cat.label}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-cyan-700 data-[checked]:text-white"
                >
                  {cat.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>

        {/* Mobile View */}
        <div className="mt-16 flex justify-center sm:hidden">
          <SelectMenu
            items={actions.map((cat) => ({
              label: cat.label,
            }))}
            handleSelectChange={handleTabClick}
          />
        </div>

        {/* Current Topics */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {currentTopics.map((topic, i) => (
            <div key={i} className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10">
              <p className="text-sm/6 text-gray-500">{currentCategoryLabel}</p>
              <h3 className="mt-2 text-base font-semibold text-gray-900">
                {topic.title}
              </h3>
              {/* {isMounted &&
                topic.details.map((bullet, j) => (
                  <div
                    key={j}
                    className="specific-section prose prose-gray mt-4 text-sm/6 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeAllHtmlContent(bullet),
                    }}
                  />
                ))} */}
              {topic.details.length > 0 && (
                <ul className="prose prose-gray mt-4 list-disc pl-5">
                  {topic.details.map((bullet, j) => (
                    <li key={j} className="mb-2 text-sm/6 text-gray-600">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
