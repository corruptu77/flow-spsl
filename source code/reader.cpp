#include <test.flow>
#include <backend.cpp>

// Read test.flow, and compile into tokens

//uhh where to start

enum Tokens = {
    // Data values
    var: "variable";
    let: "let";
    const: "constant";
    int: "integer";
    string: "string";
    conf: "confined";
    global: "global";
    // Data modifiers
    nest: "nest_modifier";
    short: "short";
    long: "long";
    veryLong: "very_long";
    unsigned: "unsigned";
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