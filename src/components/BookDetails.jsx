import BookCover from "@/components/BookCover";
import BorrowButton from "@/components/BorrowButton";

const BookDetails = ({ book, isAuthenticated }) => {
  return (
    <section className="page-shell py-10 md:py-14">
      <div className="glass-panel rounded-[2rem] p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <BookCover
            title={book.title}
            author={book.author}
            category={book.category}
            className="h-[430px] md:h-[520px]"
          />

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge badge-secondary badge-lg badge-outline">{book.category}</span>
                <span className="badge badge-accent badge-lg badge-outline">
                  {book.available_quantity} copies left
                </span>
              </div>
              <h1 className="text-4xl font-black md:text-5xl">{book.title}</h1>
              <p className="text-lg text-base-content/70">by {book.author}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-primary/10 bg-base-100/80 p-4">
                <p className="text-sm text-base-content/60">Collection ID</p>
                <p className="mt-2 text-xl font-bold">#{book.id}</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-base-100/80 p-4">
                <p className="text-sm text-base-content/60">Category</p>
                <p className="mt-2 text-xl font-bold">{book.category}</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-base-100/80 p-4">
                <p className="text-sm text-base-content/60">Availability</p>
                <p className="mt-2 text-xl font-bold">{book.available_quantity} ready now</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-primary/10 bg-base-100/70 p-5">
              <h2 className="mb-3 text-xl font-bold">Description</h2>
              <p className="leading-8 text-base-content/75">{book.description}</p>
            </div>

            <div className="rounded-[1.5rem] border border-primary/10 bg-gradient-to-r from-primary/8 to-secondary/8 p-5">
              <h2 className="mb-2 text-xl font-bold">Borrowing note</h2>
              <p className="mb-4 text-base-content/70">
                Borrowing is currently a confirmation flow. We’ll keep the UI lightweight and confirm
                the action instantly on the page.
              </p>
              <BorrowButton
                bookId={book.id}
                bookTitle={book.title}
                isAuthenticated={isAuthenticated}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
