'use client';

import { useEffect, useState } from 'react';
import FastMarquee from 'react-fast-marquee';

const Marquee = () => {
    const [message, setMessage] = useState('New Arrivals: Loading books... | Special Discount on Memberships...');

    useEffect(() => {
        let isMounted = true;

        const loadBooks = async () => {
            try {
                const response = await fetch('/booksData.json');
                const books = await response.json();
                const bookNames = books.map((book) => book.title).join(' | ');

                if (isMounted) {
                    setMessage(`New Arrivals: ${bookNames} | Special Discount on Memberships...`);
                }
            } catch {
                if (isMounted) {
                    setMessage('New Arrivals: Explore our latest collection | Special Discount on Memberships...');
                }
            }
        };

        loadBooks();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className='border-b border-primary/10 bg-primary text-primary-content'>
            <div className='page-shell overflow-hidden px-0'>
                <FastMarquee speed={42} pauseOnHover gradient={false} className='py-3 text-sm font-semibold tracking-wide'>
                    <span className='mr-8'>{message}</span>
                </FastMarquee>
            </div>
        </div>
    );
};

export default Marquee;
