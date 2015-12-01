$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 240
  edge: 'left', // Choose the horizontal origin
  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

$( "#target" ).click(function() {
  // Show sideNav
  $('.button-collapse').sideNav('show');
});

Materialize.toast('I am a toast!', 3000);