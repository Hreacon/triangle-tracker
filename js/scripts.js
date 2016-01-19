
var triangleTracker=function(side1, side2, side3){
  var output="scalene";
  if(side1 === side2 || side1 === side3 || side2 === side3) {
    if(side1 === side3 && side1 === side2) {
      output="equilateral";
    } else {
      output="isosceles";
    }
  }
  if(side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    output = "not a triangle";
  }
  if(isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    output = false;
  }
  if(side1 <= 0 || side2 <= 0 || side3 <= 0) {
    output = false;
  }
  return output;
}

$(document).ready(function() {
  $("#form1").submit(function(event) {
    // get the input
    var side1=parseInt($("#side1").val());
    var side2=parseInt($("#side2").val());
    var side3=parseInt($("#side3").val());
    // put the input into triangleTracker
    var result=triangleTracker(side1, side2, side3);
    if (result === false) {
      $(".error").show();
    } else {
      $(".triangle").text(result);
      $(".output").show();
    }
    // show the output or error
    event.preventDefault();
  });
});
