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

switch(message_is_up_18){
    case 'El estudiante es mayor a 16':
        // No se cumple
        break;
    case 'El estudiante es mayor a 18':
        // Se cumple
        break;
    default: 
        // Si ninguno de los dos se cumple, se ejecuta este caso por defecto.
        break;
}

// COMILLAS SIMPLES Y DOBLES
//let result2 = value2 * value1;
//let result_example3 = `${result2} es el resultado ideal para el cliente. Sin embargo el primer resultado ${value1} es el que el cliente prefiere`;
//let result_example2 = result2 + " es el resultado" + " ideal para el cliente. Sin embargo el primer resultado " + value1 + " es el que el cliente prefiere";

const cal_result = `El estudiante tiene ${age_student} años y ${age_student + 10} trabajando en Talendig.`;

//alert(cal_result);


/* ---------- FUNCTIONS --------------- */
const calculator = {
    operation: '',
    tang: {
        run: (state)=>{
            // strict method
            switch(state){
                case 'on':
                    return true;
                break;
                case 'off':
                    return false;
                break;
                case 'none':
                    return false;
                break;
                case 'admin':
                    return true;
                break;
                default:
                    return false;
                break;
            }
/*
            if(state === 'on'){
                return true;
            } else if(state === 'off') {
                return false;
            }
            else if(state === 'none') {
                return false;
            }
            else if(state === 'admin') {
                return true;
            }
            else{
                return false;
            }
*/
        },
    },
    sum: (value1, value2)=>{

    },
    rest: function(value1, value2){

    },
    mult: (value1, value2)=>{

    },
}

console.log("calculator.tang.run('on')", calculator.tang.run('off'));

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


