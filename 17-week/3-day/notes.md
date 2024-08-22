# DOM Manipulation && Events

## Manipulating Attributes on Existing DOM Elements

- `Element.getAttribute()` - gets the current value of an attribute
  - Pass in the attribute name as a string
- `Element.setAttribute()` - sets the value of an attribute
  - Pass in the attribute name first, and then the value second as strings
- `Element.removeAttribute()` - deletes an attribute from an element
- `Element.style.CSSProperty` - Directly modify a CSS property
  - CSS Property names should be camelCased

## Creating and Removing DOM Elements

- `document.createElement()` - Creates a new HTML Element
  - Does not add the element to the DOM
  - Pass in an HTML tag as a string
- `Element.appendChild()` - Adds an HTML element as a child
- `Element.remove()` - Deletes an element from the DOM

## Events

Events are fired whenever something happens on the DOM, they don't have to be triggered by user activity - but they frequently are.

- **Click** - fires whenever a user clicks on an HTML element like a button
- **Input** - fires whenever the value of an HTML element changes, like when a user types into an input box or updates their choice in a dropdown menu.
- **Change** - fires on the same elements as the `Input` event, but only fires when the user has committed the change (clicked away from the input field)
- **Submit** - fires when a `<form>` is submitted
- **DOMContentLoaded** - fires when the initial HTML document has loaded, but before stylesheets, images, and other assets are done loading

### Event Listeners

We can "listen" for events and run JS code when those events occur.

```js
Element.addEventListener(eventType, callbackFunction)
```