//Code to toggle the highlights information //

$(document).ready(function(){
    $('#btn-1').on('click' , function(){
        $('#highlight-1').toggle();
    })

    $('#btn-2').on('click' , function(){
        $('#highlight-2').toggle();
    })

    $('#btn-3').on('click' , function(){
        $('#highlight-3').toggle();
    })

    $('#btn-4').on('click' , function(){
        $('#highlight-4').toggle();
    })

    $('#btn-5').on('click' , function(){
        $('#highlight-5').toggle();
    })

    $('#btn-6').on('click' , function(){
        $('#highlight-6').toggle();
    })

});

//Code to show Areas section// 

function toggle(id) {
    var toggleArea = document.getElementById(id).style.display;
    if (toggleArea == 'block') {
        document.getElementById(id).style.display = 'none';
    } else {
        document.getElementById(id).style.display = 'block';
    }
}


//Code to display Hints section//

$(document).ready(function(){

    $('#tips-btn').on('click', function(){
        $('#hidden-hints').toggle();
    })
});