import { notFound, redirect } from "next/navigation";
import BookDetails from "@/components/BookDetails";
import { getBookById } from "@/lib/books";
import { getServerSession } from "@/lib/session";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const session = await getServerSession();

  if (!session) {
    redirect(`/login?redirect=/books/${id}`);
  }

  const book = await getBookById(id);

  if (!book) {
    notFound();
  }

  return <BookDetails book={book} isAuthenticated={Boolean(session)} />;
};

export default BookDetailsPage;
