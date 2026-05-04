import Link from "next/link";
import BookCover from "@/components/BookCover";

const previewBooks = [
  {
    title: "The Silent Forest",
    author: "Ava Rahman",
    category: "Story",
  },
  {
    title: "React in Action",
    author: "Sadia Noor",
    category: "Tech",
  },
];

const Banner = () => {
  return (
    <section className="page-shell py-10 md:py-14">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <span className="badge badge-outline badge-lg border-primary/30 px-4 py-4 text-primary">
              Reader&apos;s Corner
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] md:text-7xl">
                Find Your Next Read
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-base-content/70">
                Browse a thoughtfully styled shelf of stories, science picks, and tech titles, then
                dive deeper into the books that match your mood.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/books" className="btn btn-primary btn-lg rounded-full px-8">
                Browse Now
              </Link>
              <Link href="/register" className="btn btn-outline btn-secondary btn-lg rounded-full px-8">
                Join The Library
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-primary/10 bg-base-100/70 p-4">
                <div className="text-3xl font-black text-primary">12+</div>
                <p className="text-sm text-base-content/70">Books already waiting in the catalog</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-base-100/70 p-4">
                <div className="text-3xl font-black text-secondary">3</div>
                <p className="text-sm text-base-content/70">Main genres to explore at a glance</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-base-100/70 p-4">
                <div className="text-3xl font-black text-accent">1</div>
                <p className="text-sm text-base-content/70">Warm, focused place to keep reading</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {previewBooks.map((book, index) => (
              <BookCover
                key={book.title}
                title={book.title}
                author={book.author}
                category={book.category}
                className={index === 0 ? "h-[320px] md:h-[340px]" : "h-[280px] md:h-[300px] lg:ml-12"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
