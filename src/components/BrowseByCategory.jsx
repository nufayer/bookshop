import Link from "next/link";

const categories = [
  {
    name: "Story",
    description:
      "Wander through emotional fiction, layered family histories, and character-led journeys that stay with you.",
    accent: "from-rose-300 via-orange-200 to-amber-100",
  },
  {
    name: "Tech",
    description:
      "Sharpen your practical skills with modern programming, frameworks, and hands-on development guides.",
    accent: "from-teal-300 via-cyan-200 to-sky-100",
  },
  {
    name: "Science",
    description:
      "Explore the universe, the mind, and the laws behind everyday wonder through accessible science titles.",
    accent: "from-indigo-300 via-sky-200 to-cyan-50",
  },
];

export default function BrowseByCategory() {
  return (
    <section className="page-shell py-16">
      <div className="mb-8 space-y-3">
        <span className="badge badge-outline badge-lg border-primary/30 px-4 py-4 text-primary">
          Browse By Category
        </span>
        <h2 className="text-3xl font-black md:text-4xl">Pick a shelf that matches your mood</h2>
        <p className="max-w-2xl text-base-content/70">
          Start with a category and move naturally into the books that feel most relevant to your next read.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.name}
            className={`rounded-[1.9rem] border border-primary/10 bg-gradient-to-br ${category.accent} p-6 text-neutral shadow-lg`}
          >
            <div className="mb-10 inline-flex rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em]">
              {category.name}
            </div>
            <h3 className="text-2xl font-black">{category.name} Collection</h3>
            <p className="mt-3 min-h-28 leading-7 text-neutral/75">{category.description}</p>
            <Link href="/books" className="btn btn-neutral mt-5 rounded-full border-0">
              Explore Books
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
