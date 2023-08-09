document.addEventListener("DOMContentLoaded", function(){

    function showAlertSuccess() {
        let sucessAlert = document.getElementById("alert-success").classList.add("show");
        foreach()
    }
    
    function showAlertError() {
        let Alert = document.getElementById("alert-danger").classList.add("show");
    }
    
    let form = document.getElementById("formulario");

    form.onsubmit = function(event) {
        event.preventDefault();
        const pass1 = document.getElementById("password1").value;
        const pass2 = document.getElementById("password2").value;

        if(pass1 !== pass2)
        {
            showAlertError();
        }else{
            showAlertSuccess();
        }
    };


})
