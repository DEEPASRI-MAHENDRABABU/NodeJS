const fs=require('fs');

console.log("1.Customer places the order");

fs.readFile('./files/menu.txt' , (err,data)=>{
    if(err){
        console.log("error");
    } else{
    console.log("4. chef reads the menu and prepare the food");
    }

    console.log("5. Waiter serves the food to the customer");
});



// Timers
setTimeout(() => {
    console.log("3. Waiter serves drinks while the chef is preparing the dish");
  }, 0);
  console.log("2. Cashier takes payment");

