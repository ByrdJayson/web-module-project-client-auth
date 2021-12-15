import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialLoginForm = {
    username: '',
    password: ''
}

function Login(props) {

    const [formValues, setFormValues] = useState(initialLoginForm);
    const { push } = useHistory();
    const login = (props) => {
        
        axiosWithAuth().post('/login', formValues)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('role', res.data.role);
            push('/friends');
            
        })
        .catch(err => {
            console.error(err);
        })
        
        
    }

    

    const onChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
            
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        login(formValues);
    }

    return (
        <>
        <div>
            <h1>Login</h1>
        </div>
        <div className='login-form form'>
            <form onSubmit={onSubmit}>
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