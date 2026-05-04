import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-primary/10 bg-neutral text-neutral-content">
      <div className="page-shell grid gap-10 px-0 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-2xl font-black tracking-tight">SAKURA BOOKHUB</p>
          <p className="max-w-md text-neutral-content/75">
            A warm reading space for browsing featured titles, opening private details pages, and
            keeping your library profile close at hand.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-content/65">Browse</h3>
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/books">All Books</Link>
            <Link href="/profile">My Profile</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-content/65">Access</h3>
          <div className="flex flex-col gap-2">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
