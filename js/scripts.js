$(document).ready(function(){
var animal = $("#animal").val();
  if (animal === 1){
    $('.apesDescription').show();
    // $('.insectDescription, .jellyfishDescription, .turtleDescription').hide();
  }  else if (animal === 2) {
    $('insectDescription').show();
    $('apesDescription, jellyfishDescription, turtleDescription').hide();
  }  else if (animal === 3) {
    $('jellyfishDescription').show();
    $('apesDescription, insectfishDescription, turtleDescription').hide();
  }  else (animal === 4) {
    $('turtleDescription').show();
    $('apesDescription, insectDescription, jellyfishDescription').hide();
  }
})
