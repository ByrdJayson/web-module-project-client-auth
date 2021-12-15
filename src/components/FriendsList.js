import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

function FriendsList() {

    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log(res);
        })
        
    }, [])

    return (
        <>
            <div>
                <h1>Friends List Test</h1>        
            </div>
            <div className='friends'>

            </div>
        </>
        
    )
}

export default FriendsList
