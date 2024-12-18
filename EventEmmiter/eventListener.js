const EventEmmiter=require('events');

var eventEmmiter= new EventEmmiter();

var fun1=(msg)=>{
    console.log("Msg from fun1:" +msg);

}
var fun2=(msg)=>{
    console.log("Msg from fun2 :" +msg);
}
eventEmmiter.on('myEvent',fun1);
eventEmmiter.once('myEvent',fun2); // once and on are used for same if you use once it will trigger the Listener once 
//Remove Event
eventEmmiter.removeListener('myEvent',fun1); //Removing fun1
//emit
 
eventEmmiter.emit('myEvent','Event occured');

eventEmmiter.removeAllListeners('Myevent'); // Removing all Listener 

eventEmmiter.emit('myEvent','event occured');

