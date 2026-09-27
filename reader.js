// Javascript test for now. 

const fs = require("node.fs");
const source = fs.readFileSync("txt.flow", "utf8");
const tokens = lex(source);
console.log(tokens);

function lex(code) {
    
}