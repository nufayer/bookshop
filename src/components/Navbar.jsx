'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from '@/lib/auth-client';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/books', label: 'All Books' },
    { href: '/profile', label: 'My Profile' },
];

const Navbar = () => {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const user = session?.user;

    const handleLogout = async () => {
        await signOut();
        router.push('/');
        router.refresh();
    };

    return (
        <header className='sticky top-0 z-40 border-b border-primary/10 bg-base-100/85 backdrop-blur-xl'>
            <div className='page-shell navbar px-0 py-3'>
                <div className='navbar-start gap-2'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        </div>
                        <ul tabIndex={0} className='menu dropdown-content z-[1] mt-3 w-56 rounded-box border border-primary/10 bg-base-100 p-2 shadow-xl'>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href='/' className='text-2xl font-black tracking-tight text-primary'>
                        SAKURA BOOKHUB
                    </Link>
                </div>

                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal rounded-full border border-primary/10 bg-base-100/90 px-3'>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='navbar-end gap-2'>
                    {isPending ? (
                        <span className='loading loading-spinner loading-sm text-primary' />
                    ) : user ? (
                        <div className='dropdown dropdown-end'>
                            <div tabIndex={0} role='button' className='btn btn-ghost rounded-full px-3'>
                                <div className='flex items-center gap-3'>
                                    {user.image ? (
                                        <div
                                            aria-label={user.name || user.email}
                                            className='h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary/15'
                                            style={{ backgroundImage: `url(${user.image})` }}
                                        />
                                    ) : (
                                        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-content'>
                                            {(user.name || user.email || 'R').slice(0, 1).toUpperCase()}
                                        </div>
                                    )}
                                    <div className='hidden text-left md:block'>
                                        <p className='text-sm font-bold'>{user.name || 'Reader'}</p>
                                        <p className='text-xs text-base-content/60'>{user.email}</p>
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className='menu dropdown-content z-[1] mt-3 w-64 rounded-box border border-primary/10 bg-base-100 p-2 shadow-xl'>
                                <li>
                                    <Link href='/profile'>Profile</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link href='/login' className='btn btn-ghost rounded-full'>
                                Login
                            </Link>
                            <Link href='/register' className='btn btn-primary rounded-full px-6'>
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
