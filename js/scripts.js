$(document).ready(function() {
  $("#letterForm").submit(function(event) {
    var nameInput = $("input#inputName").val();
    var addressInput = $("input#inputAddress").val();
    var place = $("select#placeToGo").val();
    console.log(place);

    $(".enteredName").text(nameInput);
    $(".enteredAddress").text(addressInput);
    $(".enteredplaceToGo").text(place);

    $("#letter").show();

    event.preventDefault();

  });
});
