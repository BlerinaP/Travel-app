import '@babel/polyfill';
import { mainFunction } from "../client/js/requests";
import { getData } from "../client/js/requests";
import { postData } from "../client/js/requests";

//Main Function
describe('Test, the function "mainFunction()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof mainFunction).toBe("function");
    });
});

describe('Test, the function "mainFunction()" should exist' , () => {
    test('It should return true', async () => {
        expect(mainFunction).toBeDefined();
    });
});

//Get Function
describe('Test, the function "getData()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof getData).toBe("function");
    });
});

describe('Test, the function "getData()" should exist' , () => {
    test('It should return true', async () => {
        expect(getData).toBeDefined();
    });
});

//Post Function
describe('Test, the function "postData()" should be a function' , () => {
    test('It should return true', async () => {
        expect(typeof postData).toBe("function");
    });
});

describe('Test, the function "postData()" should exist' , () => {
    test('It should return true', async () => {
        expect(postData).toBeDefined();
    });
});