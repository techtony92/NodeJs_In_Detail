#!  /usr/bin/env node
/**
 * * Creating a node CLI
 * 
 * * The above is a bash command that tells the os, to interpret this file in the node environment.
 * 
*/

/*
    * * For the cli, in package.json(), the bin object contains the primary fields used to initiate the cli, we do not use the import 
    * * or require for this. 
    * *
    * * To run this cli we have just created, in its own directory use `npm install -g`, this installs the cli globally
*/

/**
 * * package.json
 * 
 * *
 *  {
 * *    "name": "reddit-cli",
 * *    "version": "1.0.0",
 * *    "description": "",
 * *    "main": "index.js",
 * *    "scripts": {
 * *    "test": "echo \"Error: no test specified\" && exit 1"
 * *     },
 * *    "bin": { <-- The object config that make this project a cli
 * *        "reddit":"./reddit.mjs" <--  "reddit" = name of the command : "./reddit.mjs" = the file specified to run.  
 * *     },
 * *    "author": "",
 * *    "license": "ISC"
 * *}
*/

/**
 * * After installing the cli, you do not need to reinstall after updating code within it's codebase.
*/


console.log("hollo from the reddit cli");