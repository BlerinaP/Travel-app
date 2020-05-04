import '@babel/polyfill';
import { mainFunction } from "../client/js/requests";

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