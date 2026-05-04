import Link from "next/link";
import BookCover from "@/components/BookCover";

export default function FeaturedBooks({ books }) {
  return (
    <section className="page-shell py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="badge badge-outline badge-lg border-primary/30 px-4 py-4 text-primary">
            Featured Books
          </span>
          <h2 className="text-3xl font-black md:text-4xl">Curated picks from our front shelf</h2>
          <p className="max-w-2xl text-base-content/70">
            These are the first four books from our collection, highlighted for quick discovery.
          </p>
        </div>
        <Link href="/books" className="btn btn-outline btn-primary rounded-full px-6">
          Explore All Books
        </Link>
      </div>

      <div className="book-grid">
        {books.map((book) => (
          <article key={book.id} className="glass-panel rounded-[1.75rem] p-4">
            <BookCover
              title={book.title}
              author={book.author}
              category={book.category}
              className="mb-4 h-[320px]"
            />
            <div className="space-y-3 px-1 pb-1">
              <div className="flex items-center justify-between gap-3">
                <span className="badge badge-secondary badge-outline">{book.category}</span>
                <span className="text-sm text-base-content/60">{book.available_quantity} copies left</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p className="text-sm text-base-content/70">{book.author}</p>
              </div>
              <p className="line-clamp-3 text-sm text-base-content/75">{book.description}</p>
              <Link href={`/books/${book.id}`} className="btn btn-primary w-full rounded-full">
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
