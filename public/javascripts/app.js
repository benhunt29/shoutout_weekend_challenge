function displayShoutOuts(shoutOuts){
    $('#loadingMsg').remove();
    $('#topHeader').show();
    $('#shoutOutsPanel').show();

    var $shoutOutsDiv = $('#shoutOutsDiv');
    var $nameH1 = $shoutOutsDiv.children().first();
    var $shoutOut = $shoutOutsDiv.children().last();
    var studentNum = 1;
    var loopDirection = 1;
    $nameH1.text(shoutOuts[0].student);
    $shoutOut.text(shoutOuts[0].shoutOut);
    //$shoutOut.addClass('greenText');

    $shoutOutsDiv.toggle( "fade",2000).queue(function(){
        $shoutOutsDiv.animate({color:"red"},5000);
        $(this).dequeue();
    }).queue(function(){
        $shoutOutsDiv.effect( "puff",1000);
        $(this).dequeue();
    }).queue(function() {
        $shoutOutsDiv.animate({color:"green"},10);
        $(this).dequeue();
    });
    setInterval(function(){
        $nameH1.text(shoutOuts[studentNum].student);
        $shoutOut.text(shoutOuts[studentNum].shoutOut);
        $shoutOutsDiv.hide();
        $shoutOutsDiv.toggle( "fade",2000).queue(function(){
            $shoutOutsDiv.animate({color:"red"},5000);
            $(this).dequeue();
        }).queue(function(){
            $shoutOutsDiv.effect("puff",1000);
            $(this).dequeue();
        }).queue(function() {
            $shoutOutsDiv.animate({color:"green"},10);
            $(this).dequeue();
        });
        if (studentNum == 17) {
            loopDirection = -1;
        }else if(studentNum == 0){
            loopDirection = 1;
        }
        studentNum+=loopDirection;
    },8000);





}


$(document).ready(function(){
    $('#topHeader').hide();
    $('#shoutOutsDiv').hide();
    $('#shoutOutsPanel').hide();
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

    setTimeout(function(){
        var shoutOutsCall = $.ajax (
            {
                type: "GET",
                url: '/shoutOuts',
                dataType: 'json'
            });
        shoutOutsCall.done(function (res) {
            displayShoutOuts(res);
        });

        shoutOutsCall.always(function () {
            console.log("Ajax call complete!");
        });

        shoutOutsCall.fail(function(res,req,err){
            console.log("Failed with error:",err);
        });
    },5000);

});