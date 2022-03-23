// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


import { renderSkincare } from 'render-utils.js';
import { getSkincare } from 'fetch-utils.js';

//the purpose of this page is to make the site interactive 


const skincareListEl = document.querySelector('.skincare-list');


window.addEventListener('load', async () => {
    fetchAndDisplaySkincare();
//this event listener should add render function to existing pieces of content in database

});


async function fetchAndDisplaySkincare() {
//this function should add render function to existing pieces of content in database
    const skincare = await getSkincare();
    for (let item of skincare) {
        const skincareEl = renderSkincare(item);
        skincareListEl.append(skincareEl);
    }
}




// for (let item of )
//     const div = renderSkincare(item)
//     skincareListEl.append(div);

//     return skincareListEl;

// }