# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-).

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
-   See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

-   Solution URL: [Fontend mentor solution](https://www.frontendmentor.io/solutions/use-flexbox-with-tailwindcss-tnqSGdPHP9)
-   Live Site URL: [Live site](https://jin-three-column-preview-card.netlify.app/)

## My process

### Built with

-   Flexbox
-   Mobile-first workflow
-   [Tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

Learn Tailwindcss.

```html
<div
    class="w-full bg-orange p-10 flex flex-col gap-5 items-start justify-between"
>
    <h1 class="text-3xl text-white font-big uppercase">Title</h1>
    <p class="text-gray/75 text-xs leading-5">Hello World !</p>
    <button
        class="rounded-full bg-white py-2 px-5 text-orange text-sm border-white border-2 sm:hover:bg-transparent sm:hover:text-white sm:mt-10"
    >
        button
    </button>
</div>
```
