import React from 'react'
import Profile from './Profile';

function UserProfile(props) {
    //ส่งค่า props
    return (
        <>
            <Profile id ={props.match.params.id}/>
        </>
    )
}

export default UserProfile
