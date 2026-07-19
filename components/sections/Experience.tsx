import { Container } from "@/components/ui/Container";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl font-serif">Experience</h2>
          <p className="text-muted">
            Engineering, mentoring, and documentation work shaped around clear
            delivery and collaborative growth.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline border-b border-black/5 pb-10 last:border-0 last:pb-0"
            >
              <div className="md:col-span-3">
                <h3 className="mb-2 text-2xl font-medium">{experience.position}</h3>
                <h4 className="text-muted">{experience.company}</h4>
                <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/80">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-left text-sm text-muted md:col-span-1 md:text-right">
                {experience.date}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
