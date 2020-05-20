import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
// import { Link } from 'react-router-dom'
import './LoginPage.css'

function LoginPage(props) {

    function handleLoginSuccess(username) {
        const { history } = props
        history.push('/list')
        props.handleUserName(username)
    }

    return (
        <div className='LoginPage'>
            {/* <nav >
                <Link to='/'>Go Back</Link>
            </nav> */}
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
    );
};

export default withRouter(LoginPage)

