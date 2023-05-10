import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from '../API/PostService'
import { useLoading } from "../hooks/useLoading";
import Loader from "../components/UI/loader/Loader";

const PostView = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [loadPost, isPostLoading, postLoadingError] = useLoading(async () => {
        const post = await PostService.getPostById(id);
        setPost(post);
    });
    const [loadComments, isCommentsLoading, commentsLoadingError] = useLoading(async () => {
        const comments = await PostService.getPostComments(id);
        setComments(comments);
    });
    
    useEffect(() => {
        loadPost();
        loadComments();
    }, []);

    return (
        <div>
            {isPostLoading 
                ? <Loader/>
                :
                <div className='post'>
                    <div className='post__content'>
                        <strong>{`${post.id}. ${post.title}`}</strong>
                        <div>
                            {post.body}
                        </div>
                    </div>
                </div>
            }
            {isCommentsLoading 
                ? <Loader/>
                :
                <div>
                    <h1 style={{marginLeft: '20px'}}>Comments</h1>
                    {
                        comments.map(comment =>
                            <div className='post' key={comment.id}>
                                <div className='post__content'>
                                    <div>
                                        <span style={{marginLeft: '30px'}}>by {comment.email}</span>
                                    </div>
                                    <strong>{comment.name}</strong>
                                    <div>
                                        {comment.body}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default PostView;