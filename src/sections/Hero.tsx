import { NextImage } from 'components/NextImage'
import { Link } from 'components/NextLink'

import { HeaderTypes, SettingsTypes } from 'types/queryTypes'

type Props = {
  header: HeaderTypes
  settings: SettingsTypes
  containerClasses?: string
}

export const Hero = ({ header, settings, containerClasses }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <div className={`${containerClasses}`}>
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {header.teaser.teaser}{' '}
                  <Link
                    href={header.teaser.teaserButton.url}
                    className="whitespace-nowrap font-semibold text-cyan-700"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {header.teaser.teaserButton.title}{' '}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <h1 className="text-pretty font-openSans text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {settings.description}
              </h1>
              <p className="text-pretty mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                {header.textblock}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href={header.buttons.primaryButton.url}
                  className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                >
                  {header.buttons.primaryButton.title}
                </Link>
                <Link
                  href={header.buttons.secondaryButton.url}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  {header.buttons.secondaryButton.title} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2 lg:bg-gray-50">
        <NextImage
          src={header.images.backgroundImage.sourceUrl}
          alt={header.images.backgroundImage.altText}
          className="size-full aspect-[3/2] aspect-auto object-cover"
          fill
        />
      </div>

      <div className="lg:hidden">
        <NextImage
          src={header.images.backgroundImage.sourceUrl}
          alt={header.images.backgroundImage.altText}
          width={1920}
          height={1440}
          className="aspect-[3/2] object-cover"
        />
      </div>
    </section>
  )
}
