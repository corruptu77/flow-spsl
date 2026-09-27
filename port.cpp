#include <parser.cpp>

class data {
    type: ["var","let","const","int","bool","arr","conf","dt","gl"],
    /* "var" variable.
        Generic variable, holds anything unless told not to.
    "let" let.
        Generic variable, but confined within the function set or 
        data piece it was given.
    "const" constant.
        Cannot be modified after assignment, however, it is possible for
        any held modifiers to be modified later on, and can be changed
        from a constant to a different data type through modifiers
    "int" integer.
        Holds an integer, which can be given a fixed number of bits,
        whether it is preset or custom, however should always come as a 
        multiple of 8
    "bool" boolean.
        Holds true or false, and however the bitstring can be modified
        further to hold "maybe"
    "arr" array.
        Strictly to hold an array of subjects, and requires a set of 
        confined methods () [] or {}.
    "conf" confined.
        Confined to the confine methods () [] or {}, however, can still be
        accessed through push/pull methods.
    "dt" data.
        The most generic of them all, with no preset modifiers as from
        listed above.
    "gl" global. 
        Can be accessed by all files that comprise FLOW or CPP files within, 
        a given project. however, if modified, can also be accessed by 
        JSON, PY, and other scripting files if needed. 
    */
    held_data: {},
    modifiers: [{nest({})},{
        
    }],
}