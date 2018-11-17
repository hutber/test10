# FED Test

## Task
Build an idea board that allows a user to create new ideas, edit existing ideas or delete them. Each idea should be represented as a tile on the board that displays a title, description and created/updated time. The title and description should be editable inline. The description text should have a max length of 140 characters. There should also be a button on the tile that allows for it to be deleted.

### Required
* Page should be fully responsive.
* Each idea tile should contain a title and description, which is editable, as well as created/updated time.
* New ideas should have the title field focused to prompt user to begin typing.
* Add the ability to sort ideas by creation date or alphabetically.

### Stretch
* Utilise the localStorage API to persist current state when the page is refreshed.
* Add a character countdown as the user is approaching the limit of their description text.
* Add an unobtrusive notification when an update is made to a tile.

## Getting started
`yarn start` will run a development server on `http://localhost:3000`.  
`yarn test` will run the suite of tests created.