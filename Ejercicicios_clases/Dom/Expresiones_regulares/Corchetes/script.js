let enviar = document.getElementById("enviar"); 
enviar.addEventListener('click',validar);

function validar(){
    let lugar = document.querySelector(".lugar").value; 
    //let permitido = /[a-zA-Z]/gim;// GIM = Global, Insencible, Multilinea
    let permitido = /^[a-zA-Z]+$/gim; //lo que esta dentro del eslash es el patron ^ lo que vamos a buscar al principio  a-z y el $ los finales  
    if (lugar.match(permitido)){
          alert("El texto ingresado es permitido");
       } else {
          alert("Solo debe ingresar caracteres alfabéticos");
       };
    };