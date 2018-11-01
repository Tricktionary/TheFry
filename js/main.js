$(document).ready(function(){
    
    var fileUpload = $("#fry_file");
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    
    $("#submit").click(function(){
        $("#fry_file").click();
         
    })
})