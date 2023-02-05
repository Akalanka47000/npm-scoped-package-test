import initialize from '../src';

describe("test-package", () => {
    test("initialize", async () => {
        expect(initialize()).toEqual("Hello World");
    });
});