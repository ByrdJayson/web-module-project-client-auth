import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendsList() {

    const [ friends, setFriends ] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
        })
        .catch(err => {
            console.error(err);
        })
        
    }, [])

    return (
        <>
            <div>
                <h1>Friends List</h1>        
            </div>
            <div className='friends'>
                {friends.map(friend => {
                    return (
                        <div key={friend.id} className='friend'>
                            <h2>{friend.name}</h2>
                            <span>{friend.age}</span>
                            <p>{friend.email}</p>
                            <p>{friend.id}</p>
                        </div>
                    )
                })}
            </div>
        </>
        
    )
}

export default FriendsList
