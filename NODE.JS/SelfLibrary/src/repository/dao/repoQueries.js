
 exports.QUERIES={
    getAllQuery : (queryParams)=>{
      var baseQuery = "SELECT * FROM library"
      if(queryParams.bookName){
         baseQuery = baseQuery + " WHERE bookName=?"
      }
      if(queryParams.authorName){
         if(baseQuery.includes("WHERE") === true){
            baseQuery = baseQuery + " AND authorName=?"
         }
         else{
            baseQuery = baseQuery + " WHERE authorName=?"
         }
      }
      if(queryParams.publisherName){
         if(baseQuery.includes("WHERE") === true){
            baseQuery = baseQuery + " AND publisherName=?"
         }
         else{
            baseQuery = baseQuery + " WHERE publisherName=?"
         }
      }
      console.log("baseQuery ", baseQuery)
      return baseQuery;
    },
    createQuery: "INSERT INTO library SET ?",
    findByIdQuery: "SELECT * FROM library where bookId="
 };

