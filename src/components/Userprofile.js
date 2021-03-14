import React from 'react'

function PhotoList({ user }) {
    return (
        <div>
            <div class="container">

                <div class="profile">

                    <div class="profile-image">

                        <img src={user.profile_image.large} alt="" />

                    </div>

                    <div class="profile-user-settings">

                        <h1 class="profile-user-name">{user.username}</h1>

                        <button class="btn profile-edit-btn">Edit Profile</button>

                        <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

                    </div>

                    <div class="profile-stats">

                        <ul>
                            <li><span class="profile-stat-count">{user.total_photos}</span> posts</li>
                            <li><span class="profile-stat-count">{user.total_likes}</span> followers</li>
                            <li><span class="profile-stat-count">{user.total_photos}</span> following</li>
                        </ul>

                    </div>

                    <div class="profile-bio">

                        <p><span class="profile-real-name"><b>{user.first_name}{" "}{user.last_name}</b></span> {user.bio}</p>

                    </div>

                </div>

            </div>
            <hr />


        </div>
    )
}

export default PhotoList
