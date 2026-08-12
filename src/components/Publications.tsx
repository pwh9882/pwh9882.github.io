import { Badge } from "@/components/ui/badge"
import { groupPublicationsByYear, ME, PUBLICATIONS, type Publication } from "@/data/site"

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <div className="text-[13.5px] text-subtle">
      {authors.map((name, i) => {
        const isMe = name.replace("*", "") === ME
        return (
          <span key={name} className={isMe ? "font-bold text-foreground" : undefined}>
            {name}
            {i < authors.length - 1 ? ", " : ""}
          </span>
        )
      })}
    </div>
  )
}

function PublicationItem({ pub }: { pub: Publication }) {
  return (
    <div className="flex flex-col gap-[5px] py-4">
      <div className="text-[16.5px] leading-[1.4] font-bold [text-wrap:pretty]">
        {pub.title}
      </div>
      <AuthorList authors={pub.authors} />
      <div className="flex flex-wrap items-baseline gap-3.5">
        <span className="text-[13.5px] font-semibold text-primary">{pub.venue}</span>
        {pub.award && (
          <Badge className="rounded bg-award-bg px-2 py-0.5 text-[11px] font-medium text-award">
            ★ {pub.award}
          </Badge>
        )}
        <a
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11.5px] font-medium tracking-[0.04em] text-muted-foreground transition-colors hover:text-primary"
        >
          PAPER ↗
        </a>
      </div>
    </div>
  )
}

export function Publications() {
  const years = groupPublicationsByYear(PUBLICATIONS)

  return (
    <section id="publications" className="scroll-mt-[84px] border-b border-border py-[72px]">
      <h2 className="mb-2 text-[26px] font-bold tracking-[-0.015em]">Publications</h2>
      <p className="mb-9 text-xs font-medium text-muted-foreground">* equal contribution</p>

      <div className="flex flex-col gap-3">
        {years.map((yg) => (
          <div
            key={yg.year}
            className="grid grid-cols-1 gap-x-6 border-t border-border pt-2.5 pb-1.5 sm:grid-cols-[96px_1fr]"
          >
            <div className="pt-3 text-[22px] font-extrabold tracking-[-0.02em]">
              {yg.year}
            </div>
            <div className="flex flex-col">
              {yg.items.map((pub) => (
                <PublicationItem key={pub.title} pub={pub} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
