"use strict";

var serie = function() {
    "use strict";

    return "This is a function returned text";
};

//module.exports = serie;

//We can also use exports var it is an alias
//but we only can do exports.object = exportedCode
exports.otherObject = serie;

//Which is equivalent to
//module.exports.otherObject = serie

//We can not do
exports = serie; //This will replace the alias to module.exports
