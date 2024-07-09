import React from 'react'
import Post from './Post'
const Posts = () => {
    return(
        <div className='flex flex-col justify-center items-center gap-5 space-y-4'>
            <Post
            userAvatar="https://avatar.iran.liara.run/public/5"
            username="Sigma_developer"
            updatedAt="Now"
            PostUrl="https://tse1.mm.bing.net/th?id=OIP.Nolz7WP6ihgX54G98AcWnAHaEo&pid=Api"
                likesNumber=""
            location={""}
            
            />
        </div>
    )
}
export default Posts