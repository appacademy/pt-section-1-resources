# Fetch

[<img src="https://compote.slate.com/images/e5e29239-a786-431d-b285-3e4640f6c20b.png" width=420>](https://compote.slate.com/images/e5e29239-a786-431d-b285-3e4640f6c20b.png)

## Background and Context

Back in the days of the dinosaurs and dial-up internet, most websites were fairly straightforward:

1. Navigate to a website in a browser
2. Web browser would make requests to a server
3. Server sends back an entire HTML page

This was functional, but limiting when websites started adding interactivity

- Imagine liking a photo on IG and the entire page reloading:

1. Your browser would send a request to the Meta servers to mark a specific photo as "liked"
2. The server would save this update to Meta's databases
3. The server prepares the entire page's HTML again, but this time the little 💖 under the photo is colored in.
4. Your browser would have to load up the entire newly-received HTML document just to show the updated "like" status.

### AJAX

- Stands for "Asynchronous JavaScript and XML"
- When a change happens, the server is no longer responsible for updating the HTML and then sending the entire HTML document back.
- Instead, the server would send back data about the change the website could then process that data and update the HTML on the page accordingly.
- UX > 9000
- Built on JavaScript -> Lead to the creation of jQuery (super popular library) and eventually Single Page Applications

## Fetch API

- Used to make **HTTP requests** on the browser
- Built into all major browsers (introduced into Node in v18)

### Using fetch()

- The `fetch` function has 2 parameters: `url` and an `options` object
  - `url` is the only required parameter and it's the url to which we are sending the request
    - If we only include the `url` parameter, it will make a GET request to that URL
  - `options` is an object and is optional
    - It is used to define other components of the HTTP request, like the `method`, `headers`, and `body` of the request.
- The `fetch` function returns a **Promise** that gets fulfilled when we get a response back from the server.
  - The resolved value of the returned **Promise** is a [fetch Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response) containing information about the response