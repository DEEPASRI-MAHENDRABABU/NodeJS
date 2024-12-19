const auth=require('./auth');

console.log(auth.register('Deepasri' , 'Deepa')); //Adding user

console.log(auth.register('Deepa2' , 'password123')); //Adding user

console.log(auth.register('Deepa2' , 'password123')); // User already exist

console.log(auth.getAllUsers());

console.log(auth.login('Deepasri' , 'Deepa'));

console.log(auth.login('Deepasri' , 'Deepa213'));
