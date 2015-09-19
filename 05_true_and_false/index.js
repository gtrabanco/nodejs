"use strict";

console.log("Using simple comparation:");

console.log("(false == 0) = %s", false == 0);
console.log("(false == \"\") = %s", false == "");
console.log("(false == null) = %s", false == null);
console.log("(\"\" == 0) = %s", "" == 0);
console.log("(\"\" == null) = %s", "" == null);
console.log("(null == 0) = %s", null == 0);
console.log("(false == undefined) = %s", false == undefined);
console.log("(false == NaN) = %s", false == NaN);


console.log("(null == null) = %s",  null == null);
console.log("(undefined == undefined) = %s",  undefined == undefined);
console.log("(NaN == NaN) = %s", NaN == NaN);

console.log("typeof NaN = %s", typeof NaN);
console.log("([] == true) = %s", [] == true);
console.log("([] == false) = %s", [] == false); //[].toString()

console.log("Using strict comparation:");

console.log("(false === 0) = %s", false === 0);
console.log("(false === \"\") = %s", false === "");
console.log("(false === null) = %s", false === null);
console.log("(\"\" === 0) = %s", "" === 0);
console.log("(\"\" === null) = %s", "" === null);
console.log("(null === 0) = %s", null === 0);
console.log("(false === undefined) = %s", false === undefined);
console.log("(false === NaN) = %s", false === NaN);


console.log("(null === null) = %s",  null === null);
console.log("(undefined === undefined) = %s",  undefined === undefined);
console.log("(NaN === NaN) = %s", NaN === NaN);

console.log("typeof NaN = %s", typeof NaN);
console.log("([] === true) = %s", [] === true);
console.log("([] === false) = %s", [] === false); //[].toString()

console.log("(null === null) = %s", null === null);
console.log("(true === true) = %s", true === true);
console.log("(false === false) = %s", false === false);
