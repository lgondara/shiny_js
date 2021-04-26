$(document).ready(function() {
  $(".navbar .container-fluid .navbar-nav .dropdown .dropdown-menu").each(function(index) {
    const num = index + 1;
    $( this ).addClass("dropdown-menu-" + num);
  });
  
  $(".dropdown-menu-1").append('<li><a href="https://google.com" target="_blank">New Cancer Diagnosis</a></li>');
  $(".dropdown-menu-1").append('<li><a href="https://google.com" target="_blank">Crude Rate</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://google.com" target="_blank">Mortality Counts</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://google.com" target="_blank">Mortality Crude Rate</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://google.com" target="_blank">Prevalence Report 1</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://google.com" target="_blank">Prevalence Report 2</a></li>');
  $(".dropdown-menu-4").append('<li><a href="https://google.com" target="_blank">New Cancer Diagnosis</a></li>');
  $(".dropdown-menu-4").append('<li><a href="https://google.com" target="_blank">Mortality Counts</a></li>');
});
