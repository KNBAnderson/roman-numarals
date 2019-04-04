var numberRe =/\D/
var numbersLookupList =  [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 4000, 5000, 9000, 10000, 40000, 50000, 90000, 100000, 400000, 500000, 900000, 1000000]
var numeralsLookupList = ["I", "IV", "V", "IX", "X", "XL", "L", "LC", "C", "CD", "D", "DM", "M", "MṼ", "Ṽ", "ṼẌ", "Ẍ", "ẌĹ", "Ĺ", "ĹĈ", "Ĉ", "ĈĎ", "Ď", "ĎṀ", "Ṁ"]

function convertToRoman (number) {
  var numeral = '';
  for (let i = numbersLookupList.length - 1; i >= 0; i--) {
    while (number >= numbersLookupList[i]) {

      number -= numbersLookupList[i];
      numeral += numeralsLookupList[i];
    }
  }
  return numeral;
}

$(document).ready(function (){
  $('#arabic').on('input',function(e){
    var text = $('#arabic').val();
    var number = parseInt(text);

    if (numberRe.test(text) || number > 3999999)
    $('#arabic').val(text.substring(0, text.length - 1));

    $('#roman').val(convertToRoman($('#arabic').val()));
  });
});
