import { useMemo } from "react";

export const usePostsSorted = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }

        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePostsFiltered = (posts, filter) => {
    const sortedPosts = usePostsSorted(posts, filter.sort);

    const filteredPosts = useMemo(() => {
        if (filter.searchQuery) {
            return [...sortedPosts].filter(p => p.title.toLowerCase().includes(filter.searchQuery.toLowerCase()) 
            || p.body.toLowerCase().includes(filter.searchQuery.toLowerCase()))
        }

        return sortedPosts;
    }, [filter.searchQuery, sortedPosts]);

    return filteredPosts;
}