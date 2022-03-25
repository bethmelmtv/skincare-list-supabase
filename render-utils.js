export function renderSkincare(component) {
//create dom elements 
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    //add class
    div.classList.add('skincare-card');


    //fill with content 
    p.textContent = component.ingredient;
    img.src = component.picture;
    // img.src = `./assets/${component.ingredient}-skin.png`;
    a.href = `./skincare/?id=${component.id}`;

    div.append(p, img);

    a.append(div);
    //are we appending the link to div? how does this work?
    //when and how are we clearing out the dom?

    return a;
    //were calling this in the home page
}


export function renderSkincareDetail(component) {
//were calling this functon in the skincare.js
    const skincareEl = document.createElement('div');
    const skincareIngredientEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const img = document.createElement('img');
    const skincareFightsEl = document.createElement('ul');
    const timeEl = document.createElement('p');
    const cannotBeUsedWithEl = document.createElement('ul');
    const highlyRatedProductsEl = document.createElement('ul');

    skincareEl.classList.add('skincare-component');
    skincareIngredientEl.textContent = 'Ingredients: ' + component.ingredient;
    typeEl.textContent = component.type;
    timeEl.textContent = component.time;
    img.src = component.picture;
    //take each item of array, 
    //append a ul to it 
    //append it to the element and display it 

    
    for (let item of component.fights) {
        const li = document.createElement('li');
        li.textContent = item;
        skincareFightsEl.appendChild(li);
    }


    for (let item of component.no_combo) {
        const li = document.createElement('li');
        li.textContent = item;
        cannotBeUsedWithEl.appendChild(li);
    }

    for (let item of component.highly_rated) {
        const li = document.createElement('li');
        li.textContent = item;
        highlyRatedProductsEl.appendChild(li);
    }

    skincareEl.append(skincareIngredientEl, typeEl, img, skincareFightsEl, timeEl, cannotBeUsedWithEl, highlyRatedProductsEl);

    return skincareEl;
}
