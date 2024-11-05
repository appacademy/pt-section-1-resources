# `M5W28D1`

# React Context

## What is Context

- A way to pass data through the component tree without explicitly passing props down manually at every level
- Not to be confused with `this`, like we did with classes

## The Problem Context Solves

When components become more and more nested, it can be difficult to manage state. Imagine you have a bunch of components nested within each other:

A -> B -> C -> D -> E

- If we have data in component A, but we need to get it to E, we need to pass props to a bunch of other subcomponents
- Allows us to create a more "global" state
- Can enter data into the context at any point, and access it at any point

This can effectively cut our route to be:

A -> E

This is particular useful for state management of render items like is a modal open, is the user signed in, or maybe if we want to manage multi-page forms data.

Imagine we are working with a multi-page form.

Component A: Ask about the user's name
Component B: Ask about the user's personal info
Component C: Ask about the user's job history
Component D: Ask about why they want to apply for this job
Component E: Ask HR background questions, and also submit the answers filled out from A - E.

We can pass all the data prop by prop. This can be known as "prop hell".

With context, we can do:

Component A: Ask about the user's name -> store it in context
Component B: Ask about the user's personal info -> store it in context
Component C: Ask about the user's job history -> store it in context
Component D: Ask about why they want to apply for this job -> store it in context
Component E: Ask HR background questions, and also submit the answers filled -> grab all the info from A - D that was stored in context and use it to send a form item to the backend

## The Problem Context Creates

- `useContext` uses `useState` under the hood
  - It makes it accessible outside of the component thru Providers
  - Effectively, it creates a closure around our components

- If we are modifying the state of our context, this means we will be causing rerenders
- If context is being used in different components, a rerender in one component can cause a rerender in all children components. 

In our multi-page component example, we can solve this by only mounting one component at a time. Then we do not have to worry about rerendering items that do not currently exist within the virtual DOM. But, if we were trying to add multiple components, and have all the form items shown within the same page (they are all mounted at the same time), then we have rerender all the components again. This is a very expensive process, and especially so if we have to iterate through list components. So be careful of how you manage your state!

## Context Additional Info

- We use context to manage the state of our application
- With the use of context and prop drilling, we can effectively pass data around and thus create single-page applications
- It only provides that "global" state to the items it wraps
- We will learn other state management libraries ie Redux
- It will be your job to figure out the right tool for the job

## How to use Context

Context is built with 3 things:

1. The Provider:

The provider gives values to all the components that are wrapped within it. We can wrap our entire applications, or maybe just segments (like a specific path from our router).

`provider` Docs: https://react.dev/reference/react/createContext#provider


```jsx
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Page />
    </ThemeContext.Provider>
  );
}

```


Notice that we create a state using `useState`. We can then use the `Provider` and pass in the value we want to be global (which is the useState item). We can also pass in the `setTheme` function if we want to be able to change the theme at a global level. Now, we want to notice that the `<Page>` component is nestled within the `Provider`. This means, we can only access the context of `theme` at the `App.jsx` level, or any sub level found within the `<Page>` component tree.

2. The Consumer:

Is a React component that reads a context's value. Consumer component must always be nested under Provider components because th Provider must render FIRST in order to pass that data down the tree. In other words, needs to exist before someone can talk to it.

`consumer` Docs: https://react.dev/reference/react/createContext

```js
useContext()// - consumes that global information (we can use it)
```

3. Context

Allows "global" data in a React application and stores a single value.

```js
createContext() // - creates a global object
```

`createContext` Docs: https://react.dev/reference/react/createContext

## Step by Steps

1. Create Context:

In a `Context` folder, you can add a file for contexts. We will be using "Theme" to change the light mode vs dark mode of the application at a site-wide level. We can make a file called `ThemeContext.js`

```js
import { createContext } from 'react';

const ThemeContext = createContext('light');
const AuthContext = createContext(null);
```


2. Make a context object

In some file we want to access context, we can create our functions that allow us to read the context.

```js
function Button() {
  const theme = useContext(ThemeContext);
}

function Profile() {
  const currentUser = useContext(AuthContext);
}
```


3. Wrap your context

In the component you want to inherit and wrap with context, in this example we will use `App.jsx`, we want to create a state for that context


```jsx
function App() {
  const [theme, setTheme] = useState('dark');
  const [currentUser, setCurrentUser] = useState({ name: 'Taylor' });

  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={currentUser}>
        <Page />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
```

4. Use the context within any subcomponent

For this example, we will assume we are within the `<Page>` component's sub tree. Maybe in some subcomponent file called `Header.jsx`

```jsx
// Header.jsx
import { ThemeContext } from './Contexts.js';

function Header() {
  const theme = useContext(ThemeContext); //grab the context based on the provider's value
  // ...


  return (
    <h1 className={theme}>Hello World</h1>
  )
}
```