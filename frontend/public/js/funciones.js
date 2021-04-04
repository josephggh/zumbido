//Funcion para ingresar solo numeros
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ( (charCode > 31 && charCode < 48) || charCode > 57) {
        return false;
    }
    return true;
}

//Funcion para ejecutar la consulta API
$("#ejecutar").click(function() {
    $.ajax({
        url : 'http://localhost:8080/index.php',
        data : { num : $("#num").val() },
        type : 'GET',
        dataType : 'json',
        success : function(data) {
            $("#respuesta").html("Numero: " + data.numero + "<br>Respuesta: " + data.zumbido);
            $("#respuesta").show();

        },
        error : function(xhr, status) {
            alert('Opss!, algo salio mal');
        }
    });
});