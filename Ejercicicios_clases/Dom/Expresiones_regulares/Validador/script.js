
let buscar = document.getElementById("buscar");
buscar.addEventListener('click', validar);

function validar(){
    let animal = document.querySelector(".animal").value; 
    let patron1 = /gato/i; //expresion regular, 
    let patron2 = /perro/i; //acepta todo sin excepcion de mayusculas y minusculas
    if (animal.match(patron1) || animal.match(patron2)){ //propiedad match 
          alert("Palabra ingresada permitida");
          //si es verdaddero arrojara una alerta 
       } else {
          alert("La palabra ingresada no es permitida");
          //si no no hara nada else definiera la condicion de que si no se cumple, hara algo
       }
    };

  