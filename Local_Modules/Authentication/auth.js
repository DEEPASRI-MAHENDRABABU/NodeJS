var users=[];

function register(username,password){
    const existingUser=users.find(user=>user.username===username);
    if(existingUser){
        return 'User Already exist';
    }
const newUser={username,password};
users.push(newUser);
return 'successfully added you!!';
}

function login(username,password){
    const user=users.find(user=>user.username===username);
    if(!user){
        return 'user not found';
    }
    if(user.password===password){
        return 'Login successfull!!';
    }
    return 'incorrect password';
}

function getAllUsers(){
    return users;
}

module.exports={register,login,getAllUsers};
