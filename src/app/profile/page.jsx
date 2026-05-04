import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/session";

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login?redirect=/profile");
  }

  const user = session.user;

  return (
    <section className="page-shell py-10 md:py-14">
      <div className="glass-panel rounded-[2rem] p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80 p-6 text-primary-content shadow-xl">
            <div className="flex items-center gap-4">
              {user.image ? (
                <div
                  aria-label={user.name || user.email}
                  className="h-20 w-20 rounded-full border-4 border-white/25 bg-cover bg-center"
                  style={{ backgroundImage: `url(${user.image})` }}
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/25 bg-white/15 text-3xl font-black">
                  {(user.name || user.email || "R").slice(0, 1).toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary-content/75">My Profile</p>
                <h1 className="text-3xl font-black">{user.name || "Reader"}</h1>
                <p className="text-primary-content/80">{user.email}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-white/12 p-4">
                <p className="text-sm text-primary-content/70">Profile status</p>
                <p className="mt-1 text-lg font-bold">Authenticated and ready to browse</p>
              </div>
              <div className="rounded-2xl bg-white/12 p-4">
                <p className="text-sm text-primary-content/70">Preferred entry point</p>
                <p className="mt-1 text-lg font-bold">Book details and borrowing flow</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-black">Reader account details</h2>
              <p className="mt-2 text-base-content/70">
                This private page is only available to logged-in users.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-primary/10 bg-base-100/80 p-5">
                <p className="text-sm text-base-content/60">Full name</p>
                <p className="mt-2 text-xl font-bold">{user.name || "Not provided yet"}</p>
              </div>
              <div className="rounded-[1.5rem] border border-primary/10 bg-base-100/80 p-5">
                <p className="text-sm text-base-content/60">Email address</p>
                <p className="mt-2 text-xl font-bold break-all">{user.email}</p>
              </div>
              <div className="rounded-[1.5rem] border border-primary/10 bg-base-100/80 p-5 sm:col-span-2">
                <p className="text-sm text-base-content/60">Photo URL</p>
                <p className="mt-2 break-all text-base font-medium text-base-content/80">
                  {user.image || "No profile photo was supplied during sign-up."}
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-primary/10 bg-base-100/70 p-5">
              <h3 className="text-xl font-bold">What you can do now</h3>
              <p className="mt-2 text-base-content/70">
                Browse the catalog, open private book details pages, and use the borrowing flow from
                any available title.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
