let form = document.getElementById("formulario");

form.addEventListener("submit",login);


function login(event){
    event.preventDefault();
    let email =  document.querySelector(".email").value;
    let password =  document.querySelector(".password");
    document.querySelector(".resultado").innerHTML = 'Bienvenido ${email}';

}