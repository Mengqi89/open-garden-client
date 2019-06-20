import React from 'react'
import TokenService from '../../services/token-service'

function LoginForm(props) {

    function handleSubmitBasicAuth(event) {
        event.preventDefault()
        const { username, password } = event.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )

        username.value = ''
        password.value = ''
        props.onLoginSuccess()
    }

    return (
        <div>
            <form className='LoginForm' onSubmit={handleSubmitBasicAuth}>
                <div className='username'>
                    <label htmlFor='Login__username'>
                        Username
                    </label>
                    <input
                        name='username'
                        type='text'
                        required
                        id='Login__username' />
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