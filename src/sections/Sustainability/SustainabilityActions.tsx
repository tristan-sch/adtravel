import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

import { SelectMenu } from 'components/SelectMenu'

import { useIsMounted } from 'hooks/useIsMounted'
import { useViewportChange } from 'hooks/useResponsiveActions'
import { Content } from 'types/sharedTypes'
import { sanitizeAllHtmlContent } from 'utils/utils'

import { SectionHeader } from '../../components/Text/SectionHeader'
import { MenusTypes, SustainabilityTypes } from '../../types/queryTypes'

type Props = {
  menus: MenusTypes
  sustainability: SustainabilityTypes
}

export const SustainabilityActions = ({ menus, sustainability }: Props) => {
  const isMounted = useIsMounted()

  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[2]?.node.label || ''

  // Initialize actions
  const initialActions = sustainability.actionsGroup.actions.map((initialAction) => [
    {
      name: initialAction.actionsPoints.actionsHeading,
      current: !!initialAction.actionsPoints.current,
      actions: initialAction.actionsPoints.actions.map((action) => [
        { heading: action.heading, textblock: action.textblock },
      ]),
    },
  ])

  const [actions, setActions] = useState(initialActions)
  const initialFirstTabActions = actions[0][0]?.actions
  const flattenedInitialFirstTabActions = initialFirstTabActions.flat()
  const [currentActionsPoints, setCurrentActionsPoints] = useState<Array<Content>>(
    flattenedInitialFirstTabActions,
  )

  const [currentActionsCategory, setCurrentActionsCategory] = useState(
    initialActions[0][0].name,
  )

  // Handle tab click (desktop and mobile)
  const handleTabClick = (clickedTabName: string) => {
    const updatedActions = actions.map((actionsArray) =>
      actionsArray.map((action) => ({
        ...action,
        current: action.name === clickedTabName,
      })),
    )
    setActions(updatedActions)

    const selectedActionsArray = actions.find(
      (actionsArray) => actionsArray[0].name === clickedTabName,
    )

    setCurrentActionsCategory(selectedActionsArray?.[0].name || '')

    if (selectedActionsArray) {
      const flattenedActions = selectedActionsArray[0].actions.flat()
      setCurrentActionsPoints(flattenedActions)
    }
  }

  // Handle resetting actions on view change
  useViewportChange(640, () => {
    // Reset actions to the initial state
    setActions(initialActions)

    // Reset current actions points to the first tab
    const flattenedActions = initialActions[0][0]?.actions.flat()
    setCurrentActionsPoints(flattenedActions)
  })

  return (
    <div className="relative pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            headingId="sustainabilityActions"
            currentMenuLabel={currentMenuLabel}
            headingText={sustainability.actionsGroup.heading}
            description={sustainability.actionsGroup.textblock}
          />
        </div>

        {/* Desktop View */}
        <div className="mt-16 hidden justify-center sm:flex">
          <fieldset aria-label="Sustainability actions">
            <RadioGroup
              value={actions.find((action) => action[0].current)?.[0].name}
              onChange={(selectedName) => handleTabClick(selectedName)}
              className="grid grid-cols-3 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200"
            >
              {actions.map((action, i) => (
                <Radio
                  key={i}
                  value={action[0].name}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-cyan-700 data-[checked]:text-white"
                >
                  {action[0].name}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>

        {/* Mobile View */}
        <div className="mt-16 flex justify-center sm:hidden">
          <SelectMenu
            items={actions.map((action) => ({
              label: action[0].name,
            }))}
            handleSelectChange={(selectedAction) => handleTabClick(selectedAction)}
          />
        </div>

        {/* Current Actions Points */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {currentActionsPoints.map((currentActionsPoint, i) => (
            <div key={i} className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10">
              <p className="text-sm/6 text-gray-500">{currentActionsCategory}</p>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg/8 font-semibold text-gray-900">
                  {currentActionsPoint.heading}
                </h3>
              </div>
              {isMounted && (
                <div
                  className="specific-section prose prose-gray mt-4 text-sm/6 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeAllHtmlContent(currentActionsPoint.textblock),
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
