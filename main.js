$(document).ready(function() {
  var memory = "";
  var current = "";
  var final = 0;
  var displayRes = "";
  var arr = [];
  calc.screen.value = "0";

  $(".btn").click(function() {
    var el = $(this).val();
    if (el != "=" && el != "AC" && el != "CE") {
      displayRes += el;
      calc.display.value += el;
    }
  });

  $(
    "#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero, #decimal"
  ).click(function() {
    memory += $(this).val();
    calc.screen.value = memory;
    arr.push(memory);
    if (arr.length === 1) {
      calc.display.value = "";
      calc.display.value = memory;
    }
  });

  $("#add, #multiply, #divide").click(function() {
    current = memory;
    memory = "";
    calc.screen.value = "";
  });

  $("#minus").click(function() {
    var m = $(this).val();
    arr.push(m);
    if (arr[0] === m) {
      calc.screen.value = m;
      calc.display.value = m;
    } else {
      current = memory;
      memory = "";
      calc.screen.value = "";
    }
  });

  $("#equal").click(function() {
    final = eval(displayRes);
    calc.display.value += "=" + final.toFixed(2);
    calc.screen.value = final.toFixed(2);
    memory = "";
    current = "";
    displayRes = "";
    final = "";
    arr = [];
  });

  $("#ce").click(function() {
    var size = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size - 1);
    calc.screen.value = "0";
    memory = "";
  });

  $("#ac").click(function() {
    calc.display.value = "";
    calc.screen.value = "0";
    memory = "";
    current = "";
  });
});
