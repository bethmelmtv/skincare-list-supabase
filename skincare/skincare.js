import { getSkincarebyId } from '../fetch-utils.js';
import { renderSkincareDetail } from '../render-utils.js'; 


const skincareDetailEl = document.querySelector('skin-care-detail');

window.addEventListener('load', async () => {

    const data = new URLSearchParams(window.location.search);
    
    const skincareId = data.get('id');

    const skincare = await getSkincarebyId(skincareId);


    const skincareEl = renderSkincareDetail(skincare);


    skincareDetailEl.append(skincareEl);
});
