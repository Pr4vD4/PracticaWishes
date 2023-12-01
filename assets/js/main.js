// import {createEnvelopes} from "./envelope";

const bag = document.querySelector('.bag')
// const wish = document.querySelector('.wish')

bag.addEventListener('touchstart', createEnvelopes)
bag.addEventListener('click', createEnvelopes)
