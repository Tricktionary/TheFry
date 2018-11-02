$(document).ready(function(){
    
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var img = new Image();

    //Opens File Modal
    $("#submit").click(function(){
        $("#fry_file").click();
    })

    //Upload The File to the canvas 
    $("#fry_file").change(function(event){
        var files = event.target.files;
        var image = files[0];
        if(image.type.match("image.*")){
            $("#editArea").removeClass("hidden");
            var reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = function(evt){
                if( evt.target.readyState == FileReader.DONE) {
                    img.src = evt.target.result;
				    img.onload = () => ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
                        0, 0, canvas.width, canvas.height);
			    }
            }
        }   
        else{
            alert("not an image");
        }
    })
})