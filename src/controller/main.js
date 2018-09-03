
document.getElementsByTagName ('section')[0].addEventListener('touchstart',  () => {
    document.getElementById('menuContent').style.display = 'none';
  });

  document.getElementsByTagName ('section')[1].addEventListener('touchstart',  () => {
    document.getElementById('menuContent').style.display = 'none';
  });

  document.getElementsByTagName ('section')[2].addEventListener('touchstart',  () => {
    document.getElementById('menuContent').style.display = 'none';
  });


document.getElementsByTagName ('header')[0].addEventListener('touchstart',  () => {
    document.getElementById('menuContent').style.display = 'none';
});

$(document).ready( () => {
  $("#burguerMenu").click( () =>{
    $("#menuContent").slideToggle("slow"); 
  });
}); 

$(document).ready( () => {
  $("#carShopButton").click( () =>{
    $("#carShopList").slideToggle("slow"); 
  });
}); 


document.getElementsByTagName ('section')[0].addEventListener('touchstart',  () => {
    document.getElementById('carShopList').style.display = 'none';
});

document.getElementsByTagName ('section')[1].addEventListener('touchstart',  () => {
    document.getElementById('carShopList').style.display = 'none';
});

document.getElementsByTagName ('section')[2].addEventListener('touchstart',  () => {
  document.getElementById('carShopList').style.display = 'none';
});


document.getElementsByTagName ('header')[0].addEventListener('touchstart',  () => {
    document.getElementById('carShopList').style.display = 'none';
});

document.getElementById('close').addEventListener('click',  () => {
    document.getElementById('carShopList').style.display = 'none';
});



      
    
    
