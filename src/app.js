$(document).ready(function(){
  M.AutoInit();
});
    ;
 //carousel
document.addEventListener('DOMContentLoaded', function() {
 var elems = document.querySelectorAll('.slider');
 var instances = M.Slider.init(elems, {
   indicators: false,
   interval: 2000,
   height: 500,
 });
});

