#!  /usr/bin/env node
import open from "open";
import fetch from "node-fetch";
import yargs from "yargs";
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

/**
 * * Packages we need to improve our cli:
 * *
 * * open - will open out browser with a URL
 * * node-fetch - is a fetch client that we can use to hit the reddit API
 * * yargs - will allow us to process any flags or arguments passed to the CLI
 * 
*/

console.log("hello from the reddit cli");

 //* process env vars
 /**
  * * This also gives us all arguments we pass in when running the cli/app.
 */
 const {argv} = yargs(process.argv); 
 //* init fetch to reddit api
 const result = await fetch(`https://www.reddit.com/.json`);
 const data = await result.json();
 const randomIndex = Math.floor(Math.random() * data.data.children.length);
 //* Get random post from reddit api response of all posts on front page.
 const post = data.data.children[randomIndex];

 //* log if --print flag is passed
if(argv.print){
    console.log(`
    Title:${post.data.title}\n
    Link:${post.data.permalink}`)
}else{
    //* open in browser if not
    open(`https://reddit.com${post.data.permalink}`);
}


console.log("hello from the reddit cli");