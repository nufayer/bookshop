'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AUTH_ROUTES = new Set(['/login', '/register']);

const AppShell = ({ children }) => {
    const pathname = usePathname();
    const isAuthRoute = AUTH_ROUTES.has(pathname);

    if (isAuthRoute) {
        return <main className='min-h-screen w-full'>{children}</main>;
    }

    return (
        <div className='flex min-h-screen flex-col'>
            <Navbar />
            <main className='flex-1 w-full'>{children}</main>
            <Footer />
        </div>
    );
};

export default AppShell;
