var numberRe =/\D/

$(document).ready(function (){

  $('#arabic').on('input',function(e){
    var text = $('#arabic').val();
    var number = parseInt(text);

    if (numberRe.test(text))
    {
      console.log(number);
      $('#arabic').val(text.substring(0, text.length - 1));
    }


    if(isNaN($('#arabic').val())) {

    }

    $('#roman').val($('#arabic').val());
  });

  $('#roman').on('input',function(e){
    $('#arabic').val($('#roman').val());
  });

});




function convertToArabic() {

}


function convertToRoman () {

}
