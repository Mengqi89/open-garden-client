import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'
import { Link } from 'react-router-dom'

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
        password: '',
        confirm_password: ''
    }
    handleChange = event => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()

        if (this.state.password !== this.state.confirm_password) {
            this.setState({
                error: 'Passwords do not match.'
            })
        } else {
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
                    this.setState({ error: res.error })
                })
        }
    }
    render() {
        const { error } = this.state
        return (
            <form className='RegistrationForm' onSubmit={this.handleSubmit}>
                <legend>Create an account</legend>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='first_name'>
                    <input
                        name='first_name'
                        type='text'
                        placeholder='First Name *'
                        required
                        id='Registration__first_name'
                        onChange={this.handleChange} />
                </div>
                <div className='last_name'>
                    <input
                        name='last_name'
                        type='text'
                        placeholder='Last Name *'
                        required
                        id='Registration__last_name'
                        onChange={this.handleChange} />
                </div>
                <div className='username'>
                    <input
                        name='username'
                        type='text'
                        placeholder='Username *'
                        required
                        id='Registration__username'
                        onChange={this.handleChange} />
                </div>
                <div className='email'>
                    <input
                        name='email'
                        type='email'
                        placeholder='Email *'
                        required
                        id='Registration__email'
                        onChange={this.handleChange} />
                </div>
                <div className='password'>
                    <input
                        name='password'
                        type='password'
                        placeholder='Password *'
                        required
                        id='Registration__password'
                        onChange={this.handleChange} />
                </div>
                <div className='password'>
                    <input
                        name='confirm_password'
                        type='password'
                        placeholder='Confirm Password *'
                        required
                        id='Confirm__password'
                        onChange={this.handleChange} />
                </div>
                <button type='submit'>Create my account</button>
                <p>Already have an account? <Link to='/login'>Sign in</Link></p>
            </form>
        )
    }
}

export default RegistrationForm