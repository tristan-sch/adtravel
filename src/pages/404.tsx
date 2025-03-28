import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <main className="pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div>
          <Image
            src="/404.png"
            alt="Photo of landscape in Iceland"
            fill
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
              Page not found
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="text-lgs font-semibold leading-7 text-white"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
