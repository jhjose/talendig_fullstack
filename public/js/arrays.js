let fruits = ["Melocotón", "Banana", "Mango", "Uva", "Pera", "Chinola", "Kiwi", "Fresa"];
// --------------0----------1-------------2--------3------4--------5---------6--------7

// Agregar valor al principio de la matriz
//fruits.unshift("Melocotón");

// Agregar valor al final de la matriz
//fruits.push("Fresa");

// Recorrer elementos del Array 
for(let i = 0; i < fruits.length; i++){
    if(!i){
        fruits.push("Aguatate");
    }else{
        fruits.unshift("Sandía");
    }
}

// forEach para recorrer todos los elementos del Array (Matriz)
fruits.forEach(function(element, indice){
    if(indice === 0){
        fruits.push("Plátano");
    }else{
        fruits.unshift("Ciruela");
    }
});

//console.log('fruits: ', fruits)

function findFruit(value){
    console.log( value.search('Mango') );
}

//console.log("fruits[2].search('Mango')", fruits[2].search('Chinola'))

// split, slice