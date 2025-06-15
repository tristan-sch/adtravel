import { CallToAction } from 'components/CallToAction'

import { MenusTypes, SustainabilityTypes } from '../../types/queryTypes'

import { SustainabilityActions } from './SustainabilityActions'
import { SustainabilityDescription } from './SustainabilityDescription'

type Props = {
  menus: MenusTypes
  sustainability: SustainabilityTypes
}

export const Sustainability = ({ menus, sustainability }: Props) => {
  return (
    <section
      aria-labelledby={`${sustainability.slug}-heading`}
      className="relative"
      id={sustainability.slug}
    >
      <SustainabilityDescription menus={menus} sustainability={sustainability} />
      <SustainabilityActions menus={menus} sustainability={sustainability} />

      <CallToAction
        text={sustainability.sustainability.banner.text}
        buttonText={sustainability.sustainability.banner.email}
        onClick={() => {
          window.location.href = `mailto:${sustainability.sustainability.banner.email}`
        }}
        label={sustainability.sustainability.banner.label}
      />
    </section>
  )
}
