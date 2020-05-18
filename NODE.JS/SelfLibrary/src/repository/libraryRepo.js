var mySql = require('mysql');
var databaseConnectionMap = require('../config/dbConfig')
var repoQueries = require('../repository/dao/repoQueries');
var payLoadGenerator = require('../models/libraryModel');
var validation = require('../validation/libraryValidation')

var connection=mySql.createConnection({
  user : databaseConnectionMap.USER,
  password : databaseConnectionMap.PASSWORD,
  host : databaseConnectionMap.HOST,
  database : databaseConnectionMap.DATABASE  
})

var getCallDataList=[];

exports.getAll=(req, res)=>{
  console.log("GET CALL REVEIVED ");
  var filterList =  createFilterArray(req);
  connection.query(repoQueries.QUERIES.getAllQuery(req.query), filterList, (err,data)=>{
    if(err){
     return res.status(500).send({
        message:
          err.message || "Some error occurred while accessing Library"
      })
    }
    else if(!data){
     return res.status(404).send({
        message:
          "No Books Available"
      });
    }
    getCallDataList.push(data);
    return res.send(data);
  })
}

exports.createBookInLibrary=(req, res)=>{
  validation(req, res);
  var payLoad = payLoadGenerator(req.body);
  connection.query(repoQueries.QUERIES.createQuery, payLoad, (err, result)=>{
    if(err){
      console.log("/*/*/ ", err);
    }
    else{
      console.log("------ ", result)
      return res.send(result)
    }
  })
}

exports.findBookById=(req, res)=>{
  console.log("req.param.bookId ", req.params.bookId)
  connection.query(repoQueries.QUERIES.findByIdQuery + req.params.bookId, (err, result)=>{
    if(err){
      console.log("/*/*/ ", err);
    }
    else{
      if(result.length>0){
        return res.send(result)
      }
      else{
        return res.status(404).send({
          message: "Required Book with id : " + req.params.bookId + " is not found!"
        })
      }
      
    }
  })

}

const createFilterArray=(request)=>{
  var filterList = [];
  if(request.query.bookName){
    filterList.push(request.query.bookName)
  }
  if(request.query.authorName){
    filterList.push(request.query.authorName)
  }
  if(request.query.publisherName){
    filterList.push(request.query.publisherName)
  }
  return filterList;
  
}
exports.getCallDataList = getCallDataList
