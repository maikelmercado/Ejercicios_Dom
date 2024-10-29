

document.getElementById("textoSaludo").innerHTML = "Este Parrafo fue modificado";


//entrada uno
//  <input value="Correo Electronico" id="entradaUno" type="email"/>
document.getElementById("entradaUno").value = "Click aqui para hacer hackeado";

//cambio el type a buton
document.getElementById("entradaUno").type = "button";

//cambiar o definir un atributo
document.getElementById("entradaUno").setAttribute("style","color:red;background-color:yellow");
document.getElementById("entradaUno").setAttribute("href",'http://www.google.cl');
document.getElementById("entradaUno").setAttribute("onclick","window.location.href = 'http://www.google.cl'");
document.getElementById("entradaUno").setAttribute("onmousemove", "alert('click para ");