import React from "react";
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({remove, posts, title}) => {
    if (posts.length === 0) {
        return <h1 style={{textAlign: 'center'}}>There are no posts...</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem deletePost={remove} number={index + 1} post={post} />
                    </CSSTransition>  
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList;