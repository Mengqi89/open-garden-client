import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

function LoginForm(props) {

    // function handleSubmitBasicAuth(event) {
    //     event.preventDefault()
    //     const { username, password } = event.target

    //     TokenService.saveAuthToken(
    //         TokenService.makeBasicAuthToken(username.value, password.value)
    //     )

    //     username.value = ''
    //     password.value = ''
    //     props.onLoginSuccess()
    // }

    function handleSubmitJwtAuth(event) {
        event.preventDefault()
        const { username, password } = event.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                props.onLoginSuccess(username.value)
                username.value = ''
                password.value = ''
            })
    }

    return (
        <div>
            <form className='LoginForm' onSubmit={handleSubmitJwtAuth}>
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