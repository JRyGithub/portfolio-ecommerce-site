import React, {useState} from 'react';

import './sign-in.styles.scss';

const SignIn = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail('');
        setPassword('');
    }

    const handleChange = (e) => {
        const { value, name} = e.target;
    }

    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input name="email" value={email} required type="email" />
                <label>Email</label>
                <input name="password" value={password} required type="password" />
                <label>Password</label>
                <input type='submit' value='Submit Form' />
            </form>
        </div>
    )
}

export default SignIn;