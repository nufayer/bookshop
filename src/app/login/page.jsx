'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from '@/lib/auth-client';

const LoginPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/';
    const isGoogleAuthEnabled = process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED === 'true';
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData(event.currentTarget);

        const { error: signInError } = await signIn.email({
            email: formData.get('email'),
            password: formData.get('password'),
            callbackURL: redirectTo,
        });

        setIsLoading(false);

        if (signInError) {
            setError(signInError.message || 'Unable to log in with those credentials.');
            return;
        }

        router.push(redirectTo);
        router.refresh();
    };

    const handleGoogleLogin = async () => {
        if (!isGoogleAuthEnabled) {
            setError('Google login is not configured yet. Add Google OAuth credentials to enable it.');
            return;
        }

        setError('');
        const result = await signIn.social({
            provider: 'google',
            callbackURL: redirectTo,
        });

        if (result?.error) {
            setError(result.error.message || 'Google login is not available right now.');
        }
    };

    return (
        <section className='grid min-h-screen bg-base-200/60 px-4 py-10'>
            <div className='page-shell grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
                <div className='hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary/90 to-secondary p-10 text-primary-content lg:block'>
                    <span className='badge border-white/20 bg-white/10 px-4 py-4 text-primary-content'>Welcome Back</span>
                    <h1 className='mt-6 text-5xl font-black leading-tight'>Log in and continue your reading journey.</h1>
                    <p className='mt-4 max-w-lg text-primary-content/80'>
                        Access private book details, open your profile, and keep browsing the collection
                        without losing your place.
                    </p>
                </div>

                <div className='glass-panel mx-auto w-full max-w-xl rounded-[2rem] p-6 md:p-8'>
                    <div className='mb-8 space-y-3 text-center'>
                        <h2 className='text-4xl font-black'>Login</h2>
                        <p className='text-base-content/70'>Use your account to enter the library.</p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-5'>
                        {error ? (
                            <div className='alert alert-error rounded-2xl'>
                                <span>{error}</span>
                            </div>
                        ) : null}

                        <fieldset className='space-y-2'>
                            <label className='text-sm font-semibold'>Email</label>
                            <input type='email' name='email' required className='input input-bordered w-full rounded-2xl' placeholder='Enter your email' />
                        </fieldset>

                        <fieldset className='space-y-2'>
                            <label className='text-sm font-semibold'>Password</label>
                            <input type='password' name='password' required className='input input-bordered w-full rounded-2xl' placeholder='Enter your password' />
                        </fieldset>

                        <button type='submit' disabled={isLoading} className='btn btn-primary btn-lg w-full rounded-full'>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className='divider my-7'>or</div>

                    <button
                        onClick={handleGoogleLogin}
                        type='button'
                        disabled={!isGoogleAuthEnabled}
                        className='btn btn-outline btn-lg w-full rounded-full'
                    >
                        Continue with Google
                    </button>

                    {!isGoogleAuthEnabled ? (
                        <p className='mt-3 text-center text-sm text-base-content/60'>
                            Google OAuth is currently disabled for this app.
                        </p>
                    ) : null}

                    <p className='mt-6 text-center text-sm text-base-content/70'>
                        New here?{' '}
                        <Link href='/register' className='font-bold text-primary'>
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
