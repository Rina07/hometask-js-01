const a = parseFloat(prompt('Enter coef A'));
const b = parseFloat(prompt('Enter coef B'));
const c = parseFloat(prompt('Enter coef C'));

function calcD(a, b, c) {
    const d = b*b - 4*a*c;
    return d;
}
const d = calcD(a, b, c);
if (a !== 0) {
   calcD(d);
}
function solveX1(a, b, c) {
   const x1 = (-b + Math.sqrt(d))/(2*a);
   return x1;
}

function solveX2(a, b, c) {
   const x2 = (-b - Math.sqrt(d))/(2*a);
    return x2;
}

const x1 = solveX1(a, b, c);
if (a !== 0) {
    alert('x1 = ' +x1);
}

const x2 = solveX2(a, b, c);
if (a !== 0) {
    alert('x2 = ' +x2);
} 
