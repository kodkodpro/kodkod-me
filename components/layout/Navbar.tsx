import { headers } from "next/headers"
import { Button } from "@/components/catalyst/button"
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
  { label: "Feedback", url: "/#feedback" },
] as const

export default function Navbar() {
  const headerList = headers()
  const isHomePage = headerList.get("x-current-path") === "/"
  
  return (
    <NavbarCatalyst>
      {!isHomePage && (
        <NavbarSection>
          <NavbarItem href="/">
            <span className="px-1 text-xl font-semibold">Andrew Kodkod</span>
          </NavbarItem>
        </NavbarSection>
      )}
      <NavbarSpacer />
      <NavbarSection className="max-lg:hidden">
        {navItems.map(({ label, url }) => (
          <NavbarItem key={label} href={url}>
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
