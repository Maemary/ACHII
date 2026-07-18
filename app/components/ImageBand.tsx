import Image from "next/image";

export default function ImageBand({
  src,
  alt,
  height = "h-[504px] md:h-[763px]",
  objectPosition = "object-center",
}: {
  src: string;
  alt: string;
  height?: string;
  objectPosition?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-primary-base ${height}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className={`object-cover ${objectPosition}`} />
    </div>
  );
}
