const request = require("../api");
const nock = require("nock");
const url = "http://hogehoge.com";

describe("WebAPITest", () => {
    beforeEach(() => {
        nock(url).get("/").reply(
            200,
            {
                success: false,
            },
            { "Content-Type": "application/json" }
        );
    });
    test("get Hello World", (done) => {
        function dummyCallback(result, error, response, body) {
            console.log(result);
            expect(error).toBe(null);
            expect(body).toBe("{\"success\":false}");
            done();
        }
        request.getHelloWorld("1234", dummyCallback);
    });
});
