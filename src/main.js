import { convertToRoman, convertToArabic, numberRe, numeralRe  } from './roman-numerals';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function (){
  $('#arabic').on('input',function(){
    var text = $('#arabic').val();
    var number = parseInt(text);

    if (numberRe.test(text) || number > 3999999)
      $('#arabic').val(text.substring(0, text.length - 1));

    $('#roman').val(convertToRoman($('#arabic').val()));
  });

  $('#roman').on('input',function(){
    var text = $('#roman').val().toUpperCase();
    if (numeralRe.test(text))
      text = text.substring(0, text.length - 1);

    $('#roman').val(text);
    $('#arabic').val(convertToArabic(text));
  });
});
