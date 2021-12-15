import React, { useState } from 'react'

const creds = {
    username: '',
    password: ''
}

const initialForm = {
    username: '',
    password: ''
}

function Login() {

    const [formValues, setFormValues] = useState(initialForm);

    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
            
        });
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
    }

    return (
        <>
        <div>
            <h1>Login</h1>
        </div>
        <div className='login-form form'>
            <form>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input name='username' type='text' value={formValues.username} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input name='password' type='text' value={formValues.password} onChange={onChange}/>   
                </div>
                <button>Login</button>
            </form>
        </div>
        
        </>
        
    )
}

export default Login