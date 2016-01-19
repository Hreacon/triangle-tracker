describe('triangleTracker', function() {
  it("is equilateral if all the inputs are the same", function() {
    expect(triangleTracker(100, 100, 100)).to.equal('equilateral');
  });
  it("is isosceles if two inputs are the same", function() {
    expect(triangleTracker(100, 50, 50)).to.equal('isosceles');
  });
  it("is scalene if no sides are the same", function() {
    expect(triangleTracker(40, 50, 60)).to.equal('scalene');
  });
  it("is not a triangle if two sides are equal to or less than the third side", function(){
    expect(triangleTracker(40, 50, 100)).to.equal('not a triangle');
  })
});
