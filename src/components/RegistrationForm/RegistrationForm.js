import React from 'react'

function RegistrationForm() {
    return (
        <div>
            <form className='RegistrationForm'>
                <div className='full_name'>
                    <label htmlFor='Registration__full_name'>
                        Full Name
                    </label>
                    <input
                        name='full_name'
                        type='text'
                        required
                        id='Registration__full_name' />
                </div>
                <div className='user_name'>
                    <label htmlFor='Registration__user_name'>
                        Username
                    </label>
                    <input
                        name='user_name'
                        type='text'
                        required
                        id='Registration__user_name' />
                </div>
                <div className='email'>
                    <label htmlFor='Registration__email'>
                        Email
                    </label>
                    <input
                        name='email'
                        type='text'
                        required
                        id='Registration__email' />
                </div>
                <div className='password'>
                    <label htmlFor='Registration__password'>
                        Password
                    </label>
                    <input
                        name='password'
                        type='text'
                        required
                        id='Registration__password' />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm