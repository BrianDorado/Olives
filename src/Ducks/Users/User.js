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

export default function user_Reducer(state = initialState, action){
    switch (action.type) {
        case value:
            
            break;
    
        default:
            return state 
    }
}