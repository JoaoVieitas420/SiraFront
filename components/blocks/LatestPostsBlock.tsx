import Link from "next/link";
import { getPosts, LatestPostsBlockData } from "@/lib/api";

function formatDate(dateStr: string) {
  const data = new Date(dateStr);
  return data.toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function LatestPostsBlock({ data }: { data: LatestPostsBlockData }) {
  const allPosts = await getPosts();
  const posts = allPosts.slice(0, data.count ?? 5);

  return (
    <section className="bg-sir-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl text-sir-black mb-10 text-center">
          {data.heading}
        </h2>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-sir-white border border-sir-light rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                <h3 className="font-display font-bold text-2xl text-sir-black">
                  <Link
                    href={`/noticias/${post.slug}`}
                    className="hover:text-sir-medium transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <span className="text-sir-medium text-sm font-medium whitespace-nowrap">
                  {formatDate(post.published_at)}
                </span>
              </div>
              <div className="text-sir-dark leading-relaxed">
                <p>
                  {post.summary || post.content.substring(0, 150) + "..."}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-sir-light">
                <Link
                  href={`/noticias/${post.slug}`}
                  className="inline-flex items-center px-6 py-2 bg-sir-black text-sir-white font-semibold rounded-md hover:bg-sir-dark transition-colors uppercase tracking-wider text-xs"
                >
                  Ler artigo completo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
