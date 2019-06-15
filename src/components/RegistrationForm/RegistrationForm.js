import React, { Component } from 'react'

class RegistrationForm extends Component {
    state = {
        full_name: '',
        user_name: '',
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
        console.log('submit success')
        window.localStorage.setItem('Registration Data', this.state)
        this.props.onRegistrationSuccess()
    }
    render() {
        return (
            <div>
                <form className='RegistrationForm' onSubmit={this.handleSubmit}>
                    <div className='full_name'>
                        <label htmlFor='Registration__full_name'>
                            Full Name
                        </label>
                        <input
                            name='full_name'
                            type='text'
                            required
                            id='Registration__full_name'
                            onChange={this.handleChange} />
                    </div>
                    <div className='user_name'>
                        <label htmlFor='Registration__user_name'>
                            Username
                        </label>
                        <input
                            name='user_name'
                            type='text'
                            required
                            id='Registration__user_name'
                            onChange={this.handleChange} />
                    </div>
                    <div className='email'>
                        <label htmlFor='Registration__email'>
                            Email
                        </label>
                        <input
                            name='email'
                            type='email'
                            required
                            id='Registration__email'
                            onChange={this.handleChange} />
                    </div>
                    <div className='password'>
                        <label htmlFor='Registration__password'>
                            Password
                        </label>
                        <input
                            name='password'
                            type='password'
                            required
                            id='Registration__password'
                            onChange={this.handleChange} />
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}

export default RegistrationForm