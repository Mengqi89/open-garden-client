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
                <h2>Greetings!</h2>
                <div className='login__check'></div>
                <div role='alert'>{error && <p className='red'>{error}</p>}</div>
                <div className='username'>
                    <i className="material-icons">person</i>
                    <input
                        name='username'
                        placeholder='Username'
                        type='text'
                        required
                        id='Login__username' />
                </div>
                <div className='password'>
                    <i className="material-icons">lock</i>
                    <input
                        name='password'
                        placeholder='Password'
                        type='password'
                        required
                        id='Login__password' />
                </div>
                <button type='submit'>Login</button>
            </form>
        )
    }

}

export default LoginForm;