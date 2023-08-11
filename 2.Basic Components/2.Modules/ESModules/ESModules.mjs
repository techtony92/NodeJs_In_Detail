/**
 * * ES Modules/EcmaScript Modules
 * *
 * * ES modules is the newer standard that is used in nodeJs. We can tell node we want to use them by being explicity or implicit.
 * * Explicitly by using the .mjs extension.
 * * Explicitly by setting the "type" field in package.json to "modules"
*/

export const action = () =>{
    console.log("named Export")
}