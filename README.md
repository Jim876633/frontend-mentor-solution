# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

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

-   View the optimal layout depending on their device's screen size
-   See hover and focus states for interactive elements

### Screenshot

![](/screenshot/desktop.jpeg)
![](/screenshot/mobile.jpeg)

### Links

-   Solution URL: [product-preview-card-component](https://github.com/Jim876633/frontend-mentor-solution/tree/product-preview-card-component)
-   Live Site URL: [live site](https://jim-product-preview-card-component.netlify.app/)

## My process

### Built with

-   CSS custom properties
-   Flexbox
-   Mobile-first workflow

### What I learned

use `<picture>` and `<sourece>` element to change image from diffent device.

```html
<picture class="imageBlock">
    <source
        media="(max-width: 375px)"
        srcset="./images/image-product-mobile.jpg"
        class="image"
    />
    <img
        src="images/image-product-desktop.jpg"
        alt="image-desktop"
        class="image"
    />
</picture>
```
