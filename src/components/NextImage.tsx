import Image, { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  className?: string;
  alt?: string;
  width?: number; // Optional width
  height?: number; // Optional height
  fill?: boolean; // Boolean to toggle the `fill` prop
  priority?: boolean; // Boolean to toggle the `priority` prop
};

export const NextImage = ({
  src,
  className,
  alt,
  width,
  height,
  fill = false,
  priority = false,
}: Props) => {
  return (
    <Image
      className={className}
      alt={alt || ""}
      src={src as string | StaticImageData} // Ensure src is a string or StaticImageData
      fill={fill}
      width={!fill ? width : undefined} // Only apply width if `fill` is false
      height={!fill ? height : undefined} // Only apply height if `fill` is false
      sizes="(max-width: 1024px) 100vw, 50vw"
      style={{ objectFit: "cover" }}
      placeholder="blur"
      blurDataURL={typeof src === "string" ? src : undefined} // Only use blurDataURL for string URLs
      priority={priority}
      unoptimized={true} // Unoptimized for external URLs - opimization happens on the CMS
      loading={!priority ? "lazy" : undefined} // Only apply lazy loading if `priority` is false
    />
  );
};
