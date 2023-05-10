import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import PostList from '../components/PostList';
import PostAdd from '../components/PostAdd';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePostsFiltered } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useLoading } from '../hooks/useLoading';
import { usePagination } from '../hooks/usePagination';
import Pager from '../components/UI/pager/Pager';
import MySelect from '../components/UI/select/MySelect';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', searchQuery: ''});
    const filteredPosts = usePostsFiltered(posts, filter);

    const [totalPosts, setTotalPosts] = useState(0);
    const [limit, setLimit] = useState(10);
    const [curPage, setCurPage] = useState(1);
    const pagesNumbers = usePagination(totalPosts, limit);
    const [loadPosts, isPostsLoading, postsLoadingError] = useLoading(async () => {
        const result = await PostService.getPosts(limit, curPage);
        setPosts(result.data);
        setTotalPosts(result.totalCount);
    });    

    useEffect(() => {
        loadPosts();
        setFilter({sort: '', searchQuery: ''});
    }, [curPage, limit]);

    const handleLimitChange = (selectedValue) => {
        setCurPage(1);
        setLimit(selectedValue);
    }

    const addPost = (post) => {
        setPosts([...posts, post]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className='Posts'>
            <MyButton style={{margin: '15px'}} onClick={() => setModal(true)}>Add Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostAdd addPost={addPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postsLoadingError &&
                <h1>Error while loading posts: {postsLoadingError}</h1>
            }
            <div style={{marginLeft: '15px'}}>
                <MySelect 
                        options={[
                            {value: '5', name: '5'},
                            {value: '10', name: '10'},
                            {value: '15', name: '15'},
                            {value: '20', name: '20'}
                        ]}
                        defaultOption={{value: '', name: 'Posts per page:'}}
                        selectedValue={limit}
                        onChange={selectedValue => handleLimitChange(selectedValue)}
                />
            </div>
            {isPostsLoading 
                ?
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                        <Loader/>
                    </div>
                : 
                    <PostList remove={removePost} posts={filteredPosts} title={'Posts list'}/>
            }
            <Pager pages={pagesNumbers} curPage={curPage} setCurPage={setCurPage}/>
        </div>
    );
}

export default Posts;