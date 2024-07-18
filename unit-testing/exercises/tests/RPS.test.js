const test = require('../RPS.js');
describe ("whoWon"), function(){
    test("should return 'TIE!' when both players select the same choice", function(){
        const output = whoWon("rock","rock");
        expect(output).toBe("TIE!");
    })
    test("should return 'TIE!' when both players select the same choice", function(){
        const output = whoWon("paper","paper");
        expect(output).toBe("TIE!")
    })
    test("should return 'TIE!' when both players select the same choice", function(){
        const output = whoWon("rock","rock");
        expect(output).toBe("TIE!")
    })
}