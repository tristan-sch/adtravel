import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  closeBanner: () => void;
};

export default function Banner({ closeBanner }: Props) {
  const [isBanner, setIsBanner] = useState(true);
  return (
    // TODO: add queries
    <div className="bottom-5 flex items-center gap-x-6 bg-gray-700 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <Link
          href="https://safetravel.is/eruption-in-reykjanes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong className="font-semibold">Volcanic eruption</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          Live information about the eruption in Litli Hrútur &nbsp;
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={closeBanner}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
