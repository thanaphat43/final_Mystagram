import React from "react";
import '../page/Profile.css'
import axios from "axios";
import { useState } from "react";
import Igshow from './Igshow';

const Search = () => {
  const [image, setImage] = useState(""); //เซ็ตเป็นค่าว่าง
  const accessKey = process.env.REACT_APP_ACCESSKEY; //เป็นตัวแปรที่นำไฟล์ key Unspach

  const [ShowUser, setShowUser] = useState([]);
  const handleChange = (event) => {
    setImage(event.target.value);//รับค่าจาาก value
  };

  const handleSubmit = () => {
    console.log(image);
    const apiRoot = "https://api.unsplash.com";//สำหรับการดึงข้อมูลผ่านทาง Axios

    const url = apiRoot + "/search/photos?page=1&query=" + image + "&client_id=" + accessKey;
    //urlค้นหารูปภาพ   // imgeคือการรับค่าจาก Input setImage 
    axios.get(url)//โดย axios นั่นดึงค่า url
      .then((response) => {//ใช้ตัวแปรค่า คือ response

        setShowUser(response.data.results); // เก็บค่า response หลังจาก ดึงค่าข้อมูลผลลัพธ์
      });
  };

  return (
    <div className="app">
      <div className="heading">
        <h1>MY STAGRAM</h1>
      </div>

      <div className="input">
        <input onChange={handleChange} type="text" name="image" placeholder="Search for images" />
        {/* เมื่อมีค่าเปลี่ยนจะใช้ฟังก์ชั่น */}
      </div>
      <button onClick={handleSubmit} type="submit">Search</button>
      {/* ใช้เรียกใช้handleSubmit */}
      <br />
      <br />
      <div>
        {ShowUser.map((imageShowUser) => (

          <>
            <Igshow imageShowUser={imageShowUser} />

          </>
        ))}
      </div>
    </div>

  )
}

export default Search
