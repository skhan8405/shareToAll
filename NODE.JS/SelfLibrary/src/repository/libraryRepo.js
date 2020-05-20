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
    return res.send(data);
  })
}

exports.createBookInLibrary=(req, res)=>{
  console.log("RECIEVED REQUEST FOR CREATING BOOK WITH NAME ", req.body.bookName)
  validation(req, res);
  var payLoad = payLoadGenerator(req.body);
  connection.query(repoQueries.QUERIES.createQuery, payLoad, (err, result)=>{
    if(err){
      res.status(500).send({
        message: "SOME SQL PROBLEM In creating book in LIBRARY"
      })   
     }
    else{
      return res.send(result)
    }
  })
}

exports.findBookById=(req, res)=>{
  console.log("GET REQUEST RECEIVED FOR BOOK WITH ID : ", req.params.bookId)
  connection.query(repoQueries.QUERIES.findByIdQuery + req.params.bookId, (err, result)=>{
    if(err){
      res.status(500).send({
        message: "SOME SQL PROBLEM In GETTING book in LIBRARY with id " + req.params.bookId
      })
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

exports.deleteBookById=(req, res)=>{
  connection.query(repoQueries.QUERIES.deleteByIdQuery + req.params.bookId , (err, data)=>{
    if(err){
      res.status(500).send({
        message : err.message ||
           "Database Problem in Deleting Book with id : " + req.params.bookId
      })
    }      
    if(data.affectedRows === 1){
      return res.send(data);
    }
    else{
      res.status(404).send({
        message: "Required Book TO BE DELETED with id : " 
        + req.params.bookId + " is not found!" 
      })
    }
  });
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
