//boton

let miBtn = document.getElementById("boton");

miBtn.addEventListener("click", function(){
    let texto = document.querySelector(".input-a-buscar");
    document.querySelector(".resultado").innerHTML = "Estas buscando:"+texto.value;
});