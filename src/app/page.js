import Banner from "@/components/Banner";
import BrowseByCategory from "@/components/BrowseByCategory";
import FeaturedBooks from "@/components/FeaturedBooks";
import HowBorrowingWorks from "@/components/HowBorrowingWorks";
import { getFeaturedBooks } from "@/lib/books";

export default async function Home() {
  const featuredBooks = await getFeaturedBooks(4);

  return (
    <>
      <Banner />
      <BrowseByCategory />
      <FeaturedBooks books={featuredBooks} />
      <HowBorrowingWorks />
    </>
  );
}
