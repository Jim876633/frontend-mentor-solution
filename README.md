# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).

Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for each page depending on their device's screen size
-   See hover states for all interactive elements on the page
-   See their own IP address on the map on the initial page load
-   Search for any IP addresses or domains and see the key information and location

### Screenshot

Mobile

![](/screenshot//mobile.jpeg)

Desktop

![](/screenshot/desktop.jpeg)

### Links

-   Solution URL: [fontend mentor solution](https://www.frontendmentor.io/solutions/vanilla-js-with-scss-YoKx0uA__U)
-   Live Site URL: [live site](https://jim-ip-address-tracker-master.netlify.app/)

## My process

### Built with

-   SCSS
-   Mobile-first workflow
-   [Ipify](https://www.ipify.org/) - IP API
-   [Ipify geolocation](https://geo.ipify.org/) - IP Geolocation API
-   [Leaflet](https://leafletjs.com/) - Map API

### What I learned

Use Leaflet API to create the map.

```js
const map = L.map("map");
map.setView(coords, 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const icon = L.icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [36, 46],
});
var marker = L.marker(coords, { icon }).addTo(map);
marker.bindPopup("<b>Hello vistor !</b><br>IP address is here.").openPopup();
```

### Useful resources

-   [IP RegExp](https://www.regextester.com/104038m) - This helped me to filter correct IP before fetch API.
-   [Domain RegExp](https://regexr.com/3au3g) - This helped me to filter correct domain before fetch API.
