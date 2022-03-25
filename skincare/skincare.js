import { getSkincareById } from '../fetch-utils.js';
import { renderSkincareDetail } from '../render-utils.js'; 


const skincareDetailEl = document.querySelector('.skin-care-detail');

window.addEventListener('load', async () => {

    const data = new URLSearchParams(window.location.search);
    //
    const skincareId = data.get('id');

    const skincare = await getSkincareById(skincareId);


    const skincareEl = renderSkincareDetail(skincare);


    skincareDetailEl.append(skincareEl);
});
