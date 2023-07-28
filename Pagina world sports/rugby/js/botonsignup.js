

function logout(){
    var mensaje = ("¿Estas seguro que deseas cerrar sesion?");
var confirmacion = confirm(mensaje);
 if(confirmacion){
    localStorage.removeItem("Usuario");
window.location.href=("./index.html")

 }


}