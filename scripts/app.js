$('#mce-EMAIL').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      $("#mc-embedded-subscribe").attr("disabled",false);
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
    }
})

$('#mce-LNAME').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      $("#mc-embedded-subscribe").attr("disabled",false);
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
    }
})

$('#mce-FNAME').keydown( (e)=> {
    if($("#mce-FNAME").val() != "" && $('#mce-LNAME').val() != "" && $('#mce-EMAIL').val() != "" ) {
      $("#mc-embedded-subscribe").attr("disabled",false);
    } else {
      $("#mc-embedded-subscribe").attr("disabled",true);
    }
})
