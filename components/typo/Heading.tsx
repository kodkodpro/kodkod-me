import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export type HeadingProps = ComponentProps<"h2">

export default function Heading({ className, children, ...props }: HeadingProps) {
  return (
    <h2
      {...props}
      className={twMerge(
        "border-b-2 border-gray-900 pb-8 text-6xl font-medium uppercase",
        className
      )}
    >
      {children}
    </h2>
  )
}
