const words = new Set(['casa', 'apartamento', 'terreno o solar']);

words.add('Comercial');

words.add('Hotel');

words.add('Villa');

words.has('apartamento');

words.delete('casa');


const obj = {counter: 0};

Object.defineProperty(obj, 'incremet', {
    get: function(){this.counter++}
});

Object.defineProperty(obj, 'debrement', {
    set: function(){this.counter--}
});