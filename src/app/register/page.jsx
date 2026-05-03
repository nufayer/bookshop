import React from 'react';

const RegisterPage = () => {
    return (
        <div>
            <section
            className='bg-base-200 px-4 py-10'
            style={{
                minHeight: 'calc(100vh - 220px)',
                display: 'grid',
                placeItems: 'center',
                width: '100%',
            }}
        >
            <div
                className='bg-base-100 shadow-xl'
                style={{
                    width: '100%',
                    maxWidth: '28rem',
                    borderRadius: '1rem',
                    padding: '2rem',
                }}
            >
                <h2 className='mb-6 text-center text-2xl font-bold'>Login To Your Account</h2>

                <form className='space-y-4'>
                    <fieldset className='fieldset w-full'>
                        <legend className='fieldset-legend'>First Name</legend>
                        <input
                            type="text"
                            className='input w-full'
                            placeholder='Enter Your First Name'
                        />
                    </fieldset>

                    <fieldset className='fieldset w-full'>
                        <legend className='fieldset-legend'>Last Name</legend>
                        <input
                            type="text"
                            className='input w-full'
                            placeholder='Enter Your Last Name'
                        />
                    </fieldset>

                    <fieldset className='fieldset w-full'>
                        <legend className='fieldset-legend'>Email</legend>
                        <input
                            type="email"
                            className='input w-full'
                            placeholder='Enter Your Email'
                        />
                    </fieldset>

                    <fieldset className='fieldset w-full'>
                        <legend className='fieldset-legend'>Password</legend>
                        <input
                            type="password"
                            className='input w-full'
                            placeholder='Enter Your Password'
                        />
                    </fieldset>
                </form>
            </div>
        </section>
        </div>
    );
};

export default RegisterPage;