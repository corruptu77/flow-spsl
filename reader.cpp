#include <iostream>
#include "txt.flow"
#include <fstream>
#include <sstream>
#include <stdexcept>
#include <string>
using namespace std;

std::string readTextFile(const std::string& path) {
	std::ifstream file(path);
	if (!file) {
		return "cannot find file";
	}

	std::ostringstream contents;
	contents << file.rdbuf();
    lex(contents);
	return contents.str();
}

class lex(content) {
    // var block construction
    class construct {
        class data(type, name, value = {}, modifier = {}) {
            type: [
                var = "?variable",
                let = "?let",
                const = "?constant",
                gl = "?global",
                conf = "?confined",
                int = "?integer",
                bool = "?boolean",
                dt = "?data",
            ],
            
        }
        // detect semicolon to end current function.
    }
}