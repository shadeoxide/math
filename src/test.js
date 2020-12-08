const fs = require("fs");
const { execute } = require("./index");

fs.readFile("index.math", 'utf8', function(err, data) {
    execute(data)
})

