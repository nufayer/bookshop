import { promises as fs } from "fs";
import path from "path";

const booksFilePath = path.join(process.cwd(), "public", "booksData.json");

export async function getBooks() {
  const file = await fs.readFile(booksFilePath, "utf8");
  return JSON.parse(file);
}

export async function getFeaturedBooks(limit = 4) {
  const books = await getBooks();
  return books.slice(0, limit);
}

export async function getBookById(id) {
  const books = await getBooks();
  return books.find((book) => String(book.id) === String(id)) ?? null;
}
