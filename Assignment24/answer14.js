console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

// Explanation:

// Synchronous Code Execution:
// The console.log("Begin") and console.log("End") are synchronous operations, so they will execute first and in sequence.

// Promise:
// Promise.resolve().then() is also asynchronous, but it is handled by the microtask queue, which has a higher priority than the task queue.
// The Promise callback (.then) will be executed before the setTimeout callback, even though both are asynchronous.