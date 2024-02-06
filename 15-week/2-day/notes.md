# M3-W15-D2

- Server Basics
- HTTP Basics
- Request Response Cycle
  - Request Components
  - Response Components
- (ReST)ful Routes

## General Reminders

- Cameras should be on at all times. You can turn them off for short periods of time (less than 5m) if there is something going on at home that needs to not be on video. 
- Follow the question asking guidelines that Kate pinned to the questions channel. 
- Don't come into the staff breakout room.

## Note on the days structure

Todays content is primarily discussion based, so really dig into the why and talk about different options and reasonings with your pair and during whole class discussions. Remember, you only get out what you put into the program :)

## What is a Server? 

A server is a program that runs on a computer somewhere.

It's purpose is to run continously and to listen to a location on the network
for client requests.

Once it recieves and processes a request it sends back data as a response.

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
is slower but lossless because it allows retratransmission of lost packets.
Wheras UDP is faster, simpler, and more efficient, but it isn't lossless. 

There are advantages and disadvantages to both protocols. UDP is great for streaming,
VoIP, video conferencing, and other applications that prioritize transmission
speed over fidelity. 

For now all you need to know is that HTTP is a reliable protocol because it uses TCP connections, you know that all of your data is guaranteed to get to the other end of the connection.

**Stateless Transfer:**

Each request/response cycle is fully independent, meaning all you need to deal with a request is fully contained in that request, however it also means that you cannot use the request/reponse cycle to manage persistency. 

Things like user credentials, whether someone is logged in, and saved settings all need to be managed seperately from the request/response cycle.

### HTTP Verbs

There are other HTTP verbs but these are the most common and the ones you will mostly need to work with.

- GET: Read
- POST: Create
- PUT: Update (Full)
- PATCH: Update (Partial)
- DELETE: Delete

An classic HTML Web Server can only have GET or POST methods due to the limitations of the form element.

## Request/Response Practices (Paired, 30m)

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

## HTML Web Server RESTful Endpoints (Paired, 15m)

## Postman Requests (Solo, 20m)

## HTTP Basics Long Practice

This practice is focusing on documenting an API.

You are given a functional server to test.

You will be adding your guesses to `documentation.md` and then testing the route using Postman to check to see if you were right or wrong.

### Example

#### Ask for a page that doesn't exist

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

