type SectionHeaderProps = {
  headingId: string;
  currentMenuLabel: string;
  headingText?: string;
  description?: string;
  descriptionSecondary?: string;
  className?: string;
};

export const SectionHeader = ({
  headingId,
  currentMenuLabel,
  headingText = "",
  description = "",
  descriptionSecondary = "",
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`mb-10 ${className}`}>
      <p className="text-base font-semibold leading-7 text-cyan-700">
        {currentMenuLabel}
      </p>
      <h2
        id={headingId}
        className="mt-2 font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl"
      >
        {headingText}
      </h2>
      <p className="mt-4 text-gray-500">{description}</p>
      <p className="mt-4 text-gray-500">{descriptionSecondary}</p>
    </div>
  );
};
