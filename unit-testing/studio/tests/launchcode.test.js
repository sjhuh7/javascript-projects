// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should check to see if the value of organization is 'nonprofit'", function(){
    expect(launchcode.organization).toBe("nonprofit")
  });

  test("should check to see if the value of executiveDirector is 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe("Jeff")
  });
  test("should check to see if the value of percentageCoolEmployees is 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100)
  });
  test("should check to see if the value of programsOffered is correct", function(){
    let programsArray = launchcode.programsOffered
    
    expect(programsArray[0]).toBe("Web Development");
    expect(programsArray[1]).toBe("Data Analysis");
    expect(programsArray[2]).toBe("Liftoff");
    expect(programsArray.length).toBe(3);
  });

  test("should check to see if launchOutput() returns 'Launch!' when passed a number ONLY divisible by 2", function(){
    expect(launchcode.method(2)).toBe('Launch!')
  })
  test("should check to see if launchOutput() returns 'Code!' when passed a number ONLY divisible by 3", function(){
    expect(launchcode.method(3)).toBe('Code!')
  })
  test("should check to see if launchOutput() returns 'Rocks!' when passed a number ONLY divisible by 5", function(){
    expect(launchcode.method(5)).toBe('Rocks!')
  })


});