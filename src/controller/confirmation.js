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

  document.getElementById('index').addEventListener('click',  () => {
    window.location.href = "../index.html";
  });