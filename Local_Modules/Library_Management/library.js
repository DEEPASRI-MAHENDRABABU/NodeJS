let books=[
    {id:1, title:'The Hobbit', author:'R.R.Tolkien'},
    {id:2, title:'1984', author:'George Orwell' },
    {id:3, title:'To kill a Moking Bird' , author : 'Harper lee'}
];

//Functions for all the books

function getAllBooks(){
    return books;
}

//Adding a new Book
function addBooks(title,author){
    const newBook={
        id :books.length+1,
        title :title,
        author :author
    };
    books.push(newBook);
    return newBook;

}
//To find a book by ID

function findBookById(id){
   return books.find(book=>book.id===id);

}

// To remove a particular book

function removeBook(id){
    const index= books.findIndex(book=>book.id===id);

    if(index!==-1){
        const removedBook=books.splice(index,1);
        return removedBook;
    }
    return null;
}

module.exports = {
    getAllBooks,
    addBooks,
    findBookById,
    removeBook



}


