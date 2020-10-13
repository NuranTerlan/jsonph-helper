import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios";

export const login = () => {
    return (dispatch) => {
        try {
            dispatch({ type: actionTypes.LOGIN_SUCCESS })
        }
        catch (ex) {
            console.log(ex)
        }
    }
}

const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
};

export const getData = (url, props) => {
    return async (dispatch) => {
        await dispatch({ type: actionTypes.MAKE_REQUEST });
        await axios.get(url)
            .then(res => {
                dispatch(getDataSuccess(res.data));
            })
            .catch(ex => {
                console.log(`EX handled while getting data : ${ex}`);
            });
    }
};

const getSingleSuccess = (data) => {
    return {
        type: actionTypes.GET_SINGLE_SUCCESS,
        data: data
    }
}

export const getSingle = (url, props) => {
    return async (dispatch) => {
        await dispatch({ type: actionTypes.MAKE_REQUEST });
        await axios.get(url)
            .then(res => {
                dispatch(getSingleSuccess(res.data))
            })
            .catch(ex => {
                console.log(`EX handled while getting single item : ${ex}`);
            })
    }
}

const postDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        data: response
    }
}

export const postData = (url, obj, props) => {
    return async (dispatch) => {
        await dispatch({ type: actionTypes.MAKE_REQUEST });
        await axios.post(url, obj)
            .then(response => {
                dispatch(postDataSuccess(response));
            })
            .catch(ex => {
                console.log(`EX handled while posting new item : ${ex}`);
            })
    }
}

const putDataSuccess = (response) => {
    return {
        type: actionTypes.PUT_DATA_SUCCESS,
        data: response
    }
}

export const putData = (url, obj, props) => {
    return async (dispatch) => {
        await dispatch({ type: actionTypes.MAKE_REQUEST });
        await axios.put(url, obj)
            .then(response => {
                dispatch(putDataSuccess(response));
            })
            .catch(ex => {
                console.log(`EX handled while updating data : ${ex}`);
            })
    }
}

const deleteDataSuccess = (response) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        data: response
    }
}

export const deleteData = (url, props) => {
    return async (dispatch) => {
        await dispatch({ type: actionTypes.MAKE_REQUEST });
        await axios.delete(url)
            .then(response => {
                dispatch(deleteDataSuccess(response));
            })
            .catch(ex => {
                console.log(`EX handled while deleting data : ${ex}`);
            })
    }
}