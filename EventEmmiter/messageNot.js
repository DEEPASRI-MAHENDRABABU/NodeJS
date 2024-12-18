const EventEmmiter =require('events');

var notification = new EventEmmiter();

//We used the eventEmmiter for receiving a new message in a chat application

notification.on('newNotification',(message)=>{
   console.log('Notification:'+ message);
})
//emit notification
 notification.emit('newNotification','You received a new message')
