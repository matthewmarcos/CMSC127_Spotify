$(document).ready(function(){
  $("#login").hide();
  $("#bodyButton").click(function(){
    $("#home").hide().delay(1200);
    $("#login").slideDown("slow", function(){}).delay(800);
  });
});

$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});



  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
      
