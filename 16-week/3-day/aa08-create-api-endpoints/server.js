const http = require('http');

const dogs = [
  {
    dogId: 1,
    name: "Fluffy",
    age: 2
  }
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

  req.on("end", () => { // request is finished assembly the entire request body
    // Parsing the body of the request depending on the Content-Type header
    if (reqBody) {
      switch (req.headers['content-type']) {
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

    if (req.method === 'GET' && req.url === '/') {
      //!!START
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');

      res.write(JSON.stringify({will: "my dog api server"}));
      //!!END

      return res.end();
    }

    if (req.method === 'GET' && req.url === '/dogs') {
      //!!START
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(dogs));
      //!!END

      return res.end();
    }

    // GET /dogs/:dogId
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/'); // ['', 'dogs', '1']
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        //!!START
        const dog = dogs.find(dog => dog.dogId === Number(dogId));

        if (!dog) {
          const resBody = JSON.stringify("Dog not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(dog));
        return res.end();
        //!!END
      }
      return res.end();
    }

    // POST /dogs
    if (req.method === 'POST' && req.url === '/dogs') {
      const { name, age } = req.body;
      //!!START
      const newDog = {
        dogId: getNewDogId(),
        name,
        age
      };
      dogs.push(newDog);

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(newDog));
      //!!END
      return res.end();
    }

    // PUT or PATCH /dogs/:dogId
    if ((req.method === 'PUT' || req.method === 'PATCH')  && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        //!!START
        const dog = dogs.find(dog => dog.dogId === Number(dogId));

        if (!dog) {
          const resBody = JSON.stringify("Dog not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }
        const { name, age } = req.body;
        dog.name = name || dog.name;
        dog.age = age ?? dog.age;  // nullish coalescing - handles when integer is zero, which is a falsey value

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(dog));
        return res.end();
        //!!END
      }
      return res.end();
    }

    // DELETE /dogs/:dogId
    if (req.method === 'DELETE' && req.url.startsWith('/dogs/')) {
      const urlParts = req.url.split('/');
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        //!!START
        const dogIdx = dogs.findIndex(dog => dog.dogId == dogId);

        if (dogIdx === -1) {
          const resBody = JSON.stringify("Dog not found.");
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(resBody);
          return res.end();
        }

        dogs.splice(dogIdx, 1);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ message: "Successfully deleted" }));
        return res.end();
        //!!END
      }
      return res.end();
    }

    // No matching endpoint
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    return res.end('Endpoint not found');
  });

});


if (require.main === module) {
    const port = 8000;
    server.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = server;
}
