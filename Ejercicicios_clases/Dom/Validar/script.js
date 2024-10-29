//boton

let miBtn = document.getElementById("boton");

miBtn.addEventListener("click", function(){
    let texto = document.querySelector(".input-a-buscar");

    //validacion, si input esta vacio o no 
if(texto.value != ""){
    document.querySelector(".resultado").innerHTML = "Estas buscando:"+texto.value

    }else{
        document.querySelector(".resultado").innerHTML = "Para Poder buscar debes ingresar un a palabra"

    }    
    });

    //!== estrictamente distinto
    //!= distinto
