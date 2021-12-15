import axios from 'axios';
import React, { useState, useHistory } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFriend = {
    name: '',
    age: '',
    email: ''
}

function AddFriends(props) {
    const { push } = props.history;
    const [newFriend, setNewFriend ] = useState(initialFriend);

    const onChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', newFriend)
        .then(() => {
            push('/friends')
        });

    }

    return (
        <div>
            <h1>Add Friends Test</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>   
                        <input name='name' type='text' value={newFriend.name} onChange={onChange}/>   
                    </div>
                    <div>
                        <label htmlFor='age'>Age:</label>
                        <input name='age' type='text' value={newFriend.age} onChange={onChange}/>    
                    </div> 
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input name='email' type='email' value={newFriend.email} onChange={onChange}/>
                    </div>
                    <button>Add Friend</button>
                    
                </form>
            </div>
        </div>
    )
}

export default AddFriends;