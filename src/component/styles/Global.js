import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');

:root{
        --cyan: hsl(180, 29%, 50%);
        --light_cyan: hsl(180, 52%, 96%);
        --light_cyan_2: hsl(180, 31%, 95%);
        --dark_cyan:hsl(180, 8%, 52%);
        --dark_cyan_2: hsl(180, 14%, 20%);
        --white: #FFFFFF;
        --dark: #000000;
}


html{
    font-size: 62.5%;
}
*{
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
    font-size: 1.5rem;
    margin:0;
    padding:0;
}

body{
    min-height: 90vh;
    position: relative;
    background:var(--light_cyan);
}



`;

export default GlobalStyles;
