import React, { useState } from "react";
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostAdd = ({addPost}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    });

    const createPost = (e) => {
        e.preventDefault();
        addPost({...post, id: Date.now()});
        setPost({
            title: '',
            body: ''
        });
    }

    return (
        <div>
            <form>
                <div className="postAddForm">
                    <div>
                        <MyInput 
                            value={post.title}
                            type='text' 
                            placeholder='Post title' 
                            onChange={e => setPost({...post, title: e.target.value})}
                        />
                        <MyInput  
                            value={post.body}
                            type='text' 
                            placeholder='Post body' 
                            onChange={e => setPost({...post, body: e.target.value})}
                        />
                    </div>
                    <div>
                        <MyButton 
                            onClick={createPost}
                        >
                            Create Post
                        </MyButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PostAdd;