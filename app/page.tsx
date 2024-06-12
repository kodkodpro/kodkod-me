import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import ContactMe from "@/components/blocks/ContactMe"
import { Button } from "@/components/catalyst/button"
import { NavbarDivider } from "@/components/catalyst/navbar"
import Heading from "@/components/typo/Heading"

const highlights = [
  <>Nearly <strong>20 years of experience</strong> building web, mobile, and desktop apps</>,
  <>Architected and developed projects with budgets of <strong>a few million dollars</strong></>,
  <>Built and led teams of up to <strong>10 people</strong></>,
  <>Developed more than <strong>50 projects</strong></>,
  <>As a former online and offline <strong>business owner</strong>, I understand the challenges and needs of running a business</>,
  <>Plus, I&apos;m proud to be in the <strong>top 1% on Upwork</strong>, with over 6,000 hours worked</>,
]

const links = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/akodkod/" },
  { label: "Upwork", url: "https://www.upwork.com/freelancers/aemelianenko" },
  { label: "GitHub", url: "https://github.com/akodkod" },
  { label: "Instagram", url: "https://www.instagram.com/truemelianenko/" },
]

const projects = [
  {
    image: "/images/portfolio/811spotter/preview.png",
    title: "811spotter Web & Mobile App",
    tagline: "SaaS automated 811 ticket management for contractors",
    description: "I was responsible for the development of the entire platform, from the initial concept to the final product. My role encompassed architecture, design, development, testing, deployment, and maintenance.\n" +
                 "Everything shown in the screenshots and videos below was both developed and designed by me.",
    url: "/811spotter",
    role: "Tech Lead",
    duration: "2 years",
  },
  {
    image: "/images/portfolio/dinghy/preview.png",
    title: "Dinghy Web & Mobile App",
    tagline: "Online Insurance Platform for Mobile and Web",
    description: "In my role, I played a pivotal part in developing a cutting-edge online insurance platform tailored for both mobile and web users. This platform caters to multiple insurers and operates seamlessly across the UK and USA.",
    url: "/dinghy",
    role: "Tech Lead",
    duration: "5 years",
  },
  {
    image: "/images/portfolio/schoolcnxt/preview.png",
    title: "SchoolCNXT Web & Mobile App",
    tagline: "School Social Network for Parents, Teachers, and Students",
    description: "I was instrumental in developing a comprehensive school social network designed to foster better communication and collaboration among students, parents, and teachers in the USA.",
    url: "/schoolcnxt",
    role: "Lead Ruby Developer",
    duration: "1 year",
  },
]

const skills = [
  {
    section: "Soft Skills",
    items: [
      { name: "Leadership", note: "8 years" },
      { name: "Agile (Scrum/Kanban)", note: "8 years" },
      { name: "Mentoring", note: "5 years" },
      { name: "Interviewing", note: "8 years" },
      { name: "Performance Reviews", note: "8 years" },
    ],
  },
  {
    section: "Frontend",
    items: [
      { name: "JavaScript", note: "15 years" },
      { name: "TypeScript", note: "4 years" },
      { name: "React", note: "7 years" },
      { name: "Next.js", note: "2 years" },
      { name: "Vue", note: "2 years" },
      { name: "Tailwind", note: "3 years" },
      { name: "Astro", note: "1 year" },
    ],
  },
  {
    section: "Backend",
    items: [
      { name: "Ruby/Rails", note: "11 years" },
      { name: "Node.js", note: "5 years" },
      { name: "PHP", note: "5 years" },
      { name: "SQL", note: "16 years" },
      { name: "NoSQL", note: "5 years" },
    ],
  },
  {
    section: "Mobile",
    items: [
      { name: "ReactNative", note: "2 years" },
      { name: "Capacitor/Cordova", note: "3 years" },
      { name: "Flutter", note: "1 year" },
      { name: "Swift", note: "1 year" },
    ],
  },
  {
    section: "DevOps",
    items: [
      { name: "Docker", note: "8 years" },
      { name: "AWS", note: "5 years" },
      { name: "GCP", note: "1 year" },
      { name: "CI/CD", note: "8 years" },
      { name: "Heroku", note: "10 years" },
      { name: "Vercel", note: "2 years" },
    ],
  },
  {
    section: "Hobbies",
    items: [
      { name: "Game Dev", note: "2 years" },
      { name: "UI/UX Design", note: "5 years" },
      { name: "Photography", note: "2 years" },
    ],
  },
]

