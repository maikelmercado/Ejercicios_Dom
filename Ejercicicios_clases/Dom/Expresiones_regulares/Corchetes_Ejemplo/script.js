//[abc]: Sólo se obtienen los caracteres definidos entre corchetes.
const patron = /[abc]/gim;
const texto = 'a b c '; console.log(texto.match(patron));

(3)["a", "b", "c"]

//[^xyz]: 
//Encuentra cualquier caracter que no coincida con los caracteres al interior de los corchetes:
const patron = /[^xyz]/gim; const texto = 'a y c x ';
console.log(texto.match(patron));
(2)["a", "c"]

//a-zA-Z]: 
//Encuentra cualquier carácter entre los rangos de la letra a hasta la z y desde A hasta Z. Es decir, 
//válida cualquier carácter que sea una letra. Por ejemplo, con el siguiente código:
const patron = /[a-zA-Z]/gim;
const texto = 'todo a excepcion del numero 1'; console.log(texto.match(patron));
(23)["t", "o", "d", "o", "a", "e", "x", "c", "e",
    "p", "c", "i", "o", "n", "d", "e", "l", "n", "u",
    "m", "e", "r", "o"]