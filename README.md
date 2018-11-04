# DeepFry.exe
A web app that assist you in creating memes by deep frying the memes for you

![ScreenShot](https://github.com/Tricktionary/TheFry/blob/master/screenshot.PNG)

## Why?
I got sick of frying my own memes on Photoshop and wanted a quicker solution

## How does it work ?
The webpage is just a simple static html website. What happens when you want to want 
to fry an image is that it gets uploaded into a Canvas and the canvas get modified via 
[Caman](http://camanjs.com/).After filtration is applied it is downloaded via Canvas image 
conversion.

`
    $("#download").click(function(){
        var image = canvas.toDataURL("image/jpg");
        $("#download").attr('href',image);
    })
`

## How to run
It's a static website so you can run it by simply accessing the HTML file.

## TODO
- Update UI its very ugly at the moment
- Deploy the application to either Github Pages or Heroku

### Promo Code : JACKY15 @ any fry
