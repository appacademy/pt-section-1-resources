# Request & Response Cycle + Servers

- Request/response cycle is stateless, meaning that each request is handled in isolation, and it has to contain all the relevant information

## Request

- Requests come from the client (users on chrome, phone, etc)
- Requests are sent in packets, so if we want to parse the body of a request, we have to wait for all the packets

### Request Components

1. Method + URL (endpoint) + HTTP version-> 1st line/ Request line
2. Headers
   - Content-Type
3. Body
   - Most often on POST + PUT/PATCH, GET & DELETE usually don't have a body

## Response

- Responses are coming from the server

### Response Components

1. Status
2. Headers
   - Content-Type
   - Location (redirect)
3. Body

## Server

- A program connected to the internet/network and it listens for requests and formulates a response to the request.

### What can they do?

- Serving static assets
  - static assets are just files that don't change: CSS, JS, images, PDFs, HTML
- Matching requests to an appropriate response
- HTML Templating


Route handlers:

- Match the request method (HTTP VERB) + route (path, uri, url)
- inside of route handlers -> format response in there