const testimonials = [
  {
    text: "If you want to guarantee that development of your project will be successful - then hire Andrew. Andrew has been pinnacle to us right from our first line of code - all the way through to what is now a highly successful online insurance business in the UK, which has received continued industry praise for the technology we've built. He's been a key architect in what has become a highly sophisticated online insurance platform that competitors are struggling to replicate.",
    name: "Edward Woodcock",
    title: "CTO at Dinghy",
    image: "/images/people/edward.jpeg",
  },
  {
    text: "He's highly proactive, and takes pride and ownership in his role. He regularly contributed great ideas, or more often, pragmatically went ahead and implemented what he knew would be good for the company. I don't think we would have achieved half as much as we did without Andrew, and we have much to thank him for making our jobs as company leaders so much easier.",
    name: "Rob Hartley",
    title: "CEO of Dinghy",
    image: "/images/people/rob.jpeg",
  },
]

export default function Home() {
  return (
    <main className="pb-24">
      <div className="mb-16 min-h-[calc(100vh-12rem)]">
        <div className="mb-8 flex flex-1 flex-col gap-4 pt-8 lg:flex-row lg:items-end lg:gap-8">
          <div className="flex-1">
            <div className="relative mx-auto mb-8 aspect-square max-w-64 sm:mx-0 sm:max-w-96 lg:mb-14">
              <Image
                src="/images/avatar.jpg"
                alt="Andrew Kodkod's photo"
                width={2708}
                height={2708}
                className="size-full rounded-full object-contain"
              />
            </div>

            <div className="mb-2 text-balance uppercase text-gray-700">
              Engineering Manager / Tech Lead
            </div>
            <h1 className="text-7xl font-medium uppercase">
              Andrew<br />
              Kodkod
            </h1>
          </div>

          <div className="flex-1">
            <div className="prose lg:text-lg">
              <ul className="-ml-2 lg:-ml-9 lg:space-y-3.5">
                {highlights.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="hidden flex-1 lg:block" />
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <Button href="/#contact-me" className="basis-full sm:mr-4 sm:basis-auto">
                Get in touch
              </Button>

              {links.map(({ label, url }, index) => (
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
                  {index < links.length - 1 && <NavbarDivider />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Heading
          id="portfolio"
          className="mb-16"
        >
          Portfolio
        </Heading>

        <div className="-mt-12 space-y-12 divide-y divide-gray-200">
          {projects.map(({ title, tagline, url, role, duration }, index) => (
            <div
              key={index}
              className="pt-12"
            >
              <Link
                href={url}
                target="_blank"
                className="text-balance text-4xl font-semibold tracking-tight text-gray-900 hover:underline"
              >
                <h3>
                  {title}
                  <ArrowUpRightIcon className="ml-2 inline-block size-6" />
                </h3>
              </Link>

              <div className="mt-8 flex flex-col items-start gap-4 text-base md:flex-row md:items-center md:justify-between">
                <Link href={url}>
                  <p className="text-gray-600">{tagline}</p>
                  <p className="mt-1.5 font-medium text-gray-900">
                    {role}
                    <span className="text-gray-300"> &#x2022; </span>
                    {duration}
                  </p>
                </Link>

                <Button
                  outline
                  href={url}
                  className="hidden lg:flex"
                >
                  Learn more
                  <ArrowRightIcon />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 sm:mt-36">
        <Heading
          id="skills"
          className="mb-16"
        >
          Skills
        </Heading>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-20 md:grid-cols-3">
          {skills.map(({ section, items }, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold uppercase sm:text-4xl">{section}</h3>
              <ul className="mt-2 space-y-3 sm:mt-6 sm:space-y-4">
                {items.map(({ name, note }, index) => (
                  <li key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-base font-medium text-gray-900">{name}</p>
                      <span className="mx-2 mt-px hidden h-px flex-1 bg-gray-200 sm:block" />
                      <p className="text-sm text-gray-600">{note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 sm:mt-36">
        <Heading
          id="feedback"
          className="mb-20"
        >
          Feedback
        </Heading>

        <div className="grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map(({ text, name, title, image }, index) => (
            <div
              key={index}
              className={clsx(
                index === 0
                  ? "flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20"
                  : "flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20",
              )}
            >
              {/*<img className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="" />*/}
              <figure className="flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>
                    “{text}”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    className="size-14 rounded-full bg-gray-50"
                    src={image}
                    alt={`${name}'s photo`}
                    width={400}
                    height={400}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">{name}</div>
                    <div className="mt-0.5 text-gray-500">{title}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 sm:mt-36">
        <ContactMe />
      </div>
    </main>
  )
}
