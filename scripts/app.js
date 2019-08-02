function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

// $('#mce-EMAIL').focus();

$('#mce-EMAIL').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if(validateEmail($('#mce-EMAIL').val()) == true) {
        console.log("validates");
        $("#mc-embedded-subscribe").attr("disabled",false);
        if("#mc-EMAIL") {
        	console.log("hello");
        }
        $("#mc-EMAIL").css('border', '2px solid green');
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
      $("#mc-EMAIL").css('border', '2px solid red');
    }
})

$('#mce-LNAME').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if($('#mce-LNAME').val().length < 2) {
        $("#mc-embedded-subscribe").attr("disabled",false);
        $("#mc-LNAME").css('border', '2px solid green');
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
      $("#mc-LNAME").css('border', '2px solid red');
    }
})

$('#mce-FNAME').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      if($('#mce-FNAME').val().length < 2) {
        $("#mc-embedded-subscribe").attr("disabled",false);
        $("#mc-FNAME").css('border', '2px solid green');
      }
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
      $("#mc-FNAME").css('border', '2px solid red');
    }
})
