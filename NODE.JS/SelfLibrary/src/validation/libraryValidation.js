const getAllCall = require('../repository/libraryRepo')

const validateLibraryRequest =  (req, res) =>{ 
    var dateOfPublish = new Date(req.body.dateOfPublish);
    if(dateOfPublish > new Date()){
        console.log(" BAD REQUEST: DATE OF PUBLISH IS IN FUTURE");
        return res.status(400).send({
          message : "DATE OF PUBLISH IS IN FUTURE"
        })
      }

     // console.log("getAllCall ", getAllCall.getCallDataList);
    //   var existingBookList =  getAllCall.getCallDataListMethod();
    //   console.log("EXISTING LIST : ",  getAllCall.getCallDataListMethod());
    
}

module.exports=validateLibraryRequest;