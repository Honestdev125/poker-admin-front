// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    mails: [],
    unreadCount: undefined
};

const slice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET MAILS
        getMailsSuccess(state, action) {
            state.mails = action.payload.mails;
            state.unreadCount = action.payload.unreadCount;
        },

        // FILTER MAILS
        filterMailsSuccess(state, action) {
            state.mails = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getMails() {
    return async () => {
        try {
            const response = await axios.get('/mails/list');
            dispatch(slice.actions.getMailsSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function filterMails(filter) {
    return async () => {
        try {
            const response = await axios.post('/mails/filter', { filter });
            dispatch(slice.actions.filterMailsSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setImportant(id) {
    return async () => {
        try {
            await axios.post('/mails/setImportant', { id });
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setStarred(id) {
    return async () => {
        try {
            await axios.post('/mails/setStarred', { id });
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setRead(id) {
    return async () => {
        try {
            await axios.post('/mails/setRead', { id });
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
