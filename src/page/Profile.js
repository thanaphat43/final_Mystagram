import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Profile.css'
import Userprofile from "../components/Userprofile";
import PhotoList from "../components/PhotoList ";
export const Profile = ({ id }) => {

    const accessKey = process.env.REACT_APP_ACCESSKEY;
    const apiRoot1 = "https://api.unsplash.com/search/users?page=1&query="; //ลิงค์ค้นหาผู้ใช้
    const apiRoot2 = "https://api.unsplash.com/users/"; //ลิงค์ค้นหารูปของผู้ใช้
    const [UserphotoShow, setUserphotoShow] = useState([]);
    const [ImageShow, setImageShow] = useState([]);



    const Userphoto = apiRoot1 + id + "&client_id=" + accessKey;

    const Imagephoto = apiRoot2 + id + "/photos?page=1&query=&client_id=" + accessKey;

    useEffect(() => {
        axios.get(Userphoto)
            .then((response) => {
                setUserphotoShow(response.data.results);
            })
        axios.get(Imagephoto)
            .then((response) => {
                setImageShow(response.data);

            })
    }, [id])

    return (
        <body class="body">
            {UserphotoShow.map((user) => (
                <>
                    <Userprofile user={user} />
                </>
            ))}
            {ImageShow.map((smalt) => (
                <>

                    <PhotoList smalt={smalt} />
                </>
            ))}
        </body>
    )
}
export default Profile;