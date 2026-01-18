import { Container } from "@/components/ui/Container";
import { experiences } from "@/data/experience";
import Link from "next/link";

export function Experience() {
  return (
    <section id="writing" className="py-24">
      <Container>
        <h2 className="text-4xl font-serif mb-16">Experience</h2>

        <div className="space-y-12">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline border-b border-black/5 pb-10 last:border-0 last:pb-0"
            >
              <div className="md:col-span-3">
                <Link href={`/blog/${experience.slug}`} className="block">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                    {experience.position}
                  </h3>
                  <h4 className="text-muted mt-2">{experience.company}</h4>
                  <p className="text-normal mt-2 leading-relaxed max-w-2xl whitespace-pre-line text-justify">
                    {experience.summary}
                  </p>
                </Link>
              </div>
              <div className="md:col-span-1 text-right md:text-right text-sm text-muted">
                {experience.date}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
