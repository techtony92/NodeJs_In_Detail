// Named Export Es Modules 
import { action } from "./ESModules/ESModules.mjs";


/**
 * * CommonJS Import
 * *
 * * require() function takes a `relative` or `absolute`path to another JavaScript file that you want
 * * to include in this javascript file.
 * * Extensions are not needed if they are .js files, but for other extension types, 
 * * the file extension may be needed.
 * * The identifier you use need not be the same as the identifier that was exported 
 * * unless it is a named export or appended to the exports object.
 * * Members that are not exported from external modules are private and cannot be accessed
*/

const actionFunction = require("./CommonJS/commonJs_assigning_directly_to_module_exports"); //* Note the use of a different name. Similar to a default export
const {memberFunctionFromModuleExports, helloFromModuleExports} = require("./CommonJS/commonJs_populating_object_using_module_exports_as_object");  // * Named export
const {memberFunction, hello} = require("./CommonJS/commonJs_populating_object_using_exports");  // * Named export

//* Calling the functions
actionFunction(); 
memberFunctionFromModuleExports();
helloFromModuleExports();
memberFunction();
hello();


/**
 * * Internal Modules
 * 
 * * fs: useful for interacting with the fileSystem
 * * path: lib to assist with manipulating file paths.
 * * child_process: spawn subprocesses in the background
 * * http: interact with OS Level networking. Useful for creating servers. 
*/