const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const setPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page, });

export const initialState = {
    currentPage: 1,
    foundations: [],
    totalItems: 0,
    itemsPerPage: 3,
};

export const reducer = (state = initialState, action) => {
    if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.payload
        }
    }
    return state;
};