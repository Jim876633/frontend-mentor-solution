import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /*color*/

        --clr-primary: hsl(230, 35%, 7%);
        --clr-white: hsl(0, 0%, 100%);
        --clr-white-10: rgba(255,255,255,0.1);
        --clr-white-25: rgba(255,255,255,0.25);
        --clr-white-50: rgba(255,255,255,0.5);
        --clr-text: hsl(231, 77%, 90%);
        --clr-blur: rgba(255, 255, 255, 0.04);
       
        /*font size*/

        --fz-h1: 8rem;
        --fz-h2: 5.6rem;
        --fz-h3: 2.4rem;
        --fz-h4: 1.6rem;
        --fz-h5: 1.6rem;
        --fz-h1-sm: 2.8rem;
        --fz-h2-sm: 1.4rem;
        --fz-nav: 1.6rem;
        --fz-text: 1.5rem;

        /*font family*/

        --ff-belle: "Bellefair", serif;
        --ff-barlow: "Barlow", sans-serif;
        --ff-barlow-c: "Barlow Condensed", sans-serif;

        /*line height*/

        --line-h: 2.5rem;

        /*Layouts size*/
        
        --nav-h: 10rem;
        --explore: 15rem;
    }

    html {
        font-size: 62.8%;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--ff-barlow);
        font-size: var(--fz-text);
    }
    body{
        overflow-x: hidden;
    }
    button {
        cursor: pointer;
        border: none;
        background: transparent;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
    }
    li {
        list-style: none;
    }

    a {
        color: var(--clr-white);
        text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: normal;
    }
    h1{
        font-size: var(--fz-h1);
        font-family: var(--ff-belle);
        color: var(--clr-white);
        text-transform: uppercase;
    }
    h2{
        font-size: var(--fz-h2);
        font-family: var(--ff-belle);
        color: var(--clr-white);
        text-transform: uppercase;
    }
    h3{
        font-size: var(--fz-h3);
        font-family: var(--ff-belle);
        color: var(--clr-white);
        text-transform: uppercase;
    }
    h4{
        font-size: var(--fz-h4);
        font-family: var(--ff-belle);
        color: var(--clr-white-50);
        text-transform: uppercase;
    }
    h5{
        font-size: var(--fz-h5);
        font-family: var(--ff-barlow-c);
        letter-spacing: 2.7px; //4.75
        color: var(--clr-text);
        text-transform: uppercase;
    }
    p{
        font-size: var(--fz-text);
        font-family: var(--ff-barlow);
        color: var(--clr-text);
        line-height: var(--line-h);
    }

    @media (min-width: 768px) {
        :root {
            --fz-h1: 15rem;
            --fz-h2: 10rem;
            --fz-h3: 5.6rem;
            --fz-h4: 3.2rem;
            --fz-h5: 2rem;
            --line-h: 3.2rem;
            --explore: 20rem;
        }
    }
    @media (min-width: 1020px) {
        :root {
            --fz-h1: 15rem;
            --fz-h2: 10rem;
            --fz-h3: 5.6rem;
            --fz-h4: 3.2rem;
            --fz-h5: 2.8rem;
            --line-h: 3.2rem;
            --explore: 20rem;
        }
    }
`;
