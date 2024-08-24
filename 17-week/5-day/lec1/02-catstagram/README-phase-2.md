# Catstagram, Phase 2: Add Interactivity To The Page

Today, you will be adding some interactivity and complexity to your Catstagram
app using event listeners.

## Setup

**Note: Make sure everything from Phase 1 is working before starting Phase 2.**

Run `node app.js` from the root directory to start the server that will serve
the static assets in the practice. Navigate to [http://localhost:5000] in your
browser to see the __public/index.html__ file rendered.

## Instructions

First, add a button that requests and displays a new cat image, replacing the
original image.

Second, for the active image, allow the user to upvote/downvote the image and
display the score (upvotes - downvotes).

Third, allow the user to add comments to the image. You want to access the value
of the comment input field and append a new element representing the comment.

Whenever a new image is requested, the upvotes and comments should be reset.

The final product should at the very least match __wireframes/phase-2.png__. If
you finish early, try to implement a delete comment feature!

By this point, your code could be getting a little bit messy within
__index.js__. Try DRYing up your code. Keep the Single Responsibility Principle
in mind.

[http://localhost:5000]: http://localhost:5000
