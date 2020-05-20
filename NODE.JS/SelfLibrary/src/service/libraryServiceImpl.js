var libraryRepo = require('../repository/libraryRepo')

exports.findAll=(req, res)=>{
  var responseArray = libraryRepo.getAll(req, res);
  return responseArray;
}

exports.findOne=(req, res)=>{
  return libraryRepo.findBookById(req, res);
} 

exports.create=(req, res)=>{
  return libraryRepo.createBookInLibrary(req, res);
}

exports.update=()=>{


}

exports.delete=(req,res)=>{
  return libraryRepo.deleteBookById(req, res);
}