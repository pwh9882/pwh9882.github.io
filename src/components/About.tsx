import { CONTACTS } from "@/data/site"

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

const contactLinkClass =
  "flex items-center gap-2 text-sm font-semibold text-body transition-colors hover:text-primary"

export function About() {
  return (
    <section id="about" className="scroll-mt-[84px] border-b border-border pt-[72px] pb-16">
      <h1 className="mb-3 text-[36px] leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-[52px]">
        Woohyeok Park{" "}
        <span className="text-[21px] font-semibold tracking-normal text-muted-foreground">
          박우혁
        </span>
      </h1>
      <div className="mb-[30px] text-sm font-semibold text-primary">
        Ph.D. Student · Cloud Computing · Hanyang University
      </div>
      <div className="text-body [text-wrap:pretty]">
        <p className="mb-4">
          I am a Ph.D. student in the Department of Data Science at Hanyang University,
          working with Prof. Kyungyong Lee in the{" "}
          <a
            href="https://ddps.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Distributed Data Processing Systems Lab
          </a>
          . Before that, I completed my B.S. in Software Engineering at Kookmin
          University, graduating first in my department.
        </p>
        <p className="mb-4">
          My work spans cloud systems and AI systems: exact temporal analytics on
          serverless infrastructure, reliable agents for cloud root cause analysis, and
          efficient learning methods for resource-constrained edge devices.
        </p>
        <p>
          I am especially interested in systems that remain correct under distributed
          execution and AI agents whose failures can be measured, explained, and improved.
        </p>
      </div>
      <div className="mt-9 flex flex-wrap gap-[22px]">
        <a href={`mailto:${CONTACTS.email}`} className={contactLinkClass}>
          <MailIcon />
          {CONTACTS.email}
        </a>
        <a
          href={CONTACTS.github}
          target="_blank"
          rel="noopener noreferrer"
          className={contactLinkClass}
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </section>
  )
}
