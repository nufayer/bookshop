import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import { getFeaturedBooks } from "@/lib/books";

export default async function Home() {
  const featuredBooks = await getFeaturedBooks(4);

  return (
    <>
      <Banner />
      <FeaturedBooks books={featuredBooks} />
    </>
  );
}
