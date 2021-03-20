//Code to toggle the highlights information //

$(document).ready(function(){
    $('#btn-1').hover(function(){
        $('#highlight-1').show(1000);
    })

    $('#btn-2').hover(function(){
        $('#highlight-2').show(1000);
    })

    $('#btn-3').hover(function(){
        $('#highlight-3').show(1000);
    })

    $('#btn-4').hover(function(){
        $('#highlight-4').show(1000);
    })

    $('#btn-5').hover(function(){
        $('#highlight-5').show(1000);
    })

    $('#btn-6').hover(function(){
        $('#highlight-6').show(1000);
    })

});


// Code to dropdown list - (help from https://www.w3schools.com/howto/howto_js_dropdown.asp)// 

// function dropContent(){
//     document.getElementById('myDropdown').classList.toggle('show');
// }

// window.onclick = function(event){
//     if (!event.target.matches('.dropbtn')) {
//         var contentdrop = document.getElementsByClassName('.dropdown-content');
//         var i;
//         for(i = 0; i < contentdrop.length; i++){
//             var openContent = contentdrop[i];
//             if (openContent.classList.contains('show')){
//                 openContent.classList.remove('show');
//             }
//         }
//     }
// };

