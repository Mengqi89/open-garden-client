import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import { Link } from 'react-router-dom'

function LoginPage(props) {

    function handleLoginSuccess(username) {
        const { history } = props
        history.push('/list')
        props.handleUserName(username)
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

export default withRouter(LoginPage)

//!wW101010