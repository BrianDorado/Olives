const initialState= {
    authenticated: false,
    user_data: {
        role: 0,
        Name: '',
        address: {
            street:'',
            number:'',
            zip: '',
            city: '',
            state: ''
        }
    }
}

const GET_ALL_USERS = 'GET_ALL_USERS';
const GET_USER_BY_ID = 'GET_USER_BY_EMAIL'
const GET_ACTIVE_USER = 'GET_ACTIVE_USER'

export function localUser() {
    return {
        type: GET_ACTIVE_USER,
        payload: local_user
    }
}

export function getAllUsers() {
    const Users = axios.get('http://localhost:4000/api/users').then(res => {
        return res.data
    })
    return {
        type: GET_ALL_USERS,
        payload: Users
    }
}

export function searchUniqueUser() {
    const User = axios.get('http:4000/api/users:id').then(res => {
        return res.data
    })
    return {
        type: GET_USER_BY_ID,
        payload: ''
    }
}

export default function user_Reducer(state = initialState, action){
    switch (action.type) {
        case GET_ACTIVE_USER:
        return {
            ...state
        }
            
        case GET_ALL_USERS: 
        return Object.assign({}, state)
        
        default:
            return state 
    }
}