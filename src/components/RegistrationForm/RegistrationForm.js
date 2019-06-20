import React, { Component } from 'react'

class RegistrationForm extends Component {
    state = {
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
        console.log('submit success')
        window.localStorage.setItem('Registration Data', this.state)
        this.props.onRegistrationSuccess()
    }
    render() {
        return (
            <div>
                <form className='RegistrationForm' onSubmit={this.handleSubmit}>
                    <p>All fields required</p>
                    <div className='first_name'>
                        <label htmlFor='Registration__first_name'>
                            First Name
                        </label>
                        <input
                            name='first_name'
                            type='text'
                            required
                            id='Registration__first_name'
                            onChange={this.handleChange} />
                    </div>
                    <div className='last_name'>
                        <label htmlFor='Registration__last_name'>
                            Last Name
                        </label>
                        <input
                            name='last_name'
                            type='text'
                            required
                            id='Registration__last_name'
                            onChange={this.handleChange} />
                    </div>
                    <div className='username'>
                        <label htmlFor='Registration__username'>
                            Username
                        </label>
                        <input
                            name='username'
                            type='text'
                            required
                            id='Registration__username'
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