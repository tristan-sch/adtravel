import Image from "next/image";
import Link from "next/link";
import { SettingsTypes, HeaderTypes } from "types/queryTypes";

type Props = {
  settings: SettingsTypes;
  header: HeaderTypes;
};

export default function Hero({ settings, header }: Props) {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          className="absolute inset-0 -z-10 w-full bg-black object-cover opacity-30"
          alt={header.backgroundImage.altText}
          src={header.backgroundImage.sourceUrl}
          fill
          priority
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {header.teaser && (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-white/10 hover:ring-white/20 lg:text-base">
                {header.teaser}{" "}
                <Link
                  href={header.teaserButton.url}
                  className="font-semibold text-white"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  {header.teaserButton.title}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          )}
          <div className="text-center">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
              {settings.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-100">
              {header.textblock}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={header.primaryButton.url}
                passHref
                className="rounded-md bg-cyan-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {header.primaryButton.title}
              </Link>
              <Link
                // TODO: add queries for faq url and title
                href={header.secondaryButton.url}
                className="text-sm font-semibold leading-6 text-white"
              >
                {header.secondaryButton.title} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
