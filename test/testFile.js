const sum = require("../index");
const assert = require("assert");
//Asserts 

describe("Probar la suma de dos nimeros", () => {
    //Affirmamos que 5 + 7 = 12
    it("5 + 7 = 12", () => {
        assert.equal(12, sum(5, 7));
    });
    //Afirmamos que 5 + 7 != 57
    it("5 + 7 != 57", () => {
        assert.notEqual(57, sum(5, 7));
    });
})