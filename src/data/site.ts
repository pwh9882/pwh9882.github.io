export const ME = "Woohyeok Park"

export const NAV_ITEMS = [
  { label: "About", target: "about" },
  { label: "Publications", target: "publications" },
  { label: "Projects", target: "projects" },
  { label: "Profile", target: "cv" },
] as const

export const CONTACTS = {
  email: "woohyeok@hanyang.ac.kr",
  github: "https://github.com/pwh9882",
}

export interface Publication {
  year: string
  title: string
  authors: string[]
  venue: string
  award?: string
  link: string
}

export const PUBLICATIONS: Publication[] = [
  {
    year: "2026",
    title: "Vivace: Exact Temporal OLAP over Interval Histories via Independent Serverless Execution",
    authors: ["Woohyeok Park", "Taeyoon Kim", "Hyunjoon Kim", "Kyungyong Lee"],
    venue: "arXiv preprint arXiv:2606.14069",
    link: "https://arxiv.org/abs/2606.14069",
  },
  {
    year: "2026",
    title: "Why Do AI Agents Systematically Fail at Cloud Root Cause Analysis?",
    authors: ["Taeyoon Kim*", "Woohyeok Park*", "Hoyeong Yun", "Kyungyong Lee"],
    venue: "Cloud Intelligence / AIOps Workshop at ASPLOS 2026",
    link: "https://arxiv.org/abs/2602.09937",
  },
  {
    year: "2026",
    title: "HYPERDOA: Robust and Efficient DoA Estimation using Hyperdimensional Computing",
    authors: ["Rajat Bhattacharjya", "Woohyeok Park", "Arnab Sarkar", "Hyunwoo Oh", "Mohsen Imani", "Nikil Dutt"],
    venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2026)",
    link: "https://arxiv.org/abs/2510.10718",
  },
  {
    year: "2025",
    title: "CostNorm: LLM-based Cloud Cost Optimization AI Agent",
    authors: ["Moohyun Song", "Woohyeok Park", "Yongha Bae", "Jongmin Kim", "Donghun Kim", "Jangho Kim"],
    venue: "ASK 2025 (Annual Conference of KIPS)",
    link: "https://doi.org/10.3745/PKIPS.y2025m05a.56",
  },
]

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  title: string
  venue: string
  desc: string
  links: ProjectLink[]
  image?: string
  imageAlt?: string
}

export const PROJECTS: Project[] = [
  {
    title: "Vivace",
    venue: "TEMPORAL OLAP · SERVERLESS COMPUTING",
    desc: "Exact temporal analytics over interval histories using independently executing serverless functions, with boundary-aware layout and operator-specific merge rules.",
    links: [{ label: "PAPER", href: "https://arxiv.org/abs/2606.14069" }],
  },
  {
    title: "Cloud RCA Agent Analysis",
    venue: "AIOPS 2026",
    desc: "A process-level analysis of why LLM agents fail at cloud root cause analysis, based on 1,675 runs and a taxonomy of reasoning, communication, and environment pitfalls.",
    links: [{ label: "PAPER", href: "https://arxiv.org/abs/2602.09937" }],
  },
  {
    title: "HYPERDOA",
    venue: "HYPERDIMENSIONAL COMPUTING · EDGE AI",
    desc: "A robust and energy-efficient direction-of-arrival estimator built with hyperdimensional computing for noisy, resource-constrained environments.",
    links: [{ label: "PAPER", href: "https://arxiv.org/abs/2510.10718" }],
  },
]

export interface CvItem {
  date: string
  title: string
  sub: string
  note?: string
}

export interface CvSection {
  heading: string
  items: CvItem[]
}

export const CV_SECTIONS: CvSection[] = [
  {
    heading: "Affiliation",
    items: [
      {
        date: "Present",
        title: "Distributed Data Processing Systems Lab",
        sub: "Ph.D. Student, Hanyang University",
        note: "Cloud computing, serverless data systems, and reliable AI agents for cloud operations.",
      },
    ],
  },
  {
    heading: "Education",
    items: [
      {
        date: "2025 – Present",
        title: "Hanyang University",
        sub: "Integrated M.S.–Ph.D. Program, Department of Data Science",
        note: "Advisor: Prof. Kyungyong Lee, Distributed Data Processing Systems Lab.",
      },
      {
        date: "2020 – 2025",
        title: "Kookmin University",
        sub: "B.S. in Software Engineering",
        note: "Graduated 1st in the department (GPA 4.43/4.50), six months early.",
      },
    ],
  },
  {
    heading: "Experience",
    items: [
      {
        date: "2025",
        title: "UC Irvine, Dutt Research Group",
        sub: "Undergraduate Research Intern, GREAT Program",
        note: "Nine-week research internship on hyperdimensional computing; co-authored HYPERDOA, accepted at ICASSP 2026.",
      },
      {
        date: "2025",
        title: "Hanyang University, Software Convergence Institute",
        sub: "Teaching Assistant",
        note: "Lab instruction, grading, and Q&A for three introductory programming courses, including two English-medium sections.",
      },
    ],
  },
  {
    heading: "Honors & Awards",
    items: [
      {
        date: "2026",
        title: "AI Seoul Tech Research Scholarship",
        sub: "Seoul Scholarship Foundation, Seoul Metropolitan Government",
      },
      {
        date: "2025 – Present",
        title: "Outstanding Master's Scholarship in Science and Engineering",
        sub: "Korea Student Aid Foundation (KOSAF)",
      },
      {
        date: "2025",
        title: "Grand Prize, KMUCS EXPO Capstone Design",
        sub: "Kookmin University · Alpaco, an LLM-based algorithm problem generation platform (50 teams, 222 participants)",
      },
      {
        date: "2024 – 2025",
        title: "National Science and Engineering Undergraduate Scholarship",
        sub: "Korea Student Aid Foundation (KOSAF)",
      },
    ],
  },
  {
    heading: "Research Interests",
    items: [
      {
        date: "Systems",
        title: "Cloud & Serverless Computing",
        sub: "Temporal analytics, distributed execution, and resource-efficient infrastructure",
      },
      {
        date: "AI Systems",
        title: "Reliable Agents for Cloud Operations",
        sub: "Root cause analysis, agent evaluation, and operational reasoning",
      },
      {
        date: "Edge AI",
        title: "Hyperdimensional Computing",
        sub: "Robust and efficient learning for resource-constrained devices",
      },
    ],
  },
]

export function groupPublicationsByYear(pubs: Publication[]) {
  const years = [...new Set(pubs.map((p) => p.year))]
  return years.map((year) => ({
    year,
    items: pubs.filter((p) => p.year === year),
  }))
}
