import { headers } from "next/headers"
import Image from "next/image"
import Icon from "@/app/icon.png"
import { Button } from "@/components/catalyst/button"
import { Link } from "@/components/catalyst/link"
import {
  Navbar as NavbarCatalyst,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/catalyst/navbar"

export const navItems = [
  { label: "Portfolio", url: "/#portfolio" },
  { label: "Skills", url: "/#skills" },
  { label: "Testimonials", url: "/#testimonials" },
] as const

export default function Navbar() {
  const headerList = headers()
  const isHomePage = headerList.get("x-current-path") === "/"
  
  return (
    <NavbarCatalyst>
      {!isHomePage && (
        <NavbarSection>
          <Link
            href="/"
            className="hover:opacity-80"
          >
            <span className="flex items-center gap-1 px-1">
              <Image
                src={Icon}
                alt="Cat's Face Silhouette"
                width={512}
                height={512}
                className="inline-block h-10 w-auto"
              />
            
              <span className="text-xl font-semibold">
                Andrew Kodkod
              </span>
            </span>
          </Link>
        </NavbarSection>
      )}
      <NavbarSpacer />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url }) => (
          <NavbarItem
            key={label}
            href={url}
          >
            {label}
          </NavbarItem>
        ))}
      </NavbarSection>
      <NavbarDivider className="hidden lg:block" />
      <Button href="/#contact-me">
        Contact Me
      </Button>
    </NavbarCatalyst>
  )
}
