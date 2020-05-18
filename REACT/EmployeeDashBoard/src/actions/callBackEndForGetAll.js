import getAllData from '../api'
export default function callBackEndForCompleteData(url){
    return function(dispatch){
        var response= getAllData(url);
        response.then(result=>{
            if(result.status >=200 && result.status<=206 ){
                dispatch({type:"GET_ALL_SUCCESS", value:result.data});
            }
            else{
                dispatch({type:"GET_ALL_FAILED", value:[]});
            }
        })
    }
}