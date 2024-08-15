/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
});

/* ============================== Phase 2 ============================== */

fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
}).then((res) =>
  console.log(
    "Status Code:",
    res.status,
    "Content-Type:",
    res.headers.get("content-type"),
    "URL:",
    res.url,
    "Redirected:",
    res.redirected
  )
);

// fetch("/products", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
// })
//   .then((res) => {
//     console.log("Status Code:", res.status);
//     return res;
//   })
//   .then((res) => console.log("Content-Type:", res.headers.get("content-type")));

/* ============================== Phase 3 ============================== */

fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    name: "Caribbean Delight Coffee Phase III",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery",
  }),
}).then((res) =>
  console.log(
    "Status Code:",
    res.status,
    "Content-Type:",
    res.headers.get("content-type"),
    "URL:",
    res.url,
    "Redirected:",
    res.redirected
  )
);

// PHASE 4

fetch("/products/8", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    name: "Updated Name",
    description: "Updated Description",
    price: 10000000,
    categories: "health",
  }),
}).then((res) => {
  console.log(
    "Status Code:",
    res.status,
    "Content-Type:",
    res.headers.get("content-type"),
    "URL:",
    res.url,
    "Redirected:",
    res.redirected
  );
  return res.text();
}).then(text => console.log("RES BODY:", text))
