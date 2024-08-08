const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require("http");

server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  let reqBody = "";
  // As data packets are received, add to the reqBody string
  req.on("data", (data) => (reqBody += data));

  // event listener for the end of the request
  req.on("end", () => {
    if (reqBody) {
      req.body = parseBody(reqBody);
    }
    sendFormPage(req, res);
  });
});

const port = 5000;

server.listen(port, () =>
  console.log("Successfully started the server on port 5004")
);

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
