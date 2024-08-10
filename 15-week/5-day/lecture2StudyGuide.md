# Request + Response Cycle + Servers

- Requests come from clients (users on PC, mobile....)
- Responses come from servers
- The way that requests and responses communicate is via HTTP
  - Stateless
    - Each request is handled in isolation
    - Each request needs to have all the info that the server needs to formulate the appropriate response.
  - Reliability
    - TCP is reliable/lossless

## Requests

Types of Requests and Corresponding HTTP Method:

- Read data or view a page -> `GET`
- Create a new instance of a resource on a server -> `POST`
- Edit data on a server -> `PUT/PATCH`
  - `PUT` is for updating all of the data
  - `PATCH` is for updating a part of the data
- Deleting something off a server -> `DELETE`

### Components

1. Request line
  - HTTP Method + Path (aka endpoint) + HTTP version (1.1 || 2)
2. Headers
  - `Content-Type`let's the server know the format of the Req Body
3. Body
  - GET + DELETE typically don't include a body, PUT/PATCH + POST usually include a body

## Responses

### Components

1. Status
  - 3 digit codes, grouped by the first digit (hundreds)
2. Headers
    - `Content-Type` important to set when we have a response body
    - `Location` use it to redirect the user (it's prompting the client to make a follow up request to the location's value)
3. Body

## Servers

- It's just a program that's connected to a network and listens for requests, and formulates responses to the requests
  - Typically have route handlers defined to respond to a number of different endpoints
     - HTML Templating
     - Serving static assets (CSS, JS, images, PDFs)
     - Redirects
     - Send serialized data (JSON)

### ReSTful

- Convention that developers will follow when setting up endpoints on their server
  - Convention, not a rule and there's some ambiguity/wiggle room
- Typically routes/paths should reference collections of resources that are available on the server.
  - ex: `/players` to get a collection of all players in the database
  - ex: `/players/s134g` to get info on a specific player
  - ex: `/players/s134g/stats` to access a nested resource

### JSON

- Data format: one long string -> human readable, and it closely mirrors JS's syntax with Object
  - Key differences:
     - Double quotes (`"`) around every key
     - No trailing comma after last key: value pair
  - `JSON.stringify()` to turn JS into JSON
  - `JSON.parse()` to turn a JSON string into a JS object
