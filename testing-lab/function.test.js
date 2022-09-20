let myFunctions = require('./function')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('Josh')).toBe('Hello Josh.')
})

test("Addition Test", () => {
    expect(myFunctions.add(10, 2)).toBe(12)
})




describe("Math Challenge!", () => {
    test("Add", () => {
        expect(myFunctions.add(14, 6)).toBe(20)
    })
    test("Subtract", () => {
        expect(myFunctions.subtract(2, 1)).toBe(1)
    })
    test("Multiply", () => {
        expect(myFunctions.multiply(12, 10)).toBe(120)
    })
    test("Divide", () => {
        expect(myFunctions.divide(16, 4)).toBe(4)
    })
})