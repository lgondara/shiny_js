$(document).ready(function() {
  $(".navbar .container-fluid .navbar-nav .dropdown .dropdown-menu").each(function(index) {
    const num = index + 1;
    $( this ).addClass("dropdown-menu-" + num);
  });
  
  $(".dropdown-menu-1").append('<li><a href="https://google.com" target="_blank">Incidence report 1</a></li>');
  $(".dropdown-menu-1").append('<li><a href="https://google.com" target="_blank">Incidence report 2</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://google.com" target="_blank">Mortality report 1</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://google.com" target="_blank">Mortality report 2</a></li>');
});
