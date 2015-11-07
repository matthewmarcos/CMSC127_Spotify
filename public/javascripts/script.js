$(document).ready(function(){
  $("#signup").hide();
  $("#bodyButton").click(function(){
    $("#home").hide();
    $("#signup").show();
  });
});

$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15 // Creates a dropdown of 15 years to control year
});
      
