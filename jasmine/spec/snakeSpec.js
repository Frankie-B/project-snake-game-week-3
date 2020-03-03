// Test for snake object
describe('declare class', function() {
  it('should be named Snake', function() {
    expect(typeof Snake).toEqual('function');
  });

  it('should contain a constructor function', function() {
    expect(constructor instanceof Snake).toEqual(true);
  });

  // it('should contain function turnLeft', function() {
  //   expect(typeof turnLeft).toEqual('function');
  // });
});
