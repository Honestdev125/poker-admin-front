// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    data: [],
    gameType: [],
};

const slice = createSlice({
    name: 'tournamentList',
    initialState,
    reducers: {
        hasError(state, action) {
            state.error = action.payload;
        },

        getDataCreate(state, action) {
            state.data = action.payload;
        },
        getDataCount(state, action) {
            state.totalCount = action.payload;
        },

        getGameType(state, action) {
            state.gameType = action.payload;
        },
        getTournamnetType(state, action) {
            state.tournamentType = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getDataCreateSuccess(pageNum, rowsPerPage, searchKey) {
    return async () => {
        try {
            const response = await axios.post('/tournament/getlist', {
                page_num: pageNum,
                rows_per_page: rowsPerPage,
                search_string: searchKey
            });
            dispatch(slice.actions.getDataCreate(response.data.data));
            dispatch(slice.actions.getDataCount(response.data.total_count));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getGameTypeSuccess() {
    return async () => {
        try {

        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
}
