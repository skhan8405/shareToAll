const getAllCall = require('../repository/libraryRepo')
var mySql = require('mysql');
const REPO_QUERIES = require('../repository/dao/repoQueries')
const mySqlCredentialsMap = require('../config/dbConfig')

var connection = mySql.createConnection({
  password: mySqlCredentialsMap.PASSWORD,
  host: mySqlCredentialsMap.HOST,
  user: mySqlCredentialsMap.USER,
  database: mySqlCredentialsMap.DATABASE
})


const validateLibraryRequest =  (req, res) =>{ 
    var dateOfPublish = new Date(req.body.dateOfPublish);
    if(dateOfPublish > new Date()){
        console.log(" BAD REQUEST: DATE OF PUBLISH IS IN FUTURE");
        return res.status(400).send({
          message : "DATE OF PUBLISH IS IN FUTURE"
        })
      }
      getAllExistingBooks(req, res);
}

const getAllExistingBooks=  (req, res)=>{
   var noOfBooksInLib;
connection.query(REPO_QUERIES.QUERIES.getAllQuery({}),  (err, data)=>{
    if(err || !data){
      return [];
    }
      noOfBooksInLib = data.reduce((c, { bookName: key }) =>
       (c[key] = (c[key] || 0) + 1, c), {});
      if(noOfBooksInLib[req.body.bookName] > 10){
        console.log("ERROR")
        return res.status(400).send({
          message : "BOOKS COUNT EXCEEDED FOR " + req.body.bookName,
          existingBooksCount : noOfBooksInLib[req.body.bookName]
        })
      }
  })
}

module.exports=validateLibraryRequest;