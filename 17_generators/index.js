"use strict";


function* rangeCreator(start, end) {
    while (start < end) {

        let y = yield start;
        ++start;
    }

    return 'End with ' + start.toString();
}

let range = rangeCreator(1, 3);

console.log(range);
console.log(range.next());
console.log(range);
console.log(range.next());
console.log(range.next());
console.log(range.next());

let range2 = rangeCreator(4, 10);

for (let v of range2) {
    console.log(v);
}

for (let v of rangeCreator(10, 15)) { // "of" only return yield and not return values
    console.log(v);
}
