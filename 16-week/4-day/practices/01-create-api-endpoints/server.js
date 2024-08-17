const http = require("http");

const dogs = [
  {
    dogId: 1,
    name: "Fluffy",
    age: 2,
  },
];

let nextDogId = 2;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // request is finished assembly the entire request body
    // Parsing the body of the request depending on the Content-Type header
    if (reqBody) {
      switch (req.headers["content-type"]) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ======================== ROUTE HANDLERS ======================== */

    // GET /dogs
    if (req.method === "GET" && req.url === "/dogs") {
      const body = JSON.stringify(dogs);
      res.setHeader("Content-Type", "application/json");
      // res.write(body)
      return res.end(body);
    }

    // GET /dogs/:dogId
    if (req.method === "GET" && req.url.startsWith("/dogs/")) {
      const urlParts = req.url.split("/"); // ['', 'dogs', '1']
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        const dog = dogs.find((el) => el.dogId === Number(dogId));
        if (dog) {
          res.setHeader("Content-Type", "application/json");
          res.write(JSON.stringify(dog));
        } else {
          res.statusCode = 404;
          res.write("Dog not found");
        }
      }
      return res.end();
    }

    // POST /dogs
    if (req.method === "POST" && req.url === "/dogs") {
      if (!req.body) {
        res.statusCode = 400;
        return res.end("Must include 'name' and 'age' in request body");
      }
      const { name, age } = req.body;
      if (!name || !age) {
        res.statusCode = 400;
        return res.end("Must include 'name' and 'age' in request body");
      }

      const newDog = { dogId: getNewDogId(), name, age };
      dogs.push(newDog);
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(newDog));
      return res.end();
    }

    // PUT or PATCH /dogs/:dogId
    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      req.url.startsWith("/dogs/")
    ) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // try to find a dog with that dogId
        const dog = dogs.find((d) => d.dogId === Number(dogId));
        if (!dog) {
          // if it doesn't exist, send back some sort of error response
          res.statusCode = 404;
          res.write("Dog not found");
        } else if (req.body && dog) {
          // if it does, update the dog object with data from the req body
          if (req.body.name) dog.name = req.body.name;
          if (req.body.age) dog.age = req.body.age;
          res.setHeader("Content-Type", "application/json");
          res.write(JSON.stringify(dog));
        } else {
          res.statusCode = 400;
          return res.end("Must include 'name' or 'age' in request body");
        }
      }
      return res.end();
    }

    // DELETE /dogs/:dogId
    if (req.method === "DELETE" && req.url.startsWith("/dogs/")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        const dogIndex = dogs.findIndex((d) => d.dogId === Number(dogId));
        if (dogIndex === -1) {
          res.statusCode = 404;
          res.write("Dog not found");
        } else {
          dogs.splice(dogIndex, 1);
          res.setHeader("Content-Type", "application/json");
          res.write(JSON.stringify({ message: "Successfully deleted" }));
        }
      }
      return res.end();
    }

    // No matching endpoint
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    return res.end("Endpoint not found");
  });
});

if (require.main === module) {
  const port = 8000;
  server.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = server;
}
