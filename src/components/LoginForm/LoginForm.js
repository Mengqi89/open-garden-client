import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'
import './LoginForm.css'

class LoginForm extends Component {

    state = { error: null }

    handleSubmitJwtAuth = (event) => {
        event.preventDefault()
        this.setState({ error: null })
        const { username, password } = event.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess(username.value)
                username.value = ''
                password.value = ''
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    render() {
        const { error } = this.state
        return (
            <form className='LoginForm' onSubmit={(event) => this.handleSubmitJwtAuth(event)}>
                <div role='alert'>{error && <p className='red'>{error}</p>}</div>
                <div className='username'>
                    <label htmlFor='Login__username'>
                        Username
                    </label>
                    <input
                        name='username'
                        type='text'
                        required
                        id='Login__username'
                        placeholder='demo: dunder10' />
                </div>
                <div className='password'>
                    <label htmlFor='Login__password'>
                        Password
                    </label>
                    <input
                        name='password'
                        type='password'
                        required
                        id='Login__password'
                        placeholder='demo: !Ww898989' />
                </div>
                <button type='submit'>Login</button>
            </form>
        )
    }

}

export default LoginForm;