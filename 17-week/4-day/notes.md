# The Biggest Event Of Your Life

Events are _**things that happen on a page**_

Allow us to keep track of a user's interaction with our webpage

## Event Listener Structure

- `thingToWatch` **_._** addEventListener( `"eventToWaitFor"`, `functionToRun`(`theEvent`) )
- `theSameThing` **_._** removeEventListener( `"sameEvent"`, `sameFunction`(`theEvent`) )

```js
document.addEventListener("DOMContentLoaded", (event) => {
  // All sorts of stuff
});
```

## Too many events to memorize...so here's [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)

Some common events include:

- DOMContentLoaded
- click
- mouseover
- submit
- input
- change
- focus

**Note:** event strings are _case sensitive_

## `event.target` vs `event.currentTarget`

`event.currentTarget` refers to the element where the Event Handler has been **_attached_**

`event.target` refers to the element where the event has **_occurred_**

- This could be a descendent (child element)

Because of this, **_event bubbling_** can occur, causing unwanted behavior

```html
<!-- scratch.html -->
<div id="outer" class="blue">
  <div id="inner" class="red"></div>
</div>
```

```js
// scratch.js
const blue = document.getElementById("outer");

blue.addEventListener("click", (e) => {
  // if we click on the red square
  console.log(e.target.className); // red
  console.log(e.currentTarget.className); // blue
});
```

### To stop this, we have `event.stopPropagation()`

```js
const red = document.getElementById("inner");
red.addEventListener("click", (e) => {
  e.stopPropagation();
  // clicking on red no longer does anything
});
```

---

## Hey...don't do that

Sometimes, we want to do something different than an event's default behavior. That's where `event.preventDefault()` comes in.

Commonly used with forms, can stop any default behavior from happening.

```html
<!-- scratch.html -->
<label
  >Haha you can't click me
  <input id="unclickable" type="checkbox" />
</label>
```

```js
// scratch.js
const check = document.getElementById("unclickable");

check.addEventListener("click", (e) => {
  e.preventDefault();
});
```

## Data on elements

We can set variables on elements to hold data

Has some strange formatting and automatic case conversion:

- In JS

  - Access through `element.dataset`
    - Key is camelCased
      - `element.dataset.name`
      - `element.dataset.firstName`
  - Or access through `element` `.getAttribute()`/ `.setAttribute()`
    - Follows HTML rules

- In HTML
  - Always begins with `data-`
  - Key is kebab-cased & lowercase
    - `data-name`
    - `data-first-name`

### Both of these

```js
div.dataset.whateverWeWant = "Our data";
```

```js
div.setAttribute("data-whatever-we-want", "Our data");
```

### Results in this

```html
<div data-whatever-we-want="Our Data"></div>
```
