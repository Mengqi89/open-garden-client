import React from 'react';
import LoginForm from '../LoginForm/LoginForm'

function LoginPage(props) {

    function handleLoginSuccess() {
        const { location, history } = props
        const destination = (location.state || {}).from || '/list'
        history.push(destination)
        console.log(destination)
        console.log(location)
        console.log(history)
    }

    return (
        <div className='LoginPage'>
            <h2>Login</h2>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
    );
};

export default LoginPage;