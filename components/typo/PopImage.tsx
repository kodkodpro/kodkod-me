import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

export type PopImageProps = ImageProps

export default function PopImage({ className, ...props }: PopImageProps) {
  return (
    <div
      className={twMerge("transition-all lg:scale-125 lg:py-[3%]", className)}
    >
      <Link
        href={props.src as string}
        target="_blank"
      >
        <Image
          {...props}
          className="max-w-full rounded"
        />
      </Link>
    </div>
  )
}
