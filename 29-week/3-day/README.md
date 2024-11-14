# `M5W29D3`

## Redux

- Lightweight JavaScript framework that is used to manage the frontend state of a web app
- Stores information that can be accessed from any component in our app (just like Context)
- Gives us access to powerful development tools to aid the dev & debugging process

---

### 3 Principles of Redux

- Single source of truth
  - Entire redux state is stored in a single POJO
- State is read only
  - State object is not modifiable directly, you must modify it by "dispatching actions"
- Changes are made with pure functions (no side effects)
  - A "reducer" is a pure function that will receive the dispatched actions and return the updated state

---

### Redux vs Context

- Context was made available after Redux was released
- Redux is generally used for larger-scale applications than what React Context can be used for
- Context is simpler and requires less boilerplate code
- Redux provides support for middleware, and dev tools that have more features

```js
// Context setup
import { createContext } from 'react';

export const MyContext = createContext();

// Redux setup
import { createStore } from 'redux';

export const MyStore = createStore();
```

---

```js
// Context setup
import { MyContext } from './context/MyContext';

const Root = () => {
    return (
        <MyContext.Provider value={{ ex: ample }}>
            <App />
        </MyContext.Provider>
    );
};

// Redux setup
import { Provider } from 'react-redux';
import { MyStore } from './store';

const Root = () => {
    return (
        <Provider store={MyStore}>
            <App />
        </Provider>
    );
};
```

---

### Redux Terms

- Store
  - JavaScript object that has a few methods, `getState()`, `dispatch(action)`, `subscribe(listener)`
  - Responsible for handling Redux state
  - Store returns the current state
  - READ-ONLY
  - `createStore` takes three arguments:
    - `reducer`
      - Allows the store to be updated
      - Mandatory
    - A "starting" state
      - Anything you want to exist in the state by default
      - Optional
    - An enhancer function
      - Allows us to use cool developer tools and features
      - Not something we'll ever have to setup on our own
      - Optional

```js
import { createStore } from 'redux';

const store = createStore(reducer, preloadedState, enhancer);
```

---

- Actions
  - POJO that has a `type` property (optional `payload` property)
  - Actions are used to update the store
  - Actions are "dispatched", send updates to the store, so that the store can update the state
  - Generally user actions trigger actions
  - Action creators are used to dynamically pass in information to the store

```js
const SET_GAMES = "game/SET_GAME"
const ADD_GAME = "game/ADD_GAME"

const setGames = (data) => {
  return {
    type: SET_GAMES,
    payload: data
  }
};

const addGame = (data) => {
    return {
        type: ADD_GAME,
        payload: data,
    };
};
```

---

- Dispatch
  - Communicates with the store by "dispatching" an action, which is taken in by reducer
  - Can use dispatch method on store but will be using useDispatch() hook

```js
import { createStore } from 'redux';

const store = createStore(reducer, preloadedState, enhancer);

store.dispatch(someAction);
```

---

```js
import { useDispatch } from 'react-redux';
import { addCat } from 'the/cat/example';

const CatComponent = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(addCat('Meowth'))}>
                Add a cat named Meowth!
            </button>
            <button onClick={() => dispatch(addCat('Jiji'))}>
                Add a cat named Jiji!
            </button>
        </div>
    );
};
```

---

- Reducer
  - Function that is invoked when a action is dispatched (only function to actually change store)
  - Receives an action and the current redux state as arguments, and then returns an updated state
  - Is required to be a pure function

```js
const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_GAMES:
            return [...state, ...action.payload];
        case ADD_GAME:
            return [...state, action.payload];
        default:
            return state;
    }
};
```