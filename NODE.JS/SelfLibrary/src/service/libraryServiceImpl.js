var libraryRepo = require('../repository/libraryRepo')

exports.findAll=(req, res)=>{
  var responseArray = libraryRepo.getAll(req, res);
  return responseArray;
}

exports.findOne=(req, res)=>{
  var responseLibraryObject = libraryRepo.findBookById(req, res);
  console.log("responseLibraryObject ",responseLibraryObject);
} 

exports.create=(req, res)=>{
  return libraryRepo.createBookInLibrary(req, res);
}

exports.update=()=>{

}

exports.delete=()=>{

}