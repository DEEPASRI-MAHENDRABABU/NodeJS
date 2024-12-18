const mathOps =require('./mathOps');

var a=10;
var b=40;
const resultAdd=mathOps.add(a,b);
const resultSub=mathOps.sub(a,b);
const resultMul=mathOps.mul(a,b);
const resultDiv=mathOps.div(a,b);

console.log("Addition :" +resultAdd);
console.log("Subtraction: " +resultSub );
console.log("Multiplication " +resultMul);
console.log("Division " +resultDiv);






