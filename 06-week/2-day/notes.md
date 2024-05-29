# The Event Loop and Async Code

## The Event Loop


JavaScript uses an *event loop* model of execution. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)

- The event loop consists of:
  - The `call stack`
    - This keeps track of the current task in progress
  - The `message queue`
    - This keeps track of the next tasks that will be executed once the current task is completed

## Asynchronous JavaScript

- Synchronous Code:
  - Guaranteed execution order
- Asynchronous Code:
  - No guarantee in the total order that commands are executed