import React from 'react';
import LoginForm from '../LoginForm/LoginForm'
import { Link } from 'react-router-dom'

function LoginPage(props) {

    function handleLoginSuccess() {
        const { location, history } = props
        const destination = (location.state || {}).from || '/list'
        history.push(destination)
    }

    return (
        <div className='LoginPage'>
            <nav >
                <Link to='/'>Go Back</Link>
            </nav>
            <h2>Login</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
    );
};

export default LoginPage;