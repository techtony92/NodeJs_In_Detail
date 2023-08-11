/**
 * Errors Q&A 
 * 
 * * 1) How come we can access  process without importing it?
 * * A: process is apart of the global space in nodejs. 
 * *
 * * 2) What is the difference between an error and an exception
 * * A: The only difference is that an error CAUSES an exception. 
 * * If you throw the error, that raises an exception so an error
 * * error is just an object that has some meta-data about that line,
 * * that happened and the type of error.
 * *
 * * A non-technical analogy would be :
 * *`getting on customer service and speaking to a manager` : That's an exception
 * *`you calling an complaining in the first place`: That's the error.
 * * The error gets raised to an exception
 * *
 * *3) Does wait blocking the tread and if so why do we use it?
 * * The fact that this question is brought up, means that await is doing it's job.
 * * Await gives the illusion that it is blocking the thread.Thats the whole point.
 * * It should feel like synchronous code and that it is blocking and nothing else is happening.
 * * But what actually is happening is that await is transpiled into what is called a `generator`.
 * * The equivalent to a .then() callback. 
 * *
 * *
 * *
 * 
 * 
*/

