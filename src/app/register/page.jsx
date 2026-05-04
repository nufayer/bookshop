'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/auth-client';

const RegisterPage = () => {
    const router = useRouter();
    const isGoogleAuthEnabled = process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED === 'true';
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData(event.currentTarget);

        const { error: signUpError } = await signUp.email({
            name: formData.get('name'),
            email: formData.get('email'),
            image: formData.get('image'),
            password: formData.get('password'),
        });

        setIsLoading(false);

        if (signUpError) {
            setError(signUpError.message || 'Registration failed. Please try again.');
            return;
        }

        router.push('/login');
    };

    const handleGoogleSignup = async () => {
        if (!isGoogleAuthEnabled) {
            setError('Google login is not configured yet. Add Google OAuth credentials to enable it.');
            return;
        }

        setError('');
        const result = await signIn.social({
            provider: 'google',
            callbackURL: '/',
        });

        if (result?.error) {
            setError(result.error.message || 'Google sign-up is not available right now.');
        }
    };

    return (
        <section className='grid min-h-screen bg-base-200/60 px-4 py-10'>
            <div className='page-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
                <div className='glass-panel mx-auto w-full max-w-xl rounded-[2rem] p-6 md:p-8'>
                    <div className='mb-8 space-y-3 text-center'>
                        <h2 className='text-4xl font-black'>Register</h2>
                        <p className='text-base-content/70'>Create your reader account and start exploring.</p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-5'>
                        {error ? (
                            <div className='alert alert-error rounded-2xl'>
                                <span>{error}</span>
                            </div>
                        ) : null}

                        <fieldset className='space-y-2'>
                            <label className='text-sm font-semibold'>Name</label>
                            <input type='text' name='name' required className='input input-bordered w-full rounded-2xl' placeholder='Enter your full name' />
                        </fieldset>

                        <fieldset className='space-y-2'>
                            <label className='text-sm font-semibold'>Email</label>
                            <input type='email' name='email' required className='input input-bordered w-full rounded-2xl' placeholder='Enter your email' />
                        </fieldset>

                        <fieldset className='space-y-2'>
                            <label className='text-sm font-semibold'>Photo URL</label>
                            <input type='url' name='image' className='input input-bordered w-full rounded-2xl' placeholder='Paste a profile photo link' />
                        </fieldset>

                        <fieldset className='space-y-2'>
                            <label className='text-sm font-semibold'>Password</label>
                            <input type='password' name='password' required className='input input-bordered w-full rounded-2xl' placeholder='Create a secure password' />
                        </fieldset>

                        <button type='submit' disabled={isLoading} className='btn btn-primary btn-lg w-full rounded-full'>
                            {isLoading ? 'Creating account...' : 'Register'}
                        </button>
                    </form>

                    <div className='divider my-7'>or</div>

                    <button
                        onClick={handleGoogleSignup}
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
                        Already have an account?{' '}
                        <Link href='/login' className='font-bold text-primary'>
                            Login
                        </Link>
                    </p>
                </div>

                <div className='hidden rounded-[2rem] bg-gradient-to-br from-secondary via-secondary/90 to-primary p-10 text-secondary-content lg:block'>
                    <span className='badge border-white/20 bg-white/10 px-4 py-4 text-secondary-content'>Join The Shelf</span>
                    <h1 className='mt-6 text-5xl font-black leading-tight'>Create an account and make the library yours.</h1>
                    <p className='mt-4 max-w-lg text-secondary-content/80'>
                        Register with email and password or use Google to jump straight into the reading
                        experience and open private routes instantly.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
