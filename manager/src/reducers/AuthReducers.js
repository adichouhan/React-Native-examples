import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from '../actions/types'
const INITIALSTATE={email:'' , password:'', user:null, error:'', loading:false};


export default (state=INITIALSTATE, action)=>{

    switch(action.type){

        case EMAIL_CHANGED:
            return {...state, email:action.payload}

        case PASSWORD_CHANGED:
            return {...state, password:action.payload}
        
        case LOGIN_USER_SUCCESS:
            return {...state, user:action.payload, loading:false, error:'', email:'', password:''}

        case LOGIN_USER:
            return {...state, loading:true, error:''}    
        
        case LOGIN_USER_FAIL:
            return {...state, error:'Authentication Failed'}    

        default:
            return state;
    }

}