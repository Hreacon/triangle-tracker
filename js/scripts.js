
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
  return output;
}
