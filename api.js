var request = require("request");

var options = {
    url: "http://hogehoge.com",
    method: "GET",
};

exports.getHelloWorld = function (token, callback) {
    options.form = {
        acess_token: token
    }
    request(options, function (error, response, body) {
        var result = JSON.stringify(body);
        callback(result, error, response, body);
    });
};
