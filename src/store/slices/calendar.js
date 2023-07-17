// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    events: []
};

const slice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET EVENTS
        getEventsSuccess(state, action) {
            state.events = action.payload;
        },

        // ADD EVENT
        addEventSuccess(state, action) {
            state.events = action.payload;
        },

        // UPDATE EVENT
        updateEventSuccess(state, action) {
            state.events = action.payload;
        },

        // REMOVE EVENT
        removeEventSuccess(state, action) {
            state.events = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getEvents() {
    return async () => {
        try {
            const response = await axios.get('/calendar/events');
            dispatch(slice.actions.getEventsSuccess(response.data.events));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addEvent(event) {
    return async () => {
        try {
            const response = await axios.post('/calendar/events/add', event);
            dispatch(slice.actions.addEventSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function updateEvent(event) {
    return async () => {
        try {
            const response = await axios.post('/calendar/events/update', event);
            dispatch(slice.actions.updateEventSuccess(response.data.events));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function removeEvent(eventId) {
    return async () => {
        try {
            const response = await axios.post('/calendar/events/delete', { eventId });
            dispatch(slice.actions.removeEventSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
