$(document).ready(function(){

    //Initial Draw
    $("#brightness_value").text($("#brightness").val());
    $("#contrast_value").text($("#contrast").val());
    $("#saturation_value").text($("#saturation").val());
    $("#sharpen_value").text($("#sharpen").val());
    $("#noise_value").text($("#noise").val());
    

    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    var img = new Image();
    var image;
    
    $("#download").click(function(){
        var image = canvas.toDataURL("image/jpg");
        $("#download").attr('href',image);
    })
    //Opens File Modal
    $("#submit").click(function(){
        $("#fry_file").click();
    });

    //Upload The File to the canvas 
    $("#fry_file").change(function(event){
        var files = event.target.files;
        image = files[0];
        uploadPicture(image)
    });

    //Fries Picture
    $("#fry_button").click(function(){
        /* Pull Values */
        var brightness = $("#brightness").val();
        var contrast = $("#contrast").val();
        var saturation = $("#saturation").val();
        var sharpen = $("#sharpen").val();
        var noise = $("#noise").val();

        Caman('#canvas', function () {
            this.brightness(brightness);
            this.contrast(contrast);
            this.saturation(saturation);
            this.sharpen(sharpen);
            this.noise(noise);
            this.render();
        });
    });

    //Changes Text Value
    $("input").change(function(){
        $("#brightness_value").text($("#brightness").val());
        $("#contrast_value").text($("#contrast").val());
        $("#saturation_value").text($("#saturation").val());
        $("#sharpen_value").text($("#sharpen").val());
        $("#noise_value").text($("#noise").val());
    })

    //Reset The Image
    $("#reset_button").click(function(){
        Caman("#canvas",function(){
            this.reset();
        });
        $("#brightness").val(0);
        $("#contrast").val(0);
        $("#saturation").val(0);
        $("#sharpen").val(0);
        $("#noise").val(0);
        $("#brightness_value").text($("#brightness").val());
        $("#contrast_value").text($("#contrast").val());
        $("#saturation_value").text($("#saturation").val());
        $("#sharpen_value").text($("#sharpen").val());
        $("#noise_value").text($("#noise").val());
    })
    
    //Upload Image to Canvas
    function uploadPicture(image){
        if(image.type.match("image.*")){
            $("#editArea").removeClass("hidden");
            $("#editToggle").removeClass("hidden");
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
    }
})