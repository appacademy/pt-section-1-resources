/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

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
    "Status code:",
    res.status,
    "Content Type:",
    res.headers.get("content-type"),
    "URL:",
    res.url
  )
);

// multiple .then()s
fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
})
  .then((res) => {
    console.log("Status code:", res.status);
    return res;
  })
  .then((res) => {
    console.log("Content Type:", res.headers.get("content-type"));
    return res;
  })
  .then((res) => {
    console.log("URL:", res.url);
    return res;
  })
  .then((res) => console.log("Redirected?", res.redirected));

/* ============================== Phase 3 ============================== */

fetch("/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    name: "Caribbean Delight Coffee PHASE III",
    description: "Made by Manatee Coffee",
    price: 1100.99,
    categories: "grocery",
  }),
})
  .then((res) => {
    console.log("Status code:", res.status);
    return res;
  })
  .then((res) => {
    console.log("Content Type:", res.headers.get("content-type"));
    return res;
  })
  .then((res) => {
    console.log("URL:", res.url);
    return res;
  })
  .then((res) => console.log("Redirected?", res.redirected));

// PHASE 4

fetch("/products/12", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    name: "Caribbean Delight Coffee Phase IV",
    description: "Updated Coffee description",
    price: 100000000,
    categories: "health",
  }),
})
  .then((res) => {
    console.log("Status code:", res.status);
    return res;
  })
  .then((res) => {
    console.log("Content Type:", res.headers.get("content-type"));
    return res;
  })
  .then((res) => {
    console.log("URL:", res.url);
    return res;
  })
  .then((res) => res.text())
  .then((text) => console.log(text));
