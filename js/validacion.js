document.addEventListener("DOMContentLoaded", function(){

    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }
    
    let form = document.getElementById("formulario");
    
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        if(pass1 == pass2)
        {
            showAlertSuccess();
        }else{
            showAlertError();
        }
    });

})

