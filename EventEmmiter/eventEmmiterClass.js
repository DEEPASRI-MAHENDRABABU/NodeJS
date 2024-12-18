const EventEmmiter=require('events');

var eventEmmiter = new EventEmmiter();

eventEmmiter.on('myEvent', function fun1(msg){
    console.log("Message from fun1:" + msg);
}

)
eventEmmiter.on('myEvent',function fun2(msg){
    console.log("Message from fun2:" + msg);
})
//Triggerd myEvent
eventEmmiter.emit('myEvent',"Event occured");


