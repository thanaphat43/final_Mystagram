import logo from './logo.svg';
import './App.css';
import './index.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Search } from './components/Search';
import { Loader } from './components/Loader';
import { UnsplashImage } from './components/Igshow';
import axios from 'axios';



function App() {
  const [images, setImage] = useState([]);

  

  const fetchImages = (count = 10) => {
    const apiRoot1 = "https://api.unsplash.com";//สำหรับการดึงข้อมูลผ่านทาง Axios
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot1}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImage([ ...res.data]);
      })
    }
    useEffect(() => {
    fetchImages();
  }, [])
  // const [images, setImaes] = useState([])
  // const [pageNumber, setpageNumber] = useState(1)
  // const apiRoot = "https://api.unsplash.com";
  // const accessKey = process.env.REACT_APP_ACCESSKEY;

  // const fetchPhots = async (pageNumber) => {
  //   const res = await fetch(`https://api.unsplash.com/photos?client_id=${accessKey}&page=${pageNumber}&per_page=20`)
  //   const data = await res.json()
  //   console.log(data)
  //   setImaes(data)
  // }

  // useEffect(() => {
  //   fetchPhots(pageNumber)


    // axios
    // .get(`${apiRoot}/photos/random?client_id=JpRi10_ZdacFT5n3s6N2rCpuIl9jAYcuDRsJmUB1cwk`)
    // .get(`${apiRoot}/photos/random?client_id=JpRi10_ZdacFT5n3s6N2rCpuIl9jAYcuDRsJmUB1cwk&count=10`)
    //  .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
    //  .then(res=>console.log(res.data))
    // .then(res => setImaes([...images,...res.data]))
  // }, [])

  return (
    <>

   <Search/>
     
        {
          images.map(image => (
          
<Router>
            <Switch>

              <UnsplashImage image={image} path="/"/>
             
            </Switch>
            </Router>

            // <body>
            //   <center>


            //     <section class="photo">
            //       <header class="photo__header">
            //         <div class="photo__header-column">
            //           <img class="photo__avatar" src={image.user.profile_image.small} />
            //         </div>
            //         <div class="photo__header-column">
            //           <span class="photo__username">${image.user.first_name}</span>
            //         </div>
            //       </header>
            //       <div class="photo__file-container">
            //         <img class="photo__file" src={image.urls.raw} />
            //       </div>
            //       <div class="photo__info">
            //         <div class="photo__icons">
            //           <span class="photo__icon">
            //             <i class="fa fa-heart-o heart fa-lg"></i>
            //           </span>
            //           <span class="photo__icon">
            //             <i class="fa fa-comment-o fa-lg"></i>
            //           </span>
            //         </div>
            //         <span class="photo__likes">{image.likes} likes</span>
            //         <div class="photo__comments">
            //           <div class="photo__comment">
            //             <span class="photo__comment-author">
            //               {image.user.username}</span>{image.alt_description}
            //           </div>
            //         </div>
            //       </div>

            //     </section>
            //   </center>
            // </body>

            
            
          ))
        }
    </>
  );
}

export default App;
