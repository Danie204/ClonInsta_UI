import { useFetch, useFetchPosts } from '/src/hooks/useFetch.js';

const apiHost = 'http://localhost:3000';

export const usePosts = () => useFetch(apiHost + '/posts/');
export const usePostsById = (userId) => useFetch(apiHost + `/posts?user=${userId}`);

export const useMyInfo = () => useFetch(apiHost + '/users');

export const useUserActions = () => {
    const fetchPosts = useFetchPosts();
    return {
        login: (email, password) => fetchPosts(apiHost + '/users/login', { email, password }),
        createPosts: (description, photo) => fetchPosts(apiHost + '/posts', { description, photo }),
        deletePost: (postId) => fetchPosts(apiHost + `/posts/${postId}`, null, 'DELETE'),
        like: async (postId) => fetchPosts(apiHost + `/posts/${postId}/like`, { postId }),
    };
};
