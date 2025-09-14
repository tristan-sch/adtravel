import { MenusTypes, SustainabilityTypesNew } from 'types/queryTypes'

import { SustainabilityDescription } from './SustainabilityDescription'

type Props = {
  menus: MenusTypes
  sustainability: SustainabilityTypesNew
}

export const Sustainability = ({ menus, sustainability }: Props) => {
  return (
    <section
      aria-labelledby={`${sustainability.slug}-heading`}
      className="relative"
      id={sustainability.slug}
    >
      <SustainabilityDescription
        menus={menus}
        sustainabilityContent={sustainability.sustainabilityContent}
      />
      {/* <SustainabilityActions menus={menus} sustainability={sustainability} /> */}
      {/* <CallToAction
        text={sustainability.sustainability.banner.text}
        buttonText={sustainability.sustainability.banner.email}
        onClick={() => {
          window.location.href = `mailto:${sustainability.sustainability.banner.email}`
        }}
        label={sustainability.sustainability.banner.label}
      /> */}
    </section>
  )
}
