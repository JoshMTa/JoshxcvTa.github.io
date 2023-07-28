function login()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
var storedpassword = localStorage.getItem(username);

    if(storedpassword === null)
    {
        document.getElementById('message').innerHTML ='usuario no existe';
        
    }
    else if(password=== storedpassword) {
        document.getElementById('message').innerHTML='Sesion exitosa';
        window.location.href = 'p.html';

    }
    else{
        document.getElementById('message').innerHTML='contra incorrecta'
    }






}