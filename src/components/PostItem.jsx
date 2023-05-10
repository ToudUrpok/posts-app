import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = ({deletePost, post}) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>{`${post.id}. ${post.title}`}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className='post__buttons'>
                    <div className='post__btn'>
                        <MyButton 
                            onClick={() => navigate(`/post/${post.id}`)}
                        >
                            View
                        </MyButton>
                    </div>
                    <div className='post__btn'>
                        <MyButton onClick={() => deletePost(post)}>Delete</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
  

export default PostItem;