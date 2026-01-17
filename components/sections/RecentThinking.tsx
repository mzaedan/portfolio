import { Container } from "@/components/ui/Container";
import { articles } from "@/data/articles";
import Link from "next/link";

export function RecentThinking() {
  return (
    <section id="writing" className="py-24">
      <Container>
        <h2 className="text-4xl font-serif mb-16">Pengalaman</h2>

        <div className="space-y-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline border-b border-black/5 pb-10 last:border-0 last:pb-0"
            >
              <div className="md:col-span-3">
                <Link href={`/blog/${article.slug}`} className="block">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                    {article.position}
                  </h3>
                  <h4 className="text-muted mt-2">{article.company}</h4>
                  <p className="text-normal mt-2 leading-relaxed max-w-2xl">
                    {article.summary}
                  </p>
                </Link>
              </div>
              <div className="md:col-span-1 text-right md:text-right text-sm text-muted">
                {article.date}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
