$(document).ready(function(event){
  $(".form-control#animal").click(function() {
    var animal = parseInt($("#animal").val());
    if (animal === 1){
      $('.apesDescription').show();
      $('.insectDescription, .jellyfishDescription, .turtleDescription').hide();
    } else if (animal === 2) {
      $('.insectDescription').show();
      $('.apesDescription, .jellyfishDescription, .turtleDescription').hide();
    } else if (animal === 3) {
      $('.jellyfishDescription').show();
      $('.apesDescription, .insectDescription, .turtleDescription').hide();
    } else if (animal ===4){
      $('.turtleDescription').show();
      $('.apesDescription, .insectDescription, .jellyfishDescription').hide();
    }
    console.log(animal);
  });
});
