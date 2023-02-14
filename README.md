# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

[screenshot_1](Screenshot 2023-02-14 at 13.02.21.png)
[screenshot_2](Screenshot 2023-02-14 at 13.02.54.png)

### Links

- Live Site URL: [sanderdechering.github.io/Frontend-mentor_time-tracking-dashboard/](https://sanderdechering.github.io/Frontend-mentor_time-tracking-dashboard/)

## My process

### Built with

- [VueJS](https://vuejs.org/) - Js framework
- [TailwindCSS](https://tailwindcss.com/) - CSS library

### What I learned

My first project where I build a vue project and deploy it on a live website. There were a lot of hills to climb, but in the end i managed
to deploy a proper looking website.

The main problem I had was making sure the static images i was using with a dynamic url were being added to the assets folder after building.
```js
function getImageUrl(name: string) {
  return new URL(`../../images/${name}`, import.meta.url).href;
}
```

A different problem was how to deploy a build inside a dist folder on github pages. There was one tutorial that helped me get it done (link in usefull resources).
Vite also explained how to do it, but I did not get the script they provided to get working.

### Useful resources

- [Vite asset handling](https://vitejs.dev/guide/assets.html) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Dist with build on Github pages](https://www.youtube.com/watch?v=yo2bMGnIKE8&t=124s&ab_channel=LearnVue) - This tutorial helped me get the project running on github pages.

## Author

- Website - [Sander Dechering](https://www.sanderdechering.nl)
- Frontend Mentor - [@sanderdechering](https://www.frontendmentor.io/profile/sanderdechering)