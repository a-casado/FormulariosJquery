$(document).ready(function(){
    CapturaEventos();
    $("#Enviar").css("opacity", "0.5");
    $("#Enviar").css("cursor", "default");
});


function CapturaEventos() { //funcion para contar el tiempo
    $("#Nombre").focus(function detectarFoco(){
           $(this).addClass("foco");
    });
    $("#User").focus(function detectarFoco(){
           $(this).addClass("foco");
    });
    $("#DNI").focus(function detectarFoco(){
           $(this).addClass("foco");
    });
    $("#Email").focus(function detectarFoco(){
           $(this).addClass("foco");
    });
    $("#TxtCod").focus(function detectarFoco(){
           $(this).addClass("foco");
    });
    $("#Nombre").blur(function(){
           $(this).removeClass("foco");
           VerificaNombre(); 
    });
    $("#User").blur(function(){
           $(this).removeClass("foco");
           VerificaUser(); 
    });
    $("#DNI").blur(function(){
           $(this).removeClass("foco");
           VerificaDNI(); 
    });
    $("#Email").blur(function(){
           $(this).removeClass("foco");
           VerificaMail(); 
    });
    $("#TxtCod").blur(function(){
           $(this).removeClass("foco");
           VerificaTxtCod(); 
    });
    $("#TxtCod").keypress(function(e){
            var tCod = $("#TxtCod").val();

           //alert(String.fromCharCode(e.which));
           if(String.fromCharCode(e.which)<=9){
                setTimeout(function(){ $("#TxtCod").val("x"); }, 10);
            }
    });
    $("#Enviar").click(function(){
           Validar(); 
    });
    $("#Enviar").mouseover(function(){
           habilitacionBtn(); 
    });
}

function VerificaNombre() {
    var campoNombre = $("#Nombre").val();
    var ExpRegNombre = /.{1,} .{1,} .{1,}/;
    if($("#Nombre").val() == ""){
        $("#Mensaje1").val("El campo esta vacio");
        nombreVerifica = false;
        $("#Nombre").css("background-color", "#ff8080");
    }else{
        $("#Mensaje1").val("Validando...");
        nombreVerifica = true;
        if(ExpRegNombre.test(campoNombre)){
            $("#Mensaje1").val("El nombre valida.");
            $("#Nombre").css("background-color", "#80ffaa");
        }else{
            $("#Mensaje1").val("No valida. Introduce nombre y apellidos.");
            nombreVerifica = false;
            $("#Nombre").css("background-color", "#ff8080");
        }
    }
}

function VerificaUser() {
    var campoUser = $("#User").val();
    var ExpRegUser = /.{3,5}/;
    if($("#User").val() == ""){
        $("#Mensaje2").val("El campo esta vacio");
        userVerifica = false;
        $("#User").css("background-color", "#ff8080");
    }else{
        $("#Mensaje2").val("Validando...");
        userVerifica = true;
        if(campoUser.length==3||campoUser.length==4||campoUser.length==5){
            $("#Mensaje2").val("El usuario valida.");
            $("#User").css("background-color", "#80ffaa");
        }else{
            $("#Mensaje2").val("No valida. Introduce entre 3 y 5 letras.");
            userVerifica = false;
            $("#User").css("background-color", "#ff8080");
        }
    }
}

function VerificaDNI() {
    var campoDNI = $("#DNI").val();
    var ExpRegDNI = /^(([A-Z]\d{8})|(\d{8}[A-Z]))$/;
    if($("#DNI").val() == ""){
        $("#Mensaje3").val("El campo esta vacio");
        dniVerifica = false;
        $("#DNI").css("background-color", "#ff8080");
    }else{
        $("#Mensaje3").val("Validando...");
        dniVerifica = true;
        if(ExpRegDNI.test(campoDNI)){
            $("#Mensaje3").val("El DNI valida.");
            $("#DNI").css("background-color", "#80ffaa");
        }else{
            $("#Mensaje3").val("El DNI no valida.");
            dniVerifica = false;
            $("#DNI").css("background-color", "#ff8080");
        }
    }
}


function VerificaMail() {
    var campo_email = $("#Email").val(); 
    var ExpRegEmail = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/; 
    if($("#Email").val() == ""){
        $("#Mensaje4").val("El campo esta vacio");
        mailVerifica = false;
        $("#Email").css("background-color", "#ff8080");
    }else{
        $("#Mensaje4").val("Validando...");
        mailVerifica = true;
        if(ExpRegEmail.test(campo_email)){
            $("#Mensaje4").val("El correo electronico valida.");
            $("#Email").css("background-color", "#80ffaa");
        }else{
            $("#Mensaje4").val("El correo electronico no valida.");
            mailVerifica = false;
            $("#Email").css("background-color", "#ff8080");
        }
    }
}

function VerificaTxtCod() {
    var campoTxtCod = $("#TxtCod").val(); 
    var ExpRegTxtCod = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/; 
    if($("#TxtCod").val() == ""){
        $("#Mensaje5").val("El campo esta vacio");
        mailVerifica = false;
        $("#TxtCod").css("background-color", "#ff8080");
    }else{
        $("#Mensaje5").val("Validando...");
        mailVerifica = true;
        if(ExpRegTxtCod.test(campoTxtCod)){
            $("#Mensaje5").val("El correo electronico valida.");
            $("#TxtCod").css("background-color", "#80ffaa");
        }else{
            $("#Mensaje5").val("El correo electronico no valida.");
            mailVerifica = false;
            $("#TxtCod").css("background-color", "#ff8080");
        }
    }
}

function Validar() {
    if(mailVerifica=true&&dniVerifica==true&&nombreVerifica==true&&userVerifica==true){
        $("#Enviar").mouseover(function(){
            $("#Enviar").css("opacity", "1");
        });
        //$("#Enviar").css("opacity", "1");
        alert("El boton esta activo.");
    }else{
        alert("El boton esta deshabilitado.");
    }
}

function habilitacionBtn() {
    if(mailVerifica=true&&dniVerifica==true&&nombreVerifica==true&&userVerifica==true){
            $("#Enviar").css("opacity", "1");
            $("#Enviar").css("cursor", "pointer");
    }
}


