#include <test.flow>
#include <fstream>
#include <iostream>
#include <sstream>
#include <stdexcept>
#include <string>
#include <backend.cpp>
using namespace std();

// Read test.flow, and compile into tokens



enum Tokens = {
    // Data values
    var: "variable";
    let: "let";
    const: "constant";
    int: "integer";
    string: "string";
    conf: "confined";
    global: "global";
    // Data modifiers, can be modified later, as long as the conditions of the initial and target modifiers are met by the data block
    nest: "nest_modifier";
    short: "short";
    long: "long";
    veryLong: "very_long";
    unsigned: "unsigned";
    full: "full" // Every integer above zero
    cus_len: "custom_length"; // comes in pairs of 8
    encrypt: "encrypt";
    bs32: "base32";
    bs64: "base64";
    bool: "boolean";
    cmbool: "compound_boolean"; // Holds true, false, but also "neither"
    bitstring: "bitstring";
    // Functions
    function: "function";
    fn: "function_call";
    cfn: "function_call_concurrent";
    // Important keywords
    if: "if";
    else: "else";
    while: "while";
    for: "for"; 
    concurrent: "concurrent"; // Does not run on it's own, can be placed with, if, else, while, and for
    // Symbols
    +: "plus";
    ;: "semicolon";
    // I'll add the others laater. 
    // Temporary: I'm just having this here so that the console.log in the "test.flow" file can run it"
    console.log: "console_log";
}; // Alright that's good for now, we do the more complicated stuff later

int assignSubject(varLine) {
    // get the subject name of the subject variable, and attach it to the data type listed in tokens. Furthermore, attach nested modifiers and also the data assigned to the subject.
}