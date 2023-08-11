import {readFile} from "fs";
import {readFile as asyncError} from "fs/promise";
/**
 * * Error Handling
 * *
 * * When an exception is thrown, the node process exits. A Process can exit with a status if 1 or 0.
 * * 1 typically indicates something went wrong.
 * * 0 or non 1 typically indicates that the operation completed successfully. 
 * * This is useful for debugging, piping that information into another process. 
*/

/**
 * * How ever you typically dont want to use process.exit() because you dont have a chance to handle the error. The 
 * * server will automatically exit without you being able to process anything and a server re-start will be needed.
*/


readFile(new URL("index.mjs", import.meta.url), "utf-8", (err, data) =>{
    if(err){
        console.error(err);
    }else{
        
    }
})

/**
 * * To use the promised based readFile and catch errors, we typically need to wrap it inside a try-catch-block.
 * * This is because promised based functions in node can use the await keyword. This works like a regular synchronous function.
*/

try{
    const result = await asyncError( new URL("index.mjs", import.meta.url));
}catch(e){
    /**
     * * Catches the error if there is one.
    */
    console.error(e);
}

/**
 * * Process.On()
 * 
 * * We can also use process.on() function to find out what happened with uncaught Errors. This should only be used in cases where errors were not caught
 * * in a try catch from an async operation. These errors have already been thrown and are just for finding out information about said error.
 * * Asynchronous operations cannot be done here. This is pretty much the last tick in the event loop before the application bottoms out. 
*/

process.on('uncaughtException', (e) =>{
    console.log(e);
})

const result = asyncError(new URL("index.mj", import.meta.url), 'utf-8')
console.log("hello");