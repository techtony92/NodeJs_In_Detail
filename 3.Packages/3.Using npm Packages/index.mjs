import _ from "lodash";

/**
 * * Very important to note that local packages/modules need relative or absolute paths: 'import ... from "../someDir"'. 
 * * But packages/modules without the path are either an internal modules, like fs or it's something that i installed 
 * * via a package manger (npm or yarn) and its in the node-modules folder.
 * * npm firstly checks to see if this is internal, then if it is not , it recursively starts walking up your directory 
 * * tree and checking every node-modules folder until it finds that match. It will go up to the global folder on your 
 * * system, and if it can't find it, node will error out. 
*/

/**
 * * Installing packages globally. 
 * *
 * * Sometimes you want to have access to a package outside of the current project. For example:
 * * Npm is actually a package that is installed globally. But you can install npm locally as well.
 * * Same with yarn. To install a package globally :
 * * npm install <packageName> -g
 * *
 * * To uninstall it's the same just with the uninstall command
 * * npm uninstall <packageName> -g
 * *
 * * You can also do multiple install at the same time:
 * * npm install <packageName> <packageName> <packageName>
 * *
 * * You can also install specific versions:
 * * npm install <packageName>@<version> 
 * * npm install <packageName>@<version> <packageName>@<version> <packageName>@<version> 
*/

/**
 * * NPX
 * * Their are instances were you don't want to install a package globally but you still need some functionality 
 * * from them. That is where npx comes into play. Npx is also installed when you install node. Think of this as 
 * * like a remote npm. It does not save that package to package json,install it locally or globally, but simply 
 * * runs it as if it where already installed. IE
 * * npx yarn add lodash:
 * * npx uses yarn to add the lodash package to your project.
 * * This is great for one-off global tasks that you don't want to install. 
*/