function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

$('#mce-EMAIL').focus();

$('#mce-EMAIL').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if(validateEmail($('#mce-EMAIL').val())) {
        $("#mc-embedded-subscribe").attr("disabled",false);
        $("#mc-EMAIL").css('border-color', 'black');
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
      $("#mc-EMAIL").css('border-color', 'red');
    }
})

$('#mce-LNAME').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if($('#mce-LNAME').val().length < 2) {
        $("#mc-embedded-subscribe").attr("disabled",false);
        $("#mc-LNAME").css('border-color', 'black');
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
      $("#mc-LNAME").css('border-color', 'red');
    }
})

$('#mce-FNAME').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if($('#mce-FNAME').val().length < 2) {
        $("#mc-embedded-subscribe").attr("disabled",false);
        $("#mc-FNAME").css('border-color', 'black');
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
      $("#mc-FNAME").css('border-color', 'red');
    }
})
