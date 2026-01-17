import { Container } from "@/components/ui/Container";
import { skillCategories } from "@/data/skills";

export function TechnicalPalette() {
  return (
    <section id="about" className="py-24 bg-[var(--background-alt)]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-4">Technical Palette</h2>
          <p className="text-muted italic">
            I believe in using the right tool for the job. My current preferred
            stack prioritizes type safety, performance, and developer
            experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-xs font-bold tracking-widest text-muted uppercase mb-6 px-3 py-1 border-b border-black/10">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-medium text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
