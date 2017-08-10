//back-end logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User inter logic:

$(document).ready(function() {
  $("form#math").submit(function(event) {
    event.preventDefault();
    var result = 0;
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());

    $("#b1").click(function(event) {
      result = add(number1, number2);
      $("#output").text(result);
      alert(result);
    })
    $("#b2").click(function(event) {
      result = subtract(number1, number2);
      $("#output").text(result);
    })
    $("#b3").click(function(event) {
      result = multiply(number1, number2);
      $("#output").text(result);
    })
    $("#b4").click(function(event) {
      result = divide(number1, number2);
      $("#output").text(result);
    })


  });
});
