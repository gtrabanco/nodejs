"use strict";

//A function to help with the reading of a package.json file
function readPackageInfo(packageFile) {

    //First declare the return value var
    var packageInfo = false;

    //We need fs module
    var fs = require("fs");
    var path = require("path");

    //Check if we have access to the file
    var stats = fs.statSync(packageFile);

    //We need a file, if not just do nothing
    if (stats.isFile()) {
        try {
            fs.accessSync(packageFile, fs.F_OK | fs.R_OK);

            var contents = fs.readFileSync(packageFile, "utf8");

            packageInfo = JSON.parse(contents);

            //Just to make us sure we didn't process a different file and retrieve a secure trust information
            //about the package
            if(!packageInfo.name || !packageInfo.version) {
                packageInfo = false;
            }

        } catch (e) {
            packageInfo = false;
        }
    } else if(stats.isDir()) {
        //If it is dir, try if it is our lucky day and search if there is any package.json
        return readPackageInfo(path.join(packageFile, "package.json"));
    }

    return packageInfo;
}

//The exercise function
function moduleVersion(module, callBack) {
    var path = require("path");
    var fs = require("fs");
    var node_modules = path.join(".", "node_modules");
    var error = false;

    //Check if it is accessible the node_module dir
    try {
        fs.accessSync(node_modules, fs.R_OK);

        var modulePath = path.join(node_modules, module, "package.json");

        var packageInfo = readPackageInfo(modulePath);

        error = packageInfo === false;
    } catch (e) {
        error = true;
    }

    //If no error callBack returning the results
    if (callBack) {
        return callBack(error, packageInfo);
    } else{
        return packageInfo;
    }
}

//This read a package.json and its dependencies in node_modules giving the function a path
//to the app and two callbacks for the app packaje.json and other for each dependency
//package.json
function readDependencies(pkgPath, packageCallBack, dependencyCallBack) { //cb(error, dependencyModuleInfo)
    var path = require("path");
    var currentPackage = readPackageInfo(path.join(pkgPath, "package.json"));

    //If no error continue or die!
    if (currentPackage !== false) {
        var modulesInfo = []; //Initializes an array due to we don't want an error when we will do .push

        var returnedPackage = currentPackage;

        //If there is any callback modify future returned value
        if (packageCallBack) {
            returnedPackage = packageCallBack(false, currentPackage);
        }

        var modules = Object.getOwnPropertyNames(returnedPackage.dependencies);


        //If the module has any dependency we process it
        if (modules.length > 0) {
            modules.forEach(function (module) {
                //If there is any callback for the dependency
                if (dependencyCallBack){
                    modulesInfo.push(moduleVersion(module, dependencyCallBack));
                } else if (packageCallBack) {
                    //Maybe the developer wants only one callback for dependencies and the original package
                    modulesInfo.push(moduleVersion(module, packageCallBack));
                } else {
                    //Maybe the developer only wants a returned value
                    modulesInfo.push(moduleVersion(module));
                }

            });
        }

        return [returnedPackage, modulesInfo];
    } else {
        if (packageCallBack && dependencyCallBack) {
            return [packageCallBack("The package.json could not be found. Check if exists, is accessible and the permissions."),
                dependencyCallBack("The original package could not be loaded. Check if the file exists.")];
        } else if (packageCallBack) {
            return [packageCallBack("The package.json could not be found. Check if exists, is accessible and the permissions."),
                packageCallBack("The original package could not be loaded. Check if the file exists.")];
        } else {
            return [false, false];
        }
    }
}

module.exports = readDependencies;