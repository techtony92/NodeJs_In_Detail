const {test} = require("@jest/globals");
const {getNewUser, mapObjectToArray} = require("./utils.mjs");

describe(`mapObjectToArray()`, ()=>{
    test("maps values to array using callback", () =>{
        const results = mapObjectToArray({age:30, height:65, }, (k,v) =>{
            return v + 10;
        })

        expect(results).toEqual([40, 75])
    });

    test(`callback gets called`, ()=>{
        const mockCallback = jest.fn();
        const result = mapObjectToArray({age:30, height:65}, mockCallback)
        expect(mockCallback.mock.calls.length).toBe(2)
    })
});
