/**
 * * Modules
 * * CommonJS modules are the original way to package JavaScript code for Node.js.
 * * A Module is a reusable chunk of code that has it;s own context. That way modules can't interfere with or 
 * * pollute the global space. Think of them as lego blocks that you create, import and share.
 * * NodeJs uses modules to share your javascript with other javascript in your app.
*/

/**
 * * What is a module? 
 * * A Module is a reusable chunk of code that has it;s own context. That way modules can't interfere with or 
 * * pollute the global space. Think of them as lego blocks that you create, import and share. 
 * * 
*/

/**
 * * Older Module Syntax:
 * * Any logic inside this function was encapsulated inside its own closure, preventing
 * * pollution of the global name space.
*/

(function(){
    var me = "hello"
})()

/**
 * * Bundlers
 * 
 * * Bundlers like webpack, Rollup and vite create modules from your code. They also allow you to use modules.
 * * 
*/

/**
 * * Two Types of modules
 * 
 * * Nodejs now has two types of modules.
 * * Commonjs: The standard modules that you will commonly see.
 * *        exporting                   importing
 * *    - module.exports = ...          const .... = require("module-name")
 * *    - exports ...                   const .... = require("module-name")
 * * 
 * * ES6 modules: New version of modules that will be used in this course.
 * *        export .....                import {moduleName} from "file/package" also known as named export and named import
 * *        export default .....        import moduleName from "file/package" also known as default export and default import 
 * * The newer versions of node takes advantage of the ES6 Module syntax. To use them, you use the 
 * * .mjs extension instead of .js.
*/

/**
 * * By default nothing gets attached to the global space in nodeJs. There is no `window` global object in node.
 * * All files inside nodeJs get encapsulated in their own little enclosures so they don't leak.
 * * In order to use these snippets in other files, you need to explicity tell node that you want them to be modules.
 * 
*/
const action = () =>{
    console.log("hello \n");
    console.log(`This is a Default named export from module.exports. This syntax is also still in use.\n`);
    console.log(`-----------------------------\n`);
}



/**
 * * CommonJS
 * 
 * * In Node.js, each file is treated as a separate module and NodeJs will treat the following as CommonJs Modules:
 * * -  Files with the .cjs extension.
 * * -  Files with the .js extension when the nearest parent package.json file contains a top-level field "type" with the value of "commonjs".
 * * -  Files with a .js extension when the nearest parent package.json file doesn't contain a top-level field "type". 
 * *    Package authors should include the "type" field, even in packages where all sources are CommonJS. 
 * *    Being explicit about the type of the package will make things easier for build tools and loaders to determine how the files in the package should be interpreted.
 * 
 * * The Module Object
 * * Recall that each file is treated as a module in node Js. So in each module(file), the module variable is a reference to the module object representing the current module(file). 
 * * For convenience, module.exports is also accessible via the exports module-global. `module` is not actually a global but rather local to each module.
 * * The `module` object has keys and values associated with the current module, include an id, path, filename & more.
 * * It also contains the object known as exports. This and exports are special objects used in node to share javascript 
 * * code with other javascript code. 
 * * By default the exports member inside of the module object is an empty object. When using module to `Assign` a value to the exports member, 
 * * it becomes what is assigned to it. Here is a look at the module object, representing a local instance to each module(file):
 * *
 * * Module {
 * *   id: string | any, 
 * *   path:string, <-- Current Directory from User to current folder
 * *   exports:Object, <-- What allows code sharing
 * *   fileName:string, <-- Current Directory from User to current file including the current folder
 * *   loaded:boolean,
 * *   children:Array<any>,
 * *   paths:Array<string>
 * * }
 * 
 */

/**
 * * A Default export in commonJs. This isn't an official name, just similar to default exports in ES6. 
 * * The export object inside of module becomes a function but can to be referenced using a different identifier that what it was exported from. 
*/
module.exports = action; 