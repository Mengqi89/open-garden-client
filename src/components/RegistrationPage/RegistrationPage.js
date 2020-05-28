import React from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import { Link } from 'react-router-dom'

function RegistrationPage(props) {

    function handleRegistrationSuccess() {
        const { history } = props
        history.push('/login')
    }

    return (
        <div className='RegistrationPage'>
            <nav >
                <Link to='/'>Go Back</Link>
            </nav>
            <h2>Create an account</h2>
            <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
        </div>
    )
}

export default RegistrationPage;