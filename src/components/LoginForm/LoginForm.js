import React from 'react';

function LoginForm(props) {
    return (
        <div>
            <form className='LoginForm'>
                <div className='user_name'>
                    <label htmlFor='Login__user_name'>
                        Username
                    </label>
                    <input
                        name='user_name'
                        type='text'
                        required
                        id='Login__user_name' />
                </div>
                <div className='password'>
                    <label htmlFor='Login__password'>
                        Password
                    </label>
                    <input
                        name='password'
                        type='text'
                        required
                        id='Login__password' />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;