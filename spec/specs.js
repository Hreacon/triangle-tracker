describe('triangleTracker', function() {
  it("is equilateral if all the inputs are the same", function() {
    expect(triangleTracker(100, 100, 100)).to.equal('equilateral');
  });
});