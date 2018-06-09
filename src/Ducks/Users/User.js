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

export default function user_Reducer(state = initialState, action){
    switch (action.type) {
        case value:
            
            break;
    
        default:
            return state 
    }
}