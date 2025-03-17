const express = require('express');
const app = express ();
app.use(express.json());

const PORT = 3000;

app.get("/whoami", (request,response) => {
    const studentnumber = {
        "Studentnumber" : "2562730"
    };
    response.send(studentnumber);
});

let books =[];

app.get("/books", (request,response) => {
    response.json(books)
});

app.get("/books/:id", (request, response) => {
    const { id } = request.params;
    if(!id){
        response.status(404).json({error: "Not Found" })
    }
    response.json(book);
});

app.post("/books", (request, response) => {
    const {id, title, details } = request.body;

    if (!id || !title || !details ){
        return response.status(400).json({error: "Missing required book details"})
    }
    response.json(book)

    const newBook = {
        id: books.length +1,
        title: request.body.title,
        details: request.body.details,

    }
    books.push(newBook);

});

app.put("/books/:id", (request, response) => {
    const findBook = books.findIndex(b => b.id === parseInt(request.params.id));
    if(!id){
        response.status(404).json({message: "Not Found" })
    }
    book.title = request.book.title || book.title,
    book.details = request.book.details || book.details,

    response.json(book);

 });

 app.delete("/books/:id", (request, response) => {
    const findBook = books.findIndex(b => b.id === parseInt(request.params.id));
    if (findBook === -1) return response.status(404).json({
        message: "Not Found"
    });
    books.splice(findBook,1);
    response.json({
        message: "Book Deleted"
    })
 });

 app.post("/books/:id/details", (request, response)=>{
    const findBook = books.findIndex(b => b.id === parseInt(request.params.id));
    if (findBook === -1) return response.status(404).json({
        message: "Not Found"
    });

    const newDetails= {
        details: request.body.details
    }

    if (!details.id || !details.author || !details.genre || !details.publicationYear){
        return response.status(400).json({error: "Missing required book details"});
    }
    books.push(newDetails);
});

app.delete("/books/:id/details/:detailId", (request, response)=>{
    const findBook = books.findIndex(b => b.id === parseInt(request.params.id));
    const findDetail = books.details.findIndex(d=> d.id === parseInt(request.params.detailId));
    
    if(findDetail === -1){
        return response.status(404).json({ message: 'Detail not found'});
    
    }
    book.details.splice(findDetail,1)
    response.json(book);

});

app.listen(PORT,()=> {
    console.log(`Running on https:localhost${PORT}`);
});