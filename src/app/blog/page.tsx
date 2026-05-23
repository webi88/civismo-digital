import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export const metadata = { title: "Blog — Civismo Digital" };

const catColors: Record<string, string> = {
  "Ensayo": "bg-electric-500/15 text-electric-300 border-electric-500/30",
  "Análisis Jurídico": "bg-purple-500/15 text-purple-300 border-purple-500/30",
  "Tecnología y Derecho": "bg-signal-500/15 text-signal-300 border-signal-500/30",
  "Derecho Comparado": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Observatorio": "bg-green-500/15 text-green-300 border-green-500/30",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-50">
        <div className="bg-ink-950 pt-32 pb-16">
          <div className="container-max">
            <span className="tag-pill bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">Blog y Ensayos</span>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Ideas para una <span className="text-electric-400">conversación mejor</span>
            </h1>
            <p className="text-ink-400 text-lg max-w-2xl">
              Análisis, ensayos y perspectivas sobre libertad de expresión, responsabilidad digital y el futuro de la conversación pública.
            </p>
          </div>
        </div>
        <div className="container-max py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-ink-200 hover:shadow-lg hover:border-electric-300 transition-all flex flex-col">
                <div className="relative h-48 overflow-hidden bg-ink-100">
                  {post.image && (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
                  <span className={`absolute top-3 left-3 tag-pill border text-xs ${catColors[post.category] || "bg-ink-700 text-ink-200 border-ink-600"}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-ink-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h2 className="font-heading font-bold text-ink-900 text-base leading-snug mb-2 group-hover:text-electric-600 transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-ink-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-electric-600 text-xs font-bold mt-4 group-hover:gap-2 transition-all">
                    Leer ensayo →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
