import React from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import './RegistrationPage.css'

function RegistrationPage(props) {

    function handleRegistrationSuccess() {
        const { history } = props
        history.push('/login')
    }

    return (
        <div className='RegistrationPage'>
            <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
        </div>
    )
}

export default RegistrationPage;