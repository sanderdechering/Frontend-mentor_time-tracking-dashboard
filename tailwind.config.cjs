/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'My-blue' : 'hsl(246, 80%, 60%)',
        'My-light-red-work' : 'hsl(15, 100%, 70%)',
        'My-soft-blue-play' : 'hsl(195, 74%, 62%)',
        'My-light-red-study' : 'hsl(348, 100%, 68%)',
        'My-lime-green-exercise' : 'hsl(145, 58%, 55%)',
        'My-violet-social' : 'hsl(264, 64%, 52%)',
        'My-soft-orange-self-care' : 'hsl(43, 84%, 65%)',
        //Neutral
        'My-very-dark-blue' : 'hsl(226, 43%, 10%)',
        'My-dark-blue' : 'hsl(235, 46%, 20%)',
        'My-desaturated-blue' : 'hsl(235, 45%, 61%)',
        'My-pale-blue' : 'hsl(236, 100%, 87%)',
      }
    },
  },
  plugins: [],
}
