import React from 'react'

function RegistrationForm(props) {
    function handleSubmitRegistration(event) {
        event.preventDefault()
        const { full_name, user_name, email, password } = event.target
        window.localStorage.setItem('full_name', full_name.value)
        window.localStorage.setItem('user_name', user_name.value)
        window.localStorage.setItem('email', email.value)
        window.localStorage.setItem('password', password.value)

        full_name.value = ''
        user_name.value = ''
        email.value = ''
        password.value = ''
        props.onRegistrationSuccess()

    }

    return (
        <div>
            <form className='RegistrationForm' onSubmit={handleSubmitRegistration}>
                <div className='full_name'>
                    <label htmlFor='Registration__full_name'>
                        Full Name
                    </label>
                    <input
                        name='full_name'
                        type='text'
                        required
                        id='Registration__full_name' />
                </div>
                <div className='user_name'>
                    <label htmlFor='Registration__user_name'>
                        Username
                    </label>
                    <input
                        name='user_name'
                        type='text'
                        required
                        id='Registration__user_name' />
                </div>
                <div className='email'>
                    <label htmlFor='Registration__email'>
                        Email
                    </label>
                    <input
                        name='email'
                        type='email'
                        required
                        id='Registration__email' />
                </div>
                <div className='password'>
                    <label htmlFor='Registration__password'>
                        Password
                    </label>
                    <input
                        name='password'
                        type='password'
                        required
                        id='Registration__password' />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm