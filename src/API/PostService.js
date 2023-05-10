import axios from 'axios';

export default class PostService {
    static async getPosts(limit, page) {
        //const url = limit ? `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
        //                  : 'https://jsonplaceholder.typicode.com/posts'
        //const response = await axios.get(url);
        const params = limit ? {_limit: limit, _page: page} : {};
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: params
        });
        const totalCount = response.headers.has('x-total-count') ? response.headers['x-total-count']
                                                                 : response.data.length;
        return { data: response.data, totalCount: totalCount};
    }

    static async getPostById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }

    static async getPostComments(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response.data;
    }
}