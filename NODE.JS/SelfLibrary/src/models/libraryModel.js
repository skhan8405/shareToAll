const libraryModelFunc=(incomingRequest)=>{
    var payLoad={};
    Object.entries(incomingRequest).map((key, value) =>{
        payLoad[key[0]]=incomingRequest[key[0]];
    })
    return payLoad;
}   

module.exports=libraryModelFunc