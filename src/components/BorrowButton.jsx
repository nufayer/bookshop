'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BorrowButton = ({ bookId, bookTitle, isAuthenticated }) => {
    const router = useRouter();
    const [toastMessage, setToastMessage] = useState('');

    const handleBorrow = () => {
        if (!isAuthenticated) {
            router.push(`/login?redirect=/books/${bookId}`);
            return;
        }

        setToastMessage(`"${bookTitle}" is ready for borrowing.`);
        window.setTimeout(() => {
            setToastMessage('');
        }, 2800);
    };

    return (
        <div className='space-y-3'>
            {toastMessage ? (
                <div className='alert alert-success rounded-2xl'>
                    <span>{toastMessage}</span>
                </div>
            ) : null}
            <button onClick={handleBorrow} className='btn btn-primary btn-lg w-full rounded-full'>
                Borrow This Book
            </button>
        </div>
    );
};

export default BorrowButton;
