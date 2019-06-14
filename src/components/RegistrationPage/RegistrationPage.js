import React from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

function RegistrationPage(props) {

    function handleRegistrationSuccess() {
        const { history } = props
        history.push('/login')
    }

    return (
        <div className='RegistrationPage'>
            <h2>Register</h2>
            <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
        </div>
    )
}

export default RegistrationPage;