let fruits = ["Banana", "Pear", "El Mango está muy bueno", "Uva", "Pera", "Chinola", "Kiwi"];

// Agregar valor al principio de la matriz
fruits.unshift("Melocotón");

// Agregar valor al final de la matriz
fruits.push("Fresa");

// forEach para recorrer todos los elementos del Array (Matriz)
fruits.forEach(function(element, indice){

    //findFruit(element);

    if(indice === 0){
        fruits.push("Plátano");
    }else{
        fruits.unshift("Ciruela");
    }

    //console.log("element.split('n')", element.split('n'))
});

//console.log('fruits: ', fruits)

function findFruit(value){
    console.log( value.search('Mango') );
}

console.log("fruits[2].search('Mango')", fruits[2].search('Chinola'))



// split, slice