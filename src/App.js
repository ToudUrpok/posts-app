import React, { useEffect, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList';
import PostAdd from './components/PostAdd';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePostsFiltered } from './hooks/usePosts';
import PostService from './API/PostService';

function App() {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', searchQuery: ''});
    const filteredPosts = usePostsFiltered(posts, filter);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const posts = await PostService.getPosts();
        setPosts(posts);
    }

    const addPost = (post) => {
        setPosts([...posts, post]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className='App'>
            <MyButton style={{margin: '15px'}} onClick={() => setModal(true)}>Add Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostAdd addPost={addPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={filteredPosts} title={'Posts list'}/>
        </div>
    );
}

export default App;
