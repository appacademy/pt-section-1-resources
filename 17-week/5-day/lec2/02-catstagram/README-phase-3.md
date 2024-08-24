# Catstagram, Phase 3: Store The Application State In Web Storage

Your Catstagram app from Phase 2 will reset every time you reset the page. In
Phase 3, you will store the state of the application so the data does not reset
every time you reload the page.

## Setup

**Note: Make sure everything from Phase 2--except deleting comments--is working
before starting Phase 3.**

Run `node app.js` from the root directory to start the server that will serve
the static assets in the practice. Navigate to [http://localhost:5000] in your
browser to see the __public/index.html__ file rendered.

## Instructions

Store the state of the information about the current image, the upvote counter,
and the comments in `localStorage`.

Doing this prevents an accidental refresh from replacing the cute kitty you were
just looking at. This means that whenever the page loads, you will have to check
`localStorage` to see if there was a previous image and render the page with
that image data instead. If it is the first time the user is accessing the page,
you should load a fresh image.

By the end of Phase 3, you should have the following features implemented:

- An image should load when a user arrives on Catstagram.
- If users want to fetch a new kitten image, then clicking the 'New Pic' button
  should load a new image.
- The user can upvote and downvote the kitten image.
- The user can create a comment. When a comment is created, it gets appended
  below all the other existing comments.

Great job on implementing all the core features of Catstagram!

[http://localhost:5000]: http://localhost:5000
