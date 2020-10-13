import * as actionTypes from "../actions/actionTypes";

const initialState = {
    data: [],
    isLoggedIn: false,
    showSuccessModal: false,
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MAKE_REQUEST:
            return { ...state, loading: true };
        case actionTypes.LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true };
        case actionTypes.GET_DATA_SUCCESS:
            return executeGetDataSuccess(state, action);
        case actionTypes.GET_SINGLE_SUCCESS:
            return executeGetSingleSuccess(state, action);
        case actionTypes.POST_DATA_SUCCESS:
            return executePostDataSuccess(state, action);
        case actionTypes.PUT_DATA_SUCCESS:
            return executePutDataSuccess(state, action);
        case actionTypes.DELETE_DATA_SUCCESS:
            return executeDeleteDataSuccess(state, action);
        default:
            return state;
    }
}

const executeGetDataSuccess = (state, action) => {
    return {
        ...state,
        data: action.data,
        loading: false
    }
}
const executeGetSingleSuccess = (state, action) => {
    return {
        ...state,
        data: action.data,
        loading: false
    }
}
const executePostDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true,
        loading: false
    }
}
const executePutDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true,
        loading: false
    }
}
const executeDeleteDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true,
        loading: false
    }
}

export default reducer;