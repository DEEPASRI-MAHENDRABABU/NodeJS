function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    if(b==0){
        return 'cannot divide by zero';
    }
    return a/b;
}

// exporting the functions to other file

module.exports={
    add,
    sub,
    mul,
    div
};