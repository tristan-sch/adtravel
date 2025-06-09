import { CallToAction } from 'components/CallToAction'

import { SectionContainer } from '../../components/SectionContainer'
import { MenusTypes, SustainabilityTypes } from '../../types/queryTypes'

import { SustainabilityActions } from './SustainabilityActions'
import { SustainabilityDescription } from './SustainabilityDescription'

type Props = {
  menus: MenusTypes
  sustainability: SustainabilityTypes
}

export const Sustainability = ({ menus, sustainability }: Props) => {
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[2]?.node.path?.substring(1) || ''

  return (
    <SectionContainer id={currentMenuPath} className="pt-0 sm:py-24">
      <SustainabilityDescription menus={menus} sustainability={sustainability} />
      <SustainabilityActions menus={menus} sustainability={sustainability} />
      {/* TODO: add query for CTA */}
      <CallToAction
        text="If you have any questions or feedback regarding sustainability, please send us an email."
        buttonText="contact@adtravel.is"
        onClick={() => {
          window.location.href = 'mailto:contact@adtravel.is'
        }}
        label="We care about your feedback."
      />
    </SectionContainer>
  )
}
