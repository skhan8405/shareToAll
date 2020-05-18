function getAllDataReducer(state, receiver){
    console.log("state in getAllDataReducer", state);
    console.log("receiver in getAllDataReducer ", receiver);
    switch(receiver.type){
       case "GET_ALL_SUCCESS": return receiver.value;
       case "GET_ALL_FAILED" : return receiver.value;
       default: return []
    }
}

export default getAllDataReducer