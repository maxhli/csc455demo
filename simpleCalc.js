/* arithmetic calculation */

function AaronAddition (p1, p2) {
//added functionality
return p1 + p2;
}
/*This is mine*/
function JamesSubtraction (p1, p2) {

return p1 - p2;
}


function CodyMultiplication (p1, p2) {

return p1 * p2;

  
}


function TomDivision (p1, p2) {
if(p2 === 0) {
 return "ERROR: Divide by zero. Please enter a non-zero number for the second argument";
}
return p1 / p2;
}


console.log(AaronAddition (40, 40));
console.log(JamesSubtraction (40, 40));
console.log(CodyMultiplication (40, 40));
console.log(TomDivision (40, 40));
