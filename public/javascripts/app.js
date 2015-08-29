$(document).ready(function(){
    //setInterval(function(){
    //    console.log('test');
    //    $( '#loading' ).toggle('pulsate', function(){
    //        $('#loading').show();
    //    });
    //    //$('#loading').show();//.addClass('broken');
    //}, 2000);

    //$('#loading').toggleClass('loadingMsg');
    //
    //    setInterval(function(){
    //
    //        $('#loading').toggle('pulsate',500,function(){
    //            $('#loading').removeAttr('style');
    //            $('#loading').toggleClass('loadingMsg');
    //            $('#loading').toggleClass('broken');
    //        });
    //        //$('#loading').addClass('broken');
    //
    //    },2000);
    //
    //$('#loading').toggleClass('loadingMsg');

    setInterval(function(){

        $('#lo').toggle('pulsate',500,function(){
            $('#lo').removeAttr('style');
            $('#lo').toggleClass('loadingMsg');
            $('#lo').toggleClass('broken');
        });
        //$('#loading').addClass('broken');

    },2000);

    setInterval(function(){

        $('#ing').toggle('pulsate',500,function(){
            $('#ing').removeAttr('style');
            $('#ing').toggleClass('loadingMsg');
            $('#ing').toggleClass('broken');
        });
        //$('#loading').addClass('broken');

    },3000);
        //$('#loading').show();//.addClass('broken');


});