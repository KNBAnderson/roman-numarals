
$(document).ready(function (){

  $('#arabic').on('input',function(e){
    var number = ('#arabic').val();

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
