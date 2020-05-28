import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = {
        error: null,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
    }
    handleChange = event => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()

        this.setState({ error: null })
        AuthApiService
            .postUser({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                password: this.state.password,
                email: this.state.email,
                username: this.state.username
            })
            .then(user => {
                console.log('successful')
                this.setState({
                    first_name: '',
                    last_name: '',
                    username: '',
                    email: '',
                    password: ''
                })
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                console.log('error caught')
                this.setState({ error: res.error })
            })
    }
    render() {
        const { error } = this.state
        return (
            <form className='RegistrationForm' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <p>All fields required.</p>
                <div className='first_name'>
                    <input
                        name='first_name'
                        type='text'
                        placeholder='First Name'
                        required
                        id='Registration__first_name'
                        onChange={this.handleChange} />
                </div>
                <div className='last_name'>
                    <input
                        name='last_name'
                        type='text'
                        placeholder='Last Name'
                        required
                        id='Registration__last_name'
                        onChange={this.handleChange} />
                </div>
                <div className='username'>
                    <input
                        name='username'
                        type='text'
                        placeholder='Username'
                        required
                        id='Registration__username'
                        onChange={this.handleChange} />
                </div>
                <div className='email'>
                    <input
                        name='email'
                        type='email'
                        placeholder='email'
                        required
                        id='Registration__email'
                        onChange={this.handleChange} />
                </div>
                <div className='password'>
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        required
                        id='Registration__password'
                        onChange={this.handleChange} />
                </div>

                <button type='submit'>Register</button>
            </form>
        )
    }
}

export default RegistrationForm