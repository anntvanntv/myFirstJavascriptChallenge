
const boto = document.querySelector('#botones');

const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');
/*
boto.addEventListener('click', myFunction);
*/

//var listas = document.getElementsByClassName('press');
//var listas = document.getElementsByTagName('button');

//Array.from(listas).forEach(function(icon, index, arr) {
 //console.log(icon, index, arr);
//});

//const arrList =  Array.from(listas)



var input = document.getElementById('boton-submit');



uno.addEventListener('click', function(e) {
  input.setAttribute('type', 'button');
  input.setAttribute('onclick', 'window.location.href= "/youselected.github.io"');
});

dos.addEventListener('click', function(e) {
  input.setAttribute('type', 'button');
  input.setAttribute('onclick', 'window.location.href= "/youselected2.github.io"');
});

tres.addEventListener('click', function(e) {
  input.setAttribute('type', 'button');
  input.setAttribute('onclick', 'window.location.href= "/youselected3.github.io"');
});

cuatro.addEventListener('click', function(e) {
  input.setAttribute('type', 'button');
  input.setAttribute('onclick', 'window.location.href= "/youselected4.github.io"');
});

cinco.addEventListener('click', function(e) {
  input.setAttribute('type', 'button');
  input.setAttribute('onclick', 'window.location.href= "/youselected5.github.io"');
});



 
 /*
    if (e.target.classList[1] === 'press1'){
       console.log('uno');
    }  
      */

    //   input.setAttribute('type', 'button');
    //   input.setAttribute('onclick', 'window.location.href= "file:///home/anna/proyectosweb/udemy/FRONTEND%20MENTOR/interactive-rating-component-main/youselected.html"');


     //else if (e.target.classList[1] === 'press2'){
      //  input.setAttribute('type', 'button');
      //  input.setAttribute('onclick', 'window.location.href="file:///home/anna/proyectosweb/udemy/FRONTEND%20MENTOR/interactive-rating-component-main/youselected2.html"');
    //};  
       //if(e.target.classList[1] === 'press2'){
    //      console.log('dos');
    //   }
    
   // });










