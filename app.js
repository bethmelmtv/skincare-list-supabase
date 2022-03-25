// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



import { getSkincare } from './fetch-utils.js';
import { renderSkincare } from './render-utils.js';

//the purpose of this page is to make the site interactive 


const skincareListEl = document.querySelector('.skincare-list');

window.addEventListener('load', async () => {

    const skinCare = await getSkincare();

    for (let item of skinCare) {
        const skincareEl = renderSkincare(item);

        skincareListEl.append(skincareEl);
    }
});

