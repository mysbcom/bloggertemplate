$(function(){    
var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!   
    var yy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    }
        yy = yy.toString().substr(-2);


    var today = dd+mm+yy;
    $('a.link').each(function() {
        var url = $(this).attr('href');
        if (url.indexOf("?") >= 0) {
             $(this).attr("href",url+today+".PDF");  
        } else {
            $(this).attr("href",url+today+".PDF");  
        }
    });       
});
