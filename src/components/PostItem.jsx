import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = ({deletePost, number, post}) => {
    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{`${number}. ${post.title}`}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className='post__btn'>
                    <MyButton onClick={() => deletePost(post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}
  

export default PostItem;