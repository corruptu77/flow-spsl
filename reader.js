// Javascript (Basic functions, I'll use other scripts like C++ for more advanced topics, suchas bitstrings. I would've otherwise used Python for physical integration, but I'll let C++ do that.)

const fs = require("node.fs");
const source = fs.readFileSync("txt.flow", "utf8");
const tokens = lex(source);
console.log(tokens);

function lex(code) {
    let tokens = [];
    let finished = "";
    let lines = code.split(";");

    let methods = lines[i].split(" ");
    let vocab = ["var","let","const","int","gl","conf","dt","bool"];
        let token0 = ["?variable","?let","?constant","?integer","?global","?confined","?data","?boolean"];
        for (var i = 0; i < vocab.length; i ++) {
            if (!(lines[0]===vocab[i])) {
                continue;
            } else {
                tokens.push(token0[i]);
                break;
            }
        }
        console.log(tokens);
    }
    /*
    for (var i = 0; i < lines.length; lines ++) {
        let methods = lines[i].split(" ");
        let vocab = ["var","let","const","int","gl","conf","dt","bool"];
        let token0 = ["?variable","?let","?constant","?integer","?global","?confined","?data","?boolean"];
        for (var i2 = 0; i2 < vocab.length; i2 ++) {
            if (!(lines[i]===vocab[i2])) {
                continue;
            } else {
                tokens.push(token0[i2]);
                break;
            }
        }
        console.log(tokens);
    }
    // console.log(methods);
    */
}