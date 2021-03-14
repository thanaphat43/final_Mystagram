import React from 'react'
import { FiHeart } from "react-icons/fi";

function PhotoList({ smalt }) {
    return (
        <div>
            <main>
                <div class="gallery">


                    <div class="container">
                        <div class="gallery-item" tabindex="0">

                            <img src={smalt.urls.small} />

                            <div class="gallery-item-info">

                                <ul>
                                    <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"><FiHeart /></i> {smalt.likes}</li>
                                    {/* <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> {smalt.description}</li> */}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default PhotoList
