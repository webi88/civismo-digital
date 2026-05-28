import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchPosts, fetchPost } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

interface Props { params: { slug: string } }

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = await fetchPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Civismo Digital`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await fetchPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink-50">
        <div className="relative h-64 sm:h-80 lg:h-96 bg-ink-950">
          {post.image && <img src={post.image} alt={post.title} className="w-full h-full object-cover" />}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/50 to-ink-950/20" />
          <div className="absolute bottom-0 left-0 right-0 container-max pb-8">
            <span className="tag-pill bg-electric-500/15 border border-electric-500/30 text-electric-300 text-xs mb-3">{post.category}</span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-3xl mt-2">{post.title}</h1>
          </div>
        </div>

        <div className="container-max py-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-5 mb-8 text-sm text-ink-500">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} de lectura</span>
            </div>

            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-ink-900 prose-p:text-ink-700 prose-p:leading-relaxed prose-strong:text-ink-900 prose-a:text-electric-600 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-ink-200">
              <Link href="/blog" className="inline-flex items-center gap-2 text-electric-600 font-semibold hover:text-electric-500 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Volver al blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
