# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

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

-   View the optimal layout for each of the website's pages depending on their device's screen size
-   See hover states for all interactive elements on the page
-   View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpeg)

### Links

-   Solution URL: [Fontend mentor solution](https://www.frontendmentor.io/solutions/space-tourism-multipage-website-Zc439QZ95s)
-   Live Site URL: [Live site](https://jim-space-tourism-website.netlify.app/)

## My process

### Built with

-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [React Router](https://reactrouter.com/en/main) - React library
-   [Styled Components](https://styled-components.com/) - For styles
-   [Framer Motion](https://www.framer.com/motion/) - For animation

### What I learned

-   Framer-motion layoutId

```jsx
<li key={category}>
    <CategoryButton
        type="button"
        title={category}
        active={activeCategory === category ? "active" : ""}
        onClick={() => {
            dataChangeHandler(category);
        }}
    >
        {category}
    </CategoryButton>
    /* add unique layoutId when the layoutId matches an exiting component. It will
    automatically animate out from the old component.*/
    {activeCategory === category ? (
        <motion.span className="underline" layoutId="dest-underline" />
    ) : (
        ""
    )}
</li>
```
