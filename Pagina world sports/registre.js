function register()
{
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;

if(localStorage.getItem(username))
{
document.getElementById('message').innerHTML = 'Este usuario ya posee una cuenta';
}
else {
localStorage.setItem(username, password);
document.getElementById('message').innerHTML ='Registro exitoso, vuelva para iniciar sesion'

}
}