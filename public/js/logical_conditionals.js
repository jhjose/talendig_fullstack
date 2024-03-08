// VARIABLES
let value1;
let value2 = 150;
let result;
let age_student = 19;
let message_is_up_18 = 'El estudiante es mayor a 18';
let message_is_down_18 = 'El estudiante es menor a 18';

// CONDITIONALS VARIABLES
const result_age = age_student > 18 ? message_is_up_18 : message_is_down_18;
const result_age2 = age_student > 18 ?? true;
const result_age3 = age_student > 18;

// CONDITIONALS: IF, ELSE, ELSE IF
if(age_student > 18){
    //console.log('Es mayor a 18 años');
}

/* ---------- SWITCH CONDITIONS ----------- */
switch(value2){
    case 100:
        alert(value2);
    break;
    case 200:
        alert(value2);
    break;
    default:
        alert(value2);
    break;
}

// COMILLAS SIMPLES Y DOBLES
//let result2 = value2 * value1;
//let result_example3 = `${result2} es el resultado ideal para el cliente. Sin embargo el primer resultado ${value1} es el que el cliente prefiere`;
//let result_example2 = result2 + " es el resultado" + " ideal para el cliente. Sin embargo el primer resultado " + value1 + " es el que el cliente prefiere";


/* ---------- FUNCTIONS --------------- */
function sum(value1, value2){
    return value1 + value2;
}

function rest(value1, value2){
    return value1 - value2;
}

function mult(value1, value2){
    return value1 * value2;
}

function div(value1, value2){
    return value1 / value2;
}

// -------- ARROW FUNCTIONS ---------------
const division = (value1, value2)=>{
    return value1 / value2;
}

result = `El resultado es ${division(365, 115)}`;

//alert(result);


