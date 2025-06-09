import clsx from 'clsx'
import { sectionContainerClasses } from 'styles/constants'

import { NextImage } from 'components/NextImage'

import { FooterTypes } from 'types/queryTypes'
import { getImageDisplaySize } from 'utils/utils'

type Props = {
  footer: FooterTypes
}

export const Footer = ({ footer }: Props) => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className={clsx('px-4 sm:px-6 lg:px-8', sectionContainerClasses)}>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div>
          <div className="mx-auto max-w-7xl overflow-hidden border-t border-gray-900/10 px-6 py-20 sm:py-24 lg:px-8">
            <nav
              className="-mb-6 columns-2 justify-center sm:flex sm:space-x-12"
              aria-label="Footer"
            >
              {footer.footerLinks.map((footerLink, i) => (
                <div key={i} className="pb-6 text-center">
                  <a
                    href={footerLink.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-gray-600 hover:text-cyan-700"
                  >
                    {footerLink.link.title}
                  </a>
                </div>
              ))}
            </nav>
            <div className="mt-10 flex items-center justify-center space-x-10">
              {footer.partnerLogos.map((partnerLogo, i) => {
                const { width, height } = getImageDisplaySize(
                  partnerLogo.partnerLogo.mediaDetails?.width,
                  partnerLogo.partnerLogo.mediaDetails?.height,
                )
                return (
                  <div className="hidden sm:flex" key={i}>
                    <a
                      href={partnerLogo.partnerLogo.imageLink?.imageLink ?? '/'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <NextImage
                        src={partnerLogo.partnerLogo.sourceUrl}
                        alt={partnerLogo.partnerLogo.altText}
                        width={width}
                        height={height}
                      />
                    </a>
                  </div>
                )
              })}
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              {footer.textblock ?? ''}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
