const http = require("http");
const fs = require("fs");

const { Player } = require("./game/class/player");
const { World } = require("./game/class/world");

const worldData = require("./game/data/basic-world-data");

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  // HELPER FUNCTION FOR EZ REDIRECTS
  const redirectTo = (urlPath) => {
    res.statusCode = 302;
    res.setHeader("Location", urlPath);
    return res.end();
  };

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if (req.method === "GET" && req.url === "/") {
      const template = fs.readFileSync("./views/new-player.html", "utf-8");
      const availRooms = world.availableRoomsToString();
      const resBody = template.replace(/#{availableRooms}/g, availRooms);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(resBody);
    }

    // Phase 2: POST /player
    if (req.method === "POST" && req.url === "/player") {
      const { name, roomId } = req.body;
      const room = world.rooms[roomId];
      player = new Player(name, room);
      // Without helper function
      // res.statusCode = 302;
      // res.setHeader("Location", );
      // return res.end();
      // using helper
      return redirectTo(`/rooms/${roomId}`);
      // 201
      // {new player}
      // return res.end(JSON.stringify(player))
    }

    // check for player -> following routes will need one
    if (!player) return redirectTo("/");
    // Phase 3: GET /rooms/:roomId
    if (req.method === "GET" && req.url.startsWith("/rooms/")) {
      const roomId = req.url.split("/")[2];
      if (roomId) {
        if (Number(roomId) !== player.currentRoom.id) return redirectTo(`/rooms/${player.currentRoom.id}`)
      }
      const roomHTML = fs.readFileSync("./views/room.html", "utf-8");
      const resBody = roomHTML
        .replace(/#{roomName}/g, player.currentRoom.name)
        .replace(/#{roomItems}/g, player.currentRoom.itemsToString())
        .replace(/#{inventory}/g, player.inventoryToString())
        .replace(/#{exits}/g, player.currentRoom.exitsToString());
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(resBody);
    }


    // Phase 4: GET /rooms/:roomId/:direction

    // Phase 5: POST /items/:itemId/:action

    // Phase 6: Redirect if no matching route handlers
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
