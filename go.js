$(document).ready(function(){
        $("#aceptar2").click(function(){
          $("#login_Suscripciones").submit();
        });

        $("#login_Suscripciones").validate({
            rules: {
                nombre: "required",
                apellidos: "required",
                email: {
                  required: true,
                  email: true
                },
                repiteEmail: {
                  required: true,
                  equalTo: "#email"
                },
                aceptarCondiciones: "required"
            },
            messages: {
                nombre: "Por favor escriba su nombre.",
                apellidos: "Por favor escriba sus apellidos.",
                email: {
                  required: "Por favor escriba un correo.",
                  email: "Por favor escriba un correo valido."
                },
                repiteEmail: {
                  required: "Por Favor escriba de nuevo su correo.",
                  equalTo: "Los correos no son iguales."
                },
                aceptarCondiciones: "Por favor aceptar la política de privacidad."
            },
            submitHandler: function() {
              $.ajax({
                url: "sistema/save_data.php", 
                dataType: "html",
                type:"POST",
                data: "action=guardarSuscripcion&"+$('#login_Suscripciones').serialize(),
                success: function (data) {
                  if(data == 0){
                    $(".alert_envio").fadeOut();
                    $(".alert_noenvio").fadeIn();
                    $(".limpiar").click();
                  }else{
                    $(".alert_noenvio").fadeOut();
                    $(".alert_envio").fadeIn();
                    $(".limpiar").click();
                  } 
                }
              });
            }
        });       
    });
