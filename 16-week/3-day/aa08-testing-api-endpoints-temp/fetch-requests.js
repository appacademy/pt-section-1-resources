// /*
// Make fetch requests in the browser for each of the following tasks.
// Paste your code for fetch requests here once you finish each task.
// */

// /* =============================== Phase 1 ================================ */
// /*
//   Make a request with fetch request to GET /posts and print the response
//   components to the console.
// */

// // Your code here

// async function myFunc() {
//   let res = await fetch("/posts");

//   console.log(res);
// }
// myFunc();

// // .then(res => console.log(res))

// /* =============================== Phase 2 ================================ */
// /*
//   Make a request with fetch request to POST /posts and print the response
//   components to the console.
// */
// function hiWorld() {
//   return "hello world";
// }
// hiWorld();

// // Your code here
// function makePost() {
//   return fetch("/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       message: "New Post!",
//     }),
//   })
//     .then((res) => res.json())
//     .then((resBody) => {
//       return resBody;
//     });
// }

// makePost().then((res) => console.log(res));




// fetch("/posts", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ message: "hello world" }),
// })
//   .then((resObj) => resObj.json())
//   .then((resBody) => {
//     console.log(resBody);
//     let num = resBody.postId + 1;
//     console.log("printed num: ", num);
//     return num;
//   });






// async function someFunc() {
//   let resObj = await fetch("/posts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ message: "hello world" })});

//   let resBody = await resObj.json();
//   console.log(resBody);
// }
// someFunc();




// resObj.json()
// console.log("resObj: ", resObj.json().then(res => console.log(res)))
// .then(res => res.json())
// .then(resBody => console.log(resBody))


// fetch("https://api.chucknorris.io/jokes/random")
// .then(res => res.json())
// .then(resBody => console.log(resBody.value))





// make a request to this site (on the left)
//print the body of the response

// fetch("https://api.chucknorris.io/jokes/random")
// .then(resObject => resObject.json())
// .then(resBody => {
//     let val = resBody.value.split(" ")
// console.log(val)

// } )


function logLater(message, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // line 4 - what would `message` be?
        console.log(message)
        resolve();
      }, delay);
    });
  }

  logLater('Hello', 1000)
    .then(() => logLater('Good bye', 5000));
