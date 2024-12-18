// Using clearInterval

let count=5;

console.log("countdown starts");

const timer=setInterval(()=>{
     if(count>0){
        console.log(count);
        count--;
     }
     else{
        console.log("Countdown Ends");
        clearInterval(timer);
     }
},1000)



