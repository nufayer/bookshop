import AllBooks from "@/components/AllBooks";
import { getBooks } from "@/lib/books";

export default async function AllBooksPage() {
  const books = await getBooks();

  return <AllBooks books={books} />;
}
