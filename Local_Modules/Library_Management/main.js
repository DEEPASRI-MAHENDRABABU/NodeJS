const library= require('./library');

console.log('All books : ', library.getAllBooks());

const newBook=library.addBooks('The great gatsy','F.S.Scott');
console.log('Adding a new book :' ,newBook );

const bookById=library.findBookById(2);
console.log("Book by Id :" , bookById);

const removedBook=library.removeBook(1);
console.log('REmoved Book :' ,removedBook);

console.log("updated Books : " ,library.getAllBooks());

