/**
 * * package.json fields:
 * 
 * *    name:  Important because if you ever decide to publish this package to a registry, the name has to be unique.
 * *           This grantees that the package you get is the one you want.
 * *    Version:   (1.0.0 )A 3 digit system. Also called sematic versioning or SEMVAR for short.  
 * *                First value is the major version.
 * *                Second value is the minor version.
 * *                Third value is the patch version.
 * *    Description: What ever is put here will be put on a registries web site so it can be read a present that way.
 * *    Entry Point: If someone requires or imports your module,what file would be imported? The entry point file. IE index.js
 * *    Test Command: What commands should run if anyone tries to test this module
 * *    Git Repository: Were on git is this hosted
 * *    Scripts : Commands that you give npm to run
 * *    dependencies: packages used in this project. These will be present in production 
*/

/**
 * * package-lock.json
 * *
 * * package-lock.json file is used to keep the same versions of packages that were installed when the module/application was being developed.
 * * This will prevent conflicts between versions,prevent duplicates so everyone on your team will have the exact same versions,
 * * the exact same dependencies so that their are no discrepancies between that.
 * 
*/

/**
 * * Npm commands:
 * * npm install --save: installs the package as a dependency and saves the package as a dependency to package.json
 * * npm install : installs dependencies listed on a package.json file. 
 * * npm install <packageName> : installs the package but does not place it inside the package.json file. 
 * * npm uninstall <packageName> : uninstalls the package from your system, package.json and package-lock.json.
*/