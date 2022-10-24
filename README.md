# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-).

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

-   See hover states for all interactive elements on the page
-   See a live countdown timer that ticks down every second (start the count at 14 days)
-   **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](./public/screenshot/desktop.jpeg)

### Links

-   Solution URL: [Fontend mentor solution](https://www.frontendmentor.io/solutions/use-react-with-styledcomponents-VQXL1Qptiy)
-   Live Site URL: [Live site](https://jim-launch-countdown-timer.netlify.app/)

## My process

### Built with

-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Styled Components](https://styled-components.com/) - For styles

### What I learned

Use `ReactComponent` to import svg image with `styled-components`.
This way can change svg image color with path.

```js
import styled from "styled-components";
import { ReactComponent as Facebook } from "./icons/icon-facebook.svg";

const iconStyle = `
    margin-top: 3rem;
    cursor: pointer;
    transform: scale(0.9);
    path{
        transition: fill .5s;
        fill: var(--primary-blue);
    }
    &:hover path {
        fill: var(--primary-red);
    }   
`;

export const FacebookIcon = styled(Facebook)`
    ${iconStyle}
`;
```
