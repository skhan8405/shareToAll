const apiMethod= (app)=>{
const Library= require('../service/libraryServiceImpl')

app.get("/library", Library.findAll);

app.get("/library/:bookId", Library.findOne);

app.post("/library", Library.create);

app.put("/library/:bookId");

app.delete("/library/:bookId");

}

module.exports=apiMethod