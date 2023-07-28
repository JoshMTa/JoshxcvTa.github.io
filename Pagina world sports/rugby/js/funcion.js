this.logueado = false;

$("#Entrar").click(function(){
       
    if($("#Usuario").val() == "Cristiano" && $("#Contraseña").val() == 'Cr7'){
        logueado = true;
       if(logueado == true){
         // Swal.fire('Bienvenido');
window.location = './Bienvenidacr7.html'

        }
    }
   else{
        Swal.fire('Error de usuario');
    }

 

    
    if($("#Usuario").val() == "Neymar" && $("#Contraseña").val() == 'Jr'){
        logueado = true;
       if(logueado == true){
           //  Swal.fire('Bienvenido');
window.location = './Bienvenidaney.html'
        }
    }
   else{
        Swal.fire('Error de usuario');
    }

       
    if($("#Usuario").val() == "Messi" && $("#Contraseña").val() == 'Goat'){
        logueado = true;
       if(logueado == true){
           //  Swal.fire('Bienvenido');
window.location = './Bienvenida.html'
        }
    }
   else{
        Swal.fire('Error de usuario');
    }
});
 

 