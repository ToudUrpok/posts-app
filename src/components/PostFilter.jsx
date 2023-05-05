import React from "react";
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="post__filter">
            <div>
                <MyInput 
                    placeholder='Search...'
                    value={filter.searchQuery}
                    onChange={e => setFilter({...filter, searchQuery: e.target.value})}
                />
            </div>
            <div>
                <MySelect 
                    options={[
                        {value: 'title', name: 'Title'},
                        {value: 'body', name: 'Description'}
                    ]}
                    defaultOption={{value: '', name: 'Sort by:'}}
                    selectedValue={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                />
            </div>
        </div>
    )
}

export default PostFilter;