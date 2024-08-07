# M3-W15-D2

> ## Helpful Links <br>
> [MIME Types](https://www.iana.org/assignments/media-types/media-types.xhtml#application)<br>
> [MDN Mime Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)<br>
> [MDN HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)<br>

---

- Server Basics
- HTTP Basics
- Request Response Cycle
  - Request Components
  - Response Components
- (ReST)ful Routes

## What is a Server?

A server is a program that runs on a computer somewhere.

It's purpose is to run continuously and to listen to a location on the network
for client requests.

Once it receives and processes a request it sends back data as a response.

Examples:

- Navigating to google.com
- Liking a post on twitter
- Adding an item to an amazon shopping cart
- Viewing an amazon shopping cart

## HTTP Basics


### HTTP

**HyperText:** Content with references to other content.

(HT)ML, HyperText Markup Language allows us to send content over the internet
and allow that content to reference everything else. CSS pages, JS pages,
images, ect are all included by reference in our HTML. Content that references
other content.

**Transfer Protocol:** The specifications for sending the hypertext from point a
to point b.

The transfer protocol defines the rules of what format a client request and
server response should
take, what should and should not be included, how it could fail, ect.

### Properties of HTTP

**Reliability:**

There are two main protocols that allow for data transmission
TCP and UDP, what they are doesn't matter much at the moment. Just know that TCP
is slower but lossless because it allows retransmission of lost packets.
Whereas UDP is faster, simpler, and more efficient, but it isn't lossless.

There are advantages and disadvantages to both protocols. UDP is great for streaming,
VoIP, video conferencing, and other applications that prioritize transmission
speed over fidelity.

For now all you need to know is that HTTP is a reliable protocol because it uses TCP connections, you know that all of your data is guaranteed to get to the other end of the connection.

**Stateless Transfer:**

Each request/response cycle is fully independent, meaning all you need to deal with a request is fully contained in that request, however it also means that you cannot use the request/response cycle to manage persistency.

Things like user credentials, whether someone is logged in, and saved settings all need to be managed separately from the request/response cycle.

## Request/Response Components

### Request Overview

Made up of the following information:

- **Request-line**
  - the method, indicated by an HTTP verb,
  - the `URI` (Uniform Resource Indicator) that identifies what has been requested
  - The `HTTP` version you want to use (Usually `HTTP`/1.1 or `HTTP`/2)

- **Headers**
  - key/values that define metadata needed to process the `request`

- **Body**
  - extra information
  - usually form data or files
  - used with the `Content-Type` header

### Content-Type Header

- **defines details about the body of the request**
- lets the server know the format of the body data and how to process it
- values are MIME Types (Media Types)

<img src='https://raw.githubusercontent.com/appacademy/SWEO-Part-Time-Resources/2022-May-E/3-Module/3-week/2-day/lecture/pics/mimetypes.png' width='500'>

### HTTP Verbs (Methods)

- Determine the **`CRUD`** operation of the request
  - `Create` - create new resources
  - `Read` - get resources from database
  - `Update` - change a resource
  - `Delete` - remove a resource

### Most commonly used verbs

- `GET`
  - Used for **retrieving resources**
  - When you go to a link, the browser makes a `GET` request
  - **Typically does not have a body**
- `POST`
  - Used for **creating new resources**
  - When you submit a form, the browser makes a `POST` request
  - **Can have a body**, usually containing form data
- **`PUT`**
  - used to **update a resource**
  - will contain the **ENTIRE resource** you'd like to update
  - **Can have a body**, usually containing all information about that resource including the updated information
- **`PATCH`**
  - also used to **update a resource**
  - very similar to PUT requests, but do not require the entire resource
  - **Can have a body**, usually containing the single thing you want to update
- **`DELETE`**
  - **destroys resources** on the server
  - **can have a body**, but typically will not.

---

## **HTTP Responses**

---

Made up of the following information:

- `Status`
  - First line in the `response`
  - Includes the `http version` and the `Status-Code`.
- `Headers`
  - Work identically to those on requests
  - Establish metadata that the client might need to process the response
- `Body`
  - contains the resource that was requested

### Status Codes

- 3 digit numeric representation of a server `response`
- grouped by the first digit (all Informational codes begin with 1, all error codes begin with 4, etc.)

- **`100-199`**
  - Informational Codes
  - Let the client know the req was rec'd
  - Provide additional info from server
  - Unlikely to see them

- **`200-299`**
  - Successful Codes
  - Indicate the request has succeeded
    - `200 OK`
      - `Request` rec'd and fulfilled.
      - usually come with a body containing the requested resource
      - Most common `response` period, expected from `GET` requests
    - `201 Created`
      - `Request` rec'd and a new record was created as a result
      - Most common response to `POST` requests

- **`300-399`**
  - Redirection Codes
  - Lets the client know there has been a change in the location (URL Path) and redirects the user there
    - `301 Moved Permanently`
      - Requested resource is in a totally new location
      - usually redirects you to the new location
    - `302 Found`
      - requested resource is temporarily in a new location
      - usually redirects to the temp location

- **`400-499`**
  - Client Error Codes
  - indicate a problem with the request
    - `400 Bad Request`
      - Server couldn't understand your request
    - `401 Unauthorized`
      - Resource may exist, but you're not allowed to see it without authentication
    - `403 Forbidden`
      - Resource may exist, but you're not allowed to see it at all. (don't have the correct permissions)
    - `404 Not Found`
      - Resource doesn't exist

- **`500-599`**
  - Server Error Codes
  - Request was good, but the server couldn't respond as expected
    - `500 Internal Server Error`
      - Request was rec'd but the server couldn't process it
    - `504 Gateway Timeout`
      - Request was rec'd but the server didn't respond in a reasonable amount of time

## ReSTful Routes

ReST: Representational State Transfer

Comes from the idea that a server should have a representation of a resource, which allows for actions that will change the state of that resource and respond with another representation of the resource.

Rest is a convention for defining endpoints in a way that makes them easily understandable by other developers.

### Routes vs Endpoints

Endpoint `GET /users`, Route `/users`

Endpoint `POST /users`, Route `/users`

A route is a URL path for a request, an endpoint is a route and HTTP verb combination.

### Collection vs Singular Routes

`/posts` could reference a collection of posts

`/posts/:id` could reference a singular post in the posts collection

`/my/posts` could reference a collection of posts owned by the logged in user

`/users/:id/posts` could reference a collection of posts owned by a singular user

## HTTP Basics Long Practice

This practice is focusing on documenting an API.

You are given a functional server to test.

You will be adding your guesses to `documentation.md` and then testing the route using Postman to check to see if you were right or wrong.

### Example

### Ask for a page that doesn't exist

1. Fill in these sections
2. Test a route that doesn't exist
3. Think about why you were right/wrong
4. If needed edit your guesses

Request components:

- Method: GET
- URL: /any-route-that-doesnt-exist
- Headers: none
- Body: none

Response components:

- Status code: 404
- Headers:
  - Content-Type: text/html
- Body: "Page Not Found" HTML Page
