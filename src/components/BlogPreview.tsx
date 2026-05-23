import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const catColors: Record<string, string> = {
  "Ensayo": "bg-electric-500/15 text-electric-300 border-electric-500/30",
  "Análisis Jurídico": "bg-purple-500/15 text-purple-300 border-purple-500/30",
  "Tecnología y Derecho": "bg-signal-500/15 text-signal-300 border-signal-500/30",
  "Derecho Comparado": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Observatorio": "bg-green-500/15 text-green-300 border-green-500/30",
};

export default function BlogPreview() {
  const featured = posts[0];
  const rest = posts.slice(1, 4);

  return (
    <section id="blog" className="section-padding section-light">
      <div className="container-max">
        <AnimateOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="tag-pill bg-ink-800 text-ink-100 border border-ink-700 mb-4">
              Blog y Ensayos
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-ink-900 mt-3">
              Ideas para{" "}
              <span className="text-electric-600">una conversación mejor</span>
            </h2>
          </div>
          <Link href="/blog" className="flex-shrink-0 inline-flex items-center gap-2 text-electric-600 font-bold hover:text-electric-500 transition-colors">
            Ver todos los ensayos <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured */}
          <AnimateOnScroll className="lg:col-span-2" direction="right">
            <Link href={`/blog/${featured.slug}`} className="group block h-full">
              <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                <span className={`absolute top-3 left-3 tag-pill border ${catColors[featured.category] || "bg-ink-700 text-ink-200 border-ink-600"}`}>
                  {featured.category}
                </span>
              </div>
              <h3 className="font-heading font-bold text-ink-900 text-xl mb-3 group-hover:text-electric-600 transition-colors leading-snug">
                {featured.title}
              </h3>
              <p className="text-ink-600 text-sm leading-relaxed mb-4 line-clamp-2">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-ink-400">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
              </div>
            </Link>
          </AnimateOnScroll>

          {/* Side list */}
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="flex flex-col gap-5">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-4 items-start">
                  <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`tag-pill border text-xs mb-1 ${catColors[post.category] || "bg-ink-100 text-ink-600 border-ink-200"}`}>
                      {post.category}
                    </span>
                    <h4 className="font-heading font-bold text-ink-900 text-sm leading-snug group-hover:text-electric-600 transition-colors line-clamp-2 mt-1">
                      {post.title}
                    </h4>
                    <p className="text-ink-400 text-xs mt-1">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
