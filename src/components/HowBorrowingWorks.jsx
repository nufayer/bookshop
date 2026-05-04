const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Register with email and password or sign in with Google to unlock the private parts of the library.",
  },
  {
    number: "02",
    title: "Open Book Details",
    description:
      "Browse the catalog, search by title, and visit any book page to see author, description, and availability.",
  },
  {
    number: "03",
    title: "Borrow Your Next Read",
    description:
      "Use the borrowing action from the details page and keep your reading experience connected to your profile.",
  },
];

export default function HowBorrowingWorks() {
  return (
    <section className="page-shell py-16">
      <div className="glass-panel rounded-[2rem] p-6 md:p-8">
        <div className="mb-8 space-y-3">
          <span className="badge badge-outline badge-lg border-primary/30 px-4 py-4 text-primary">
            How Borrowing Works
          </span>
          <h2 className="text-3xl font-black md:text-4xl">A simple path from sign in to reading</h2>
          <p className="max-w-2xl text-base-content/70">
            The experience is designed to stay lightweight: discover a book, open the details, and borrow without friction.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.75rem] border border-primary/10 bg-base-100/80 p-5"
            >
              <div className="mb-5 text-4xl font-black text-primary/75">{step.number}</div>
              <h3 className="text-2xl font-black">{step.title}</h3>
              <p className="mt-3 leading-7 text-base-content/70">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
