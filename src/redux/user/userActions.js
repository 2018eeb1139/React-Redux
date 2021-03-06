import axios from 'axios'
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS ,FETCH_USER_FAILURE } from './userTypes'

export const fetchUserRequest=()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess=(users)=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUserFailure=(error)=>{
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then(res=>{
            const users=res.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(err=>{
            const errMsg=err.message
            dispatch(fetchUserFailure(errMsg))
        })
    }
}