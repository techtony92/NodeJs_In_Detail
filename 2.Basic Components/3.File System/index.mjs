
/**
 * * Read , Update & Write files to the fileSystem.
*/
/**
 * * Until NodeJs there was not a good way to access the fileSystem in javascript. With nodeJs,
 * * one can create, edit, remote, read, stream & more with files.
*/

/**
 * *fs: Nodes file system API. Has alot of need functions you can use to deal with files and folders. 
 * * The fs api has sync versions to many of the functions that by default are async in nodeJS. This is because
 * * of how nodeJs Works. Using the async version of a fileSystem function allows nodeJS to set that function aside 
 * * to process on the next "Tick" at some point. And because it's asynchronous, we are going to be able to accept input
 * * on this node execution while this function is being processed in the background. Node then notify's us via callback 
 * * when it's done.  
 * * 
 * * If you prefer to block the node process, do not move forward and do not process any other code. 
 * * Do not accept any other input until this is done , then you would use the sync version.
 * 
 * * Recently fs was updated to include promises. Before we needed to use them with callbacks but promises are better due to the 
 * * fact that we can async await them. 
*/

/**
 * * Note: __dirname, and __filename are globals in `commonJs` modules, but not ESmodules.
*/
/**
 * * import.metal.url
 * * 
 * *Provides the absolute path 
*/
import { readFile, writeFile } from "fs/promises";

/**
 * @readFile
 * @param url The absolute path to the file you want to read. Needs to include the fileName and extension.
 * @param encoding [Optional]: Reads the file using the specified encoding 'utf-8' 
*/
let template = await readFile(new URL("template.html", import.meta.url), 'utf-8');
// console.log(template) // outputs a buffer with out the encoding. <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0a 3c 68 74 6d 6c...

/**
 * * A Buffer it like the individual bits that make up a file. It is not a string. 
 * * Useful for streaming them bit by bit
*/

const data ={
    title:"Learn NodeJS",
    body:"This is the final html"
}

/**
 * * For Each Key, value pair inside a given objects entries
*/
for (const [k,v] of Object.entries(data)){
    template = template.replace(`{${k}}`, v);
}
console.log(template);

/**
 * * writeFile
 * @param URL: The absolute path to where we want to write the file. Needs to include the fileName and extension.
 * @param Content: The content we want to write to the file.
*/

await writeFile(new URL('index.html', import.meta.url), template);

/**
 * * At its core, this is what webpack, vite, and other bundlers do. They do a lot more, but this is part
 * * of their job at its core.
*/