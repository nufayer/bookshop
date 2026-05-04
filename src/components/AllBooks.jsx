'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookCover from '@/components/BookCover';

const AllBooks = ({ books }) => {
    const [query, setQuery] = useState('');

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.trim().toLowerCase())
    );

    return (
        <section className='page-shell py-10 md:py-14'>
            <div className='mb-8 rounded-[2rem] border border-primary/10 bg-base-100/80 p-6 shadow-sm md:p-8'>
                <div className='space-y-3'>
                    <span className='badge badge-outline badge-lg border-primary/30 px-4 py-4 text-primary'>
                        All Books
                    </span>
                    <h1 className='text-4xl font-black md:text-5xl'>Browse the full collection</h1>
                    <p className='max-w-2xl text-base-content/70'>
                        Search by title and move into the details page for a closer look at any book.
                    </p>
                </div>

                <label className='mt-6 block'>
                    <span className='sr-only'>Search books by title</span>
                    <input
                        type='text'
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder='Search for a book by title...'
                        className='input input-bordered input-lg w-full rounded-full border-primary/15 bg-base-100 px-6'
                    />
                </label>
            </div>

            <div className='mb-6 flex items-center justify-between gap-3'>
                <p className='text-sm text-base-content/60'>
                    Showing {filteredBooks.length} of {books.length} books
                </p>
            </div>

            <div className='book-grid'>
                {filteredBooks.map((book) => (
                    <article key={book.id} className='glass-panel rounded-[1.75rem] p-4'>
                        <BookCover
                            title={book.title}
                            author={book.author}
                            category={book.category}
                            className='mb-4 h-[320px]'
                        />
                        <div className='space-y-3 px-1 pb-1'>
                            <div className='flex items-center justify-between gap-3'>
                                <span className='badge badge-secondary badge-outline'>{book.category}</span>
                                <span className='text-sm text-base-content/60'>{book.available_quantity} left</span>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>{book.title}</h2>
                                <p className='text-sm text-base-content/70'>{book.author}</p>
                            </div>
                            <Link href={`/books/${book.id}`} className='btn btn-primary w-full rounded-full'>
                                Details
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {!filteredBooks.length ? (
                <div className='mt-8 rounded-[1.75rem] border border-dashed border-primary/25 bg-base-100/70 p-10 text-center'>
                    <h2 className='text-2xl font-bold'>No books matched your search</h2>
                    <p className='mt-2 text-base-content/65'>Try a different title or clear the search bar.</p>
                </div>
            ) : null}
        </section>
    );
};

export default AllBooks;
