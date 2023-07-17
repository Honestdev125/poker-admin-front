// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    contacts: []
};

const slice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET CONTACTS
        getContactsSuccess(state, action) {
            state.contacts = action.payload;
        },

        // MODIFY CONTACT
        modifyContactSuccess(state, action) {
            state.contacts = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getContacts() {
    return async () => {
        try {
            const response = await axios.get('/contact/list');
            dispatch(slice.actions.getContactsSuccess(response.data.contacts));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function modifyContact(contact) {
    return async () => {
        try {
            const response = await axios.post('/contact/modify', contact);
            dispatch(slice.actions.modifyContactSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
