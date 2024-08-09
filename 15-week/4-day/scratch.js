// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   // Sending a static asset
//   const catImage = fs.readFileSync("./images/cat.png");

//   res.statusCode = 200;
//   res.setHeader("Content-Type", "image/png");
//   res.end(catImage);

//   // Using a basic HTML Templating technique

//   // Get the file contents of the profile-page.html as a string
//   const htmlTemplate = fs.readFileSync("./profile-page.html", "utf-8");

//   const htmlPage = htmlTemplate
//     // replace all instances of #{username} in the HTML file with 'DemoUser'
//     .replace(/#{username}/g, "DemoUser")
//     // replace all instances of #{biography} in the HTML file with 'Hello World!'
//     .replace(/#{biography}/g, "Hello World!");

//   res.setHeader("Content-Type", "text/html");
//   res.end(htmlPage);

//   // Sending JSON
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify(someData));

// });

// server.listen(5000, () => console.log("Server listening on port", 5000));


const test = {team: "Eagles", city: "Philadelphia", superBowls: 1, rivals: [{team: "Giants", badness: "5"}, {team: "Cowboys", badness:9001}]}
const stringy = JSON.stringify(test);
console.log(stringy);
const parsed = JSON.parse(stringy);
console.log(parsed)