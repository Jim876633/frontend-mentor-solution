# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page
-   **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![](./screenshot/desktop.jpeg)

### Links

-   Solution URL: [Fontend mentor solution]()
-   Live Site URL: [Live site]()

## My process

### Built with

-   Semantic HTML5 markup
-   SCSS
-   Flexbox
-   CSS Grid
-   Mobile-first workflow

### What I learned

Use `grid-template-areas` to respond different media device layout.

```css
.main {
    grid-template-areas:
        "banner"
        "title"
        "info"
        "news"
        "reading";
}
@media (min-width: 768px) {
    .main {
        grid-template-areas:
            "banner banner news"
            "title info news"
            "reading reading reading";
        grid-auto-columns: 1fr;
    }
}
```
