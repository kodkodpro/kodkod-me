import { Button } from "@/components/catalyst/button"
import { NavbarDivider } from "@/components/catalyst/navbar"
import Heading from "@/components/typo/Heading"

const contactMethods = [
  {
    label: "Email",
    url: "mailto:andrew@kodkod.me",
  },
  {
    label: "Telegram",
    url: "https://t.me/akodkod",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/akodkod/",
  },
  {
    label: "GitHub",
    url: "https://github.com/akodkod",
  },
  {
    label: "Upwork",
    url: "https://www.upwork.com/freelancers/aemelianenko",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/truemelianenko/",
  },
]

export default function ContactMe() {
  return (
    <>
      <Heading
        id="contact-me"
        className="mb-16"
      >
        Contact Me
      </Heading>

      <div className="prose mb-4">
        <p>
          If you want to discuss a project or just say hi, my inbox is always open.
          Whether you have a question or just want to chat, I&apos;ll try my best to get back to you!
        </p>
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-center gap-4 sm:-ml-3 sm:justify-start">
        {contactMethods.map(({ label, url }, index) => (
          <>
            <Button
              plain
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </Button>
            {index < contactMethods.length - 1 && <NavbarDivider />}
          </>
        ))}
      </div>
    </>
  )
}
