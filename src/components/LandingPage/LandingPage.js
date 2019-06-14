import React from 'react';

function LandingPage(props) {
    return (
        <div>
            <nav className='App__nav'>
                <a href="/login">Login</a>
            </nav>
            <headre>
                <h1>Food Share</h1>
                <button type="button">Join!</button>
            </headre>
            <div>
                <h2>How many are sharing in your neighbhorhood?</h2>
                <button type="button">Find out!</button>
                <p>120</p>
            </div>

        </div>
    );
};

export default LandingPage;