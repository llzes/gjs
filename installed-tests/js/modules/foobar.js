// simple test module (used by testImporter.js)

/* exported bar, foo, testToString, toString */

var foo = "This is foo";
var bar = "This is bar";

var toString = x => x;

function testToString(x) {
    return toString(x);
}
