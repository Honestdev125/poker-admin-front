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
    tournamentType: [],
    detailId: {},
    totalCount: ''
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
        },
        getDetailId(state, action) {
            state.detailId = action.payload;
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
            const response = await axios.get('/game/type/getlist');
            dispatch(slice.actions.getGameType(response.data.data));
            console.log(response.data.data);
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getTournamentTypeSuccess() {
    return async () => {
        try {
            const response = await axios.get('/tournament/type/getlist');
            dispatch(slice.actions.getTournamnetType(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getDetailIdSuccess(value) {
    dispatch(slice.actions.getDetailId(value));
}
