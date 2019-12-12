import * as Types from '../constants/UserActions';
import CallApi from './../utils/CallApi'


export const actUserRequest=()=>{
    return dispatch=>{
        
        return CallApi('user/getProfile', 'GET', null, {
            "x-timo-devicereg": "1494035533:WEB:WEB:83:chrome",
            'Content-Type': 'application/json',
            'token':localStorage.getItem('tokenTimo')
        })
        .then(res=>{
            dispatch(actGetUser(res.data))
        })
        .catch(err=>console.log(err))
    }
   
}
export const actGetUser = (user) => {
    return {
        type: Types.GET_USER,
        user
    }
}