/**
 * * Running scripts with NPN
 * 
 * * To run a script in npm, first make sure that the scripts field in package.json declared.
 * * scripts:{}
 * * Then declare the command name for the script command you want to run:
 * * scripts:{
 * *    command name : command params
 * *        test:       "echo \"Error: no test specified\" && exit 1"
 * *        serve:      "server"
 * *}
 * 
 * * Then use:npm run `commandName` 
 * * You can also pass arguments in the command when running them:IE
 * *
 * * scripts:{
 * *    "rm":"rm -rf"
 * *
 * }
 * * npm run rm "index.html"
 * *
 * * You can't however pass in arguments, with flags unless you hardCode that argument in the scripts first
 * *   "rm":"rm argument --"
 * 
*/

