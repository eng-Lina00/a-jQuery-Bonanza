$(document).ready(function(){
    $('#fadeOutBtn').click(function(){
        $('#fadeText').fadeOut(1000);
    })

    $('#fadeInBtn').click(function(){
        $('#fadeText').fadeIn(1000);
    })

    $('#hideBtn').click(function(){
        $('#fadeText').hide();
    })

    $('#showBtn').click(function(){
        $('#fadeText').show();
    })

    $('#appendBtn').click(function(){
        $('#appendText').append('Append some text...');
    })
 
    $('#changeColorBtn').click(function(){
        $('#changeThecolor').css('color', 'green');
    })
})
