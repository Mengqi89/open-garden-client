import React from 'react'
import TokenService from '../../services/token-service'

function LoginForm(props) {

    function handleSubmitBasicAuth(event) {
        event.preventDefault()
        const { user_name, password } = event.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )

        user_name.value = ''
        password.value = ''
        props.onLoginSuccess()
    }

    return (
        <div>
            <form className='LoginForm' onSubmit={handleSubmitBasicAuth}>
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
                        type='password'
                        required
                        id='Login__password' />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;