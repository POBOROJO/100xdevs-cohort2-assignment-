/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) { 
    // This line defines a function named sleep that takes a parameter milliseconds, indicating the duration for which the function will pause execution.
    return new Promise((resolve) =>{
        const startTime = Date.now();
        while(Date.now() - startTime < milliseconds) {
            // This line creates a while loop that continues to execute as long as the difference between the current time and the start time < milliseconds.
        }
        resolve();
    })
}
module.exports = sleep;
