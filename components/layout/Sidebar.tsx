import { Sidebar as SidebarCatalyst, SidebarBody, SidebarHeader, SidebarItem, SidebarSection } from "@/components/catalyst/sidebar"
import { navItems } from "@/components/layout/Navbar"

export default function Sidebar() {
  return (
    <SidebarCatalyst>
      <SidebarHeader>
        <SidebarItem href="/">
          Andrew Kodkod
        </SidebarItem>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {navItems.map(({ label, url }) => (
            <SidebarItem key={label} href={url}>
              {label}
            </SidebarItem>
          ))}
        </SidebarSection>
      </SidebarBody>
    </SidebarCatalyst>
  )
}
