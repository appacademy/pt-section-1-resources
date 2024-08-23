# Events Pt. II 😎🤏🕶😳

The second parameter, the callback function, of the `.addEventListener()` method accepts a single parameter: an object based on the Event class describing the event that has occurred, and it returns nothing.

## Event Propagation

 We can think about Javascript events and their handlers as bubbles that rise up through the levels of the DOM until they reach the root or top level of the DOM tree.

- When an event happens on an element, it first runs the event handlers on it, then on its parent, then all the way up on other ancestors
- You can stop bubbling within an event handler by using the [event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) method.

## Preventing Default Event Behavior

- Some events have a default behavior associated with them
  - Ex: Submitting a form causes the page to reload
- We can use the [event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method to stop this from occurring
