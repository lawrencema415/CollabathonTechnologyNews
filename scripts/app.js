function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

$('#exampleModal').on('shown.bs.modal', function() {
  $('#mce-EMAIL').focus();
})

$('#mce-EMAIL').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if(validateEmail($('#mce-EMAIL').val()) == true && $('#mce-LNAME').val().length < 2 && $('#mce-FNAME').val().length < 2) {
        console.log("validates");
        $("#mc-embedded-subscribe").attr("disabled",false);
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
    }
})

$('#mce-LNAME').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if($('#mce-LNAME').val().length < 2 && validateEmail($('#mce-EMAIL').val()) == true && $('#mce-FNAME').val().length < 2) {
        $("#mc-embedded-subscribe").attr("disabled",false);
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
    }
})

$('#mce-FNAME').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if($('#mce-FNAME').val().length < 2 && validateEmail($('#mce-EMAIL').val()) == true && $('#mce-LNAME').val().length < 2) {
        $("#mc-embedded-subscribe").attr("disabled",false);
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
    }
})
