# `M5W27D3`

## React Router

### Frontend vs Backend Routes

### Backend

-   Routes that you will hit from within your code
-   If the route begins with `/api`, it's a backend route
-   Generally a user will NEVER directly interact with backend routes
-   We used Express to implement backend routes

### Frontend

-   Routes that your users will hit in their browser
-   Can follow any route pattern you decide for your own organization
-   Hitting a frontend route will often trigger one or more calls to backend routes
-   We'll be using React Router to implement frontend routes

## BrowserRouter

Much like props, we "pass down" the ability to navigate to routes

- Routes we create must be passed through a RouterProvider component
- We can create a browser router with the built in function from the package react-router-dom ```createBrowserRouter```
    - We pass in an array of router objects that determine the path, and the element to render
    - We can also add a children key with an array of router objects to create nested routes

```js
// many different setups/locations for this code
const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <Home />
        },
        {
            path:'students',
            element: <Students /> //route would be localhost:5000/students
            children:[
                {
                    path:':id'
                    element: <StudentDetails /> // nested route at /students/:studentId
                }
            ]
        },
        {
            path: 'friends', // route would be localhost:5000/friends
            element: <FriendsList />
        }
    ]
)

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} /> // We pass the router we created into the router provider as a prop. This is how we are able to access these routes in our application.
    </div>
  );
}
```

- When the user goes from Home to Friends, we just switch to display the `<FriendsList />` component.
- This is a rerender, and no reloading is required! (Client-side rendering vs Server-side rendering)
- Like Express, `Route` pattern matches the path and serves the component that matches
- React Router will automatically rank all routes based on specificity ie segments, static vs dynamic segments, etc

```js
<Route path="/teams/:teamId" />
<Route path="/teams/new" />
```

- Unlike Express, `Route` is able to show all the components if the initial route's component has an ```<Outlet />``` component
- `Outlet` component is telling the route to keep searching for matches after it found the initial match

Let's say we had this setup:

```js
// Home.js
import { Outlet } from "react-router-dom";
...
return (
	<h1>This is the homepage</h1>
    <Outlet /> //This component will allow the router to keep searching for routes after it matches the initial url.
)

// LoginForm.js
...
return (
	<h1>This is the login form</h1>
)
```

Going to `/` in the browser would show

```md
This is the homepage
```

But going to `/login` in the browser would show

```md
This is the homepage
This is the login form
```

This is because `/` and `/login` both have the path pattern of `/`

### To prevent this behavior, we can omit the ```<Outlet />``` component from the home component.

```jsx
    function Home(){
        return(
            <h1> Home page</h1>
        )
    }
```

Now `/` looks like

```md
This is the homepage
```

And `/login` looks like

```md
This is the login form
```

## Route Parameters

Also just like Express, React gives us easy access to route params.

Unlike Express, we have to import a function (hook) to access them

```js
// Express
const { userId } = req.params;

// React
const params = useParams(); // 'params' can be 'banana'
const { userId } = params;
```

The route setup is also just like an Express route

```js
        {
            path:'students',
            element: <Students /> //route would be localhost:5000/students
            children:[
                {
                    path:':id'
                    element: <StudentDetails /> // nested route at /students/:studentId
                }
            ]
        }
```

## `useHistory()` PRE 6.4 vs `useNavigate()`

Another way to handle page redirection

Two main methods:

```js
import { useHistory } from 'react-router-dom'; // Pre 6.4


const Example = () => {
    const history = useHistory(); // Pre 6.4

    const clickFunc = () => history.push('/path/to/redirect/to');
    const otherClickFunc = () => history.replace('/path/to/redirect/to');
};
```

Think of your page history like an array or a stack, with each new page being added to the end of the array

```js
// Browser's history array
const chromeWebHistory = ['...', 'reddit.com', 'youtube.com'];
```

The last element in the array is the page we're currently on

`history.push()` adds to the end of the array, changing the page we're currently on

```js
// Starting history
['reddit.com', 'youtube.com'];

history.push('developer.mozilla.org');

// Ending history
['reddit.com', 'youtube.com', 'developer.mozilla.org'];
```

Now we're on MDN, and clicking the back button will take us to Lofi music

`history.replace()` replaces the end of the array, changing the page we're currently on

```js
// Starting history
['reddit.com', 'youtube.com'];

history.replace('developer.mozilla.org');

// Ending history
['reddit.com', 'developer.mozilla.org'];
```
Now we're on MDN, and clicking the back button will take us to Reddit

## `useNavigate()`
```js
import { useNavigate } from 'react-router-dom';

const Example = () => {
    const navigate = useNavigate();

    const clickFunc = () => navigate('/path/to/redirect/to');
    const otherClickFunc = () => navigate('/path/to/redirect/to', {replace : true}); //optional object to replace the latest address in history array
    const anotherClickFunc = () => navigate(-1) // can input numbers to tell the browser to take a number of steps through the browser history. In the case of -1, it is essentially telling the browser to go back one page.
};
```

|  | useHistory (pre 6.4) | useNavigate (current standard) |
| ------------- | ------------- | ------------- | 
| Adding to history   | history.push()   | navigate() |
| Going back in history   | history.goBack()   | navigate(-1) |
| Replacing history | history.replace() | navigate("your/path", { replace: true })