# Wild Sliding Puzzles
Developer: Georgina Carlisle

Responsive image

Project Description

Link to live page - This project is currently under construction

## Contents
[Features](#features)

[Design](#design)
- [The Strategy Plane](#the-strategy-plane)
- [The Scope Plane](#the-scope-plane)
- [The Structure Plane](#the-structure-plane)
- [The Skeleton Plane](#the-skeleton-plane)
- [The Surface Plane](#the-surface-plane)

[Testing and Validation](#testing-and-validation)

[Bugs and Fixes](#bugs-and-fixes)

[Deployment](#deployment)

[Languages](#languages)

[Tools and technologies](#tools-and-technologies)

[Credits](#credits)

[Acknowledgements](#acknowledgements)

## Features

### Existing Features

[Return to contents list](#contents)

### Future Features

[Return to contents list](#contents)

## Design

### The Strategy Plane

#### Users
The target audience enjoy solving puzzles. They may also be interested in wildlife, nature and our ‘Wild Isles’.

-	As a first-time user, I would like it to be immediately clear what sort of puzzle this is, and it’s theme.
-	As a first-time user, I would like clear instructions. These instructions should be accessible at all points without disrupting the puzzle.
-	As a first-time user, I want the controls for the puzzle to be clear and easy to use.
-	As a user, I want the puzzle to be achievable but still provide a level of challenge. The level of challenge should allow me to feel a sense of achievement on completion.
-	As a user, I want clear feedback when the puzzle has been completed.
-	As a user, I would like the option to choose a different puzzle.
-	As a user, I would like the option for sound effects and/or music to accompany the game.
-	As a user who is finding the puzzle difficult, I would like to be able to gain some extra help so that I can complete the puzzle. 
-	As a user who has completed a puzzle, I would like the option to play again. 
-	As a user who has completed a game, I would like to be shown a different puzzle on each subsequent game.
-	As a user who has completed multiple games, I would like to know once I have completed all available puzzles.

#### Owner

The owner is looking to:
- Provide a fun and enjoyable puzzle that will engage users.
-	Promote UK wildlife and wild landscapes and the work being done through the ‘Wild Isles’ project.
-	Provide users with information about some of our incredible wildlife and what is happening right now. 
-	Provide a link into further information about our ‘Wild Isles’ including how the user can help to make a difference.

[Return to contents list](#contents)

### The Scope Plane

The scope for this project explores the requirements of both user and owner, and how these could be met. Following an agile approach, the project features have then been split into sprints. The first sprint aims to keep time and other resources to a minimum whilst ensuring that the project is viable and provides enough value and an excellent user experience that will leave early users keen to return.

| Requirement | Feature | sprint |
| -- | -- | -- |
| Fun and enjoyable puzzle | 1. Functioning sliding puzzle | 1st - single puzzle, 2nd onwards - more puzzles added |
| Promote UK wildlife and wild landscapes and the work being done through the ‘Wild Isles’ project | 2. Short introductory paragraph on the landing page | 1st |
| | 3. Link to the ‘Wild Isles’ project in the footer | 1st |
| | 4. Images of UK wildlife used for the puzzles | 1st |
| | 5. Link to the ‘Wild Isles’ project on the win page | 2nd |
| | 6. Further information about the picture subject on the win page | 2nd |
| Immediately clear what sort of puzzle this is, and its theme | 7. Page title: Wild Sliding Puzzles | 1st |
| | 8. Static Image of a jumbled sliding puzzle on the landing page | 1st |
| | 9. Design of favicon | 1st |
| | Also see features 2 and 3 | 1st |
| Clear instructions that are accessible at all points without disrupting the puzzle | 10. Clearly visible button to access the instructions on both the landing page and the game page. Instructions are then displayed in a pop-up window. | 1st |
| Controls for the puzzle to be clear and easy to use | 11. Clicking on a movable tile will give feedback and cause the tile to slide into the empty space | 1st |
| | 12. Hovering over a movable tile will give feedback to the user to indicate it can be moved | 1st |
| | 13. Clicking on an immovable tile will give feedback to indicate it cannot be moved | 2nd |
| | 14. Keyboard arrows can be used to slide a tile corresponding to the direction of arrow pressed. | 3rd |
| | 15. Clicking a keyboard arrow that doesn’t correspond to a movable tile will give feedback to indicate it cannot be moved. | 3rd |
| Puzzle to be achievable but still provide a level of challenge. The level of challenge should allow me to feel a sense of achievement on completion | 16. Pre-set scramble settings to ensure that the puzzle is solvable | 1st |
| | 17. Addition of a stopwatch to allow for personal challenge, how fast can you solve the puzzle? OR Addition of a set amount of time in which to complete the puzzle with easy, medium and hard settings. | 3rd |
| Clear feedback when the puzzle has been completed | 18. Win message given on completion of the puzzle | 1st |
| | 19. Completion of the puzzle loads a win page. Also see features 5 + 6 | 2nd (replaces feature 18)|
| | 20. Celebratory audio to play on completion of the puzzle | 3rd |
| Option to choose a different puzzle | 21. Clearly visible button on the game page will reset the page with a different scrambled image | 2nd |
| Option for sound effects and/or music to accompany the game | 22. Positive sound effect/slide sound effect on clicking a movable tile. Negative sound effect on clicking an immovable tile. User control to mute | 3rd |
| | 23. Background music. User control to play | 3rd |
| Extra help for the user if needed | 24. Clearly visible button on the game page will display tips in a pop-up window | 1st |
| | 25. Clearly visible button on the game page will display an image of the completed picture | 1st |
| Option to play again | 26. Win message (feature 18) comes with an option to play again | 1st |
| | 27. Clearly visible button that resets the game page with a different scrambled image. Available on the win page (feature 20) | 2nd (replaces feature 26) |
| A different puzzle on each subsequent game | 28. Multiple puzzle images available with logic in place to ensure user is given a different puzzle on each subsequent game | 2nd |
| Feedback to user when they have completed all available puzzles | 29. Extra message on Win page once user has cycled through all available puzzles. Option to reset and play the puzzles again | 2nd |
| Provide users with information about some of our incredible wildlife and what is happening right now | see features 4, 6 + 20 | 2nd |
| Provide a link to further information about our ‘Wild Isles’ including how the user can help to make a difference | See features 3 + 5 | 1st (3) and 2nd (5) |

[Return to contents list](#contents)

### The Structure Plane

Wild Sliding Puzzles will consist of two pages initially – A landing page and a puzzle page. A win page will be added as part of the 2nd sprint. 

The following pop-ups will also be created to house extra information, which can then be viewed without disrupting the puzzle: Instructions, Tips and Sneeky Peek (image of completed puzzle).

Navigation will be provided through clearly visible buttons and a footer will be placed at the bottom of all pages.

#### Site architecture

Landing Page
-	Wild Sliding Puzzles title
-	Short intro about UK wildlife
-	Introduction to the puzzle
-	Static Image of a jumbled sliding puzzle
-	Button to take user to the puzzle page
-	Button to bring up instructions pop-up
-	Footer with developer details and link to the ‘Wild Isles’ project

Puzzle Page
-	Wild Sliding Puzzles title
-	Sliding puzzle game 
-	Button to change the puzzle (2nd Sprint)
-	Button to bring up tips pop-up
-	Button to bring up sneeky peek pop-up
-	Button to bring up instructions pop-up
-	Footer with developer details and link to the ‘Wild Isles’ project

Win Page (2nd Sprint)
-	Wild Sliding Puzzles title
-	Information linked to the subject of the puzzle that has been solved
-	Button to play again
-	Button to take user to the ‘Wild Isles’ website, external link

[Return to contents list](#contents)

### The Skeleton Plane

The following wire frames show the intended design of each of the three pages when viewed on a smart phone and on a desktop computer.

#### Landing Page

![Wire frame showing the landing page on a smart phone](documentation/wireframes/landing-page-mobile.png)

![Wire frame showing the landing page on a desktop computer](documentation/wireframes/landing-page-browser.png)

#### Puzzle Page

![Wire frame showing the puzzle page on a smart phone](documentation/wireframes/puzzle-page-mobile.png)

![Wire frame showing the Puzzle page on a desktop computer](documentation/wireframes/puzzle-page-browser.png)

#### Win Page (2nd Sprint)

![Wire frame showing the win page on a smart phone](documentation/wireframes/win-page-mobile.png)

![Wire frame showing the win page on a desktop computer](documentation/wireframes/win-page-browser.png)

#### Pop-ups

The following wireframes show the instructions pop-up when activated from the puzzle page. The Tips and Sneeky Peek pop-ups will be very similar.

![Wire frame showing the instructions popup on a smart phone](documentation/wireframes/instructions-popup-mobile.png)

![Wire frame showing the instructions popup on a smart phone](documentation/wireframes/instructions-popup-browser.png)


[Return to contents list](#contents)

### The Surface Plane

[Return to contents list](#contents)

## Testing and Validation

Link to testing.md

[Return to contents list](#contents)

## Bugs and fixes

[Return to contents list](#contents)

## Deployment

[Return to contents list](#contents)

## Languages

[Return to contents list](#contents)

## Tools and Technologies

[Return to contents list](#contents)

## Credits

[Return to contents list](#contents)

## Acknowledgements

Sean from Code Institutes tutor support - For helping me to find the best way to prevent the tileSwap function from activating until the slide animation was complete. For also pointing out a future bug and the need to also prevent the click event listener from calling the tileClicked function until the tile slide and swap had completed.

### Websites, articles and tutorials

[A Complete Guide to CSS Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - My knowledge and understanding of CSS grid and how to use it was picked up from this article.

[grid-area - mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area) - I gained further understanding of the grid-area property and how to use correctly from this article.

[How to Aspect Ratio - W3 Schools](https://www.w3schools.com/howto/howto_css_aspect_ratio.asp) - I used this article to find a way to set the height of my grid boxes relative to the width so that the box had an aspect ratio of 1:1.

[JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) - I learnt how to pass on a parameter as part of the eventlistener through this article.

[Asynchronous JavaScript - W3 Schools](https://www.w3schools.com/js/js_asynchronous.asp) - I found this article helpful in understanding how to implement the TimeOut method.


[Return to contents list](#contents)
