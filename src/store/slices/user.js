// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    usersS1: [],
    usersS2: [],
    followers: [],
    friendRequests: [],
    friends: [],
    gallery: [],
    posts: [],
    detailCards: [],
    simpleCards: [],
    profileCards: []
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET USERS STYLE 1
        getUsersListStyle1Success(state, action) {
            state.usersS1 = action.payload;
        },

        // GET USERS STYLE 2
        getUsersListStyle2Success(state, action) {
            state.usersS2 = action.payload;
        },

        // GET FOLLOWERS
        getFollowersSuccess(state, action) {
            state.followers = action.payload;
        },

        // FILTER FOLLOWERS
        filterFollowersSuccess(state, action) {
            state.followers = action.payload;
        },

        // GET FRIEND REQUESTS
        getFriendRequestsSuccess(state, action) {
            state.friendRequests = action.payload;
        },

        // FILTER FRIEND REQUESTS
        filterFriendRequestsSuccess(state, action) {
            state.friendRequests = action.payload;
        },

        // GET FRIENDS
        getFriendsSuccess(state, action) {
            state.friends = action.payload;
        },

        // FILTER FRIENDS
        filterFriendsSuccess(state, action) {
            state.friends = action.payload;
        },

        // GET GALLERY
        getGallerySuccess(state, action) {
            state.gallery = action.payload;
        },

        // GET POSTS
        getPostsSuccess(state, action) {
            state.posts = action.payload;
        },

        // EDIT COMMENT
        editCommentSuccess(state, action) {
            state.posts = action.payload;
        },

        // ADD COMMENT
        addCommentSuccess(state, action) {
            state.posts = action.payload;
        },

        // ADD REPLY
        addReplySuccess(state, action) {
            state.posts = action.payload;
        },

        // LIKE POST
        likePostSuccess(state, action) {
            state.posts = action.payload;
        },

        // LIKE COMMENT
        likeCommentSuccess(state, action) {
            state.posts = action.payload;
        },

        // LIKE REPLY
        likeReplySuccess(state, action) {
            state.posts = action.payload;
        },

        // GET DETAIL CARDS
        getDetailCardsSuccess(state, action) {
            state.detailCards = action.payload;
        },

        // FILTER DETAIL CARDS
        filterDetailCardsSuccess(state, action) {
            state.detailCards = action.payload;
        },

        // GET SIMPLE CARDS
        getSimpleCardsSuccess(state, action) {
            state.simpleCards = action.payload;
        },

        // FILTER SIMPLE CARDS
        filterSimpleCardsSuccess(state, action) {
            state.simpleCards = action.payload;
        },

        // GET PROFILE CARDS
        getProfileCardsSuccess(state, action) {
            state.profileCards = action.payload;
        },

        // FILTER PROFILE CARDS
        filterProfileCardsSuccess(state, action) {
            state.profileCards = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getUsersListStyle1() {
    return async () => {
        try {
            const response = await axios.get('/user-list/s1/list');
            dispatch(slice.actions.getUsersListStyle1Success(response.data.users_s1));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getUsersListStyle2() {
    return async () => {
        try {
            const response = await axios.get('/user-list/s2/list');
            dispatch(slice.actions.getUsersListStyle2Success(response.data.users_s2));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getFollowers() {
    return async () => {
        try {
            const response = await axios.get('/followers/list');
            dispatch(slice.actions.getFollowersSuccess(response.data.followers));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function filterFollowers(key) {
    return async () => {
        try {
            const response = await axios.post('/followers/filter', { key });
            dispatch(slice.actions.filterFollowersSuccess(response.data.results));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getFriendRequests() {
    return async () => {
        try {
            const response = await axios.get('/friend-request/list');
            dispatch(slice.actions.getFriendRequestsSuccess(response.data.friends));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function filterFriendRequests(key) {
    return async () => {
        try {
            const response = await axios.post('/friend-request/filter', { key });
            dispatch(slice.actions.filterFriendRequestsSuccess(response.data.results));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getFriends() {
    return async () => {
        try {
            const response = await axios.get('/friends/list');
            dispatch(slice.actions.getFriendsSuccess(response.data.friends));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function filterFriends(key) {
    return async () => {
        try {
            const response = await axios.post('/friends/filter', { key });
            dispatch(slice.actions.filterFriendsSuccess(response.data.results));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getGallery() {
    return async () => {
        try {
            const response = await axios.get('/gallery/list');
            dispatch(slice.actions.getGallerySuccess(response.data.gallery));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getPosts() {
    return async () => {
        try {
            const response = await axios.get('/posts/list');
            dispatch(slice.actions.getPostsSuccess(response.data.posts));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function editComment(key, id) {
    return async () => {
        try {
            const response = await axios.post('/posts/editComment', { key, id });
            dispatch(slice.actions.editCommentSuccess(response.data.posts));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addComment(postId, comment) {
    return async () => {
        try {
            const response = await axios.post('/comments/add', { postId, comment });
            dispatch(slice.actions.addCommentSuccess(response.data.posts));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addReply(postId, commentId, reply) {
    return async () => {
        try {
            const response = await axios.post('/replies/add', { postId, commentId, reply });
            dispatch(slice.actions.addReplySuccess(response.data.posts));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function likePost(postId) {
    return async () => {
        try {
            const response = await axios.post('/posts/list/like', { postId });
            dispatch(slice.actions.likePostSuccess(response.data.posts));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function likeComment(postId, commentId) {
    return async () => {
        try {
            const response = await axios.post('/comments/list/like', { postId, commentId });
            dispatch(slice.actions.likeCommentSuccess(response.data.posts));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function likeReply(postId, commentId, replayId) {
    return async () => {
        try {
            const response = await axios.post('/replies/list/like', { postId, commentId, replayId });
            dispatch(slice.actions.likeReplySuccess(response.data.posts));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getDetailCards() {
    return async () => {
        try {
            const response = await axios.get('/details-card/list');
            dispatch(slice.actions.getDetailCardsSuccess(response.data.users));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function filterDetailCards(key) {
    return async () => {
        try {
            const response = await axios.post('/details-card/filter', { key });
            dispatch(slice.actions.filterDetailCardsSuccess(response.data.results));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getSimpleCards() {
    return async () => {
        try {
            const response = await axios.get('/simple-card/list');
            dispatch(slice.actions.getSimpleCardsSuccess(response.data.users));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function filterSimpleCards(key) {
    return async () => {
        try {
            const response = await axios.post('/simple-card/filter', { key });
            dispatch(slice.actions.filterSimpleCardsSuccess(response.data.results));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getProfileCards() {
    return async () => {
        try {
            const response = await axios.get('/profile-card/list');
            dispatch(slice.actions.getProfileCardsSuccess(response.data.users));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function filterProfileCards(key) {
    return async () => {
        try {
            const response = await axios.post('/profile-card/filter', { key });
            dispatch(slice.actions.filterProfileCardsSuccess(response.data.results));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
