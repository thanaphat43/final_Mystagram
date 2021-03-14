import React from 'react';




export const UnsplashImage = ({imageShowUser}) => {
  // รับค่า มาจาหน้า หน้าค้นหา และ แจก imageShowUser
  return (
    <>
    
      <body>
        <center>
       
      <section class="photo">
      <header class="photo__header">
        <div class="photo__header-column">
          <img class="photo__avatar" src={imageShowUser.user.profile_image.small}/>
        </div>
        <div class="photo__header-column">
         <a href={"/UserProfile/"+ imageShowUser.user.username}><span class="photo__username">${imageShowUser.user.first_name}</span>
         </a>
        </div>
      </header>
      <div class="photo__file-container">
        <img class="photo__file" src={imageShowUser.urls.raw}/>
      </div>
      <div class="photo__info">
        <div class="photo__icons">
          <span class="photo__icon">
            <i class="fa fa-heart-o heart fa-lg"></i>
          </span>
          <span class="photo__icon">
            <i class="fa fa-comment-o fa-lg"></i>
          </span>
        </div>
        <span class="photo__likes">{imageShowUser.likes} likes</span>
        <div class="photo__comments">
          <div class="photo__comment">
          <span class="photo__comment-author">
          {imageShowUser.user.username}</span>{imageShowUser.alt_description}
                      </div>
          </div>
        </div>
    
    </section>
    </center>
    </body>
      
      
    </>
  )
}
export default UnsplashImage
