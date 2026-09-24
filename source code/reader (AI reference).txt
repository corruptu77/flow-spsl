#include <fstream>
#include <iostream>
#include <sstream>
#include <stdexcept>
#include <string>

std::string readSource(const std::string& path) {
    std::ifstream source(path);
    if (!source) {
        throw std::runtime_error("Could not open source file: " + path);
    }

    std::ostringstream contents;
    contents << source.rdbuf();
    return contents.str();
}

int main(int argc, char* argv[]) {
    try {
        if (argc > 1) {
            std::cout << readSource(argv[1]);
        } else {
            try {
                std::cout << readSource("source code/test/test.flow");
            } catch (const std::runtime_error&) {
                std::cout << readSource("test/test.flow");
            }
        }
    } catch (const std::exception& error) {
        std::cerr << "Reader error: " << error.what() << '\n'; //error.what
        return 1;
    }

    return 0;
}