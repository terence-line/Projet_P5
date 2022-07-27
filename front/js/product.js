/*console.log(window.location);

// création nouvel url avec urlSearchParams

let params = new URLSearchParams(document.location.search);
let id = params.get("id");



// création nouvelle adresse fetch + identifiant produit

fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => {
        return response.json();   
        console.log(response);
    })
    .then((result) => {

        // insertion image
        const productImg = document.createElement("img");

        productImg.setAttribute("src", result.imageUrl);

        productImg.setAttribute("alt", result.altTxt);

        document.querySelector(".item__img").setAttribute("src", result.imageUrl);

        // insertion nom

        const productName = document.createElement("title");

        productName.setAttribute("name", result.name);

        document.querySelector("#title").setAttribute("name", result.name);

        console.log(result);
    });*/

console.log(window.location);

// Creation des variables. Elle sont déclarées en dehors pour pouvoir les appelées plus tard si besoin.

let elementImage = document.querySelector(".item__img");
let elementName = document.querySelector("#title");
let elementPrice = document.querySelector("#price");
let elementDescription = document.querySelector("#description");

// création nouvel url avec urlSearchParams

let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);



fetch(`http://localhost:3000/api/products/${id}`)
    .then(function (response) {
        console.log(response);
        // Utilisation d'une condition pour l'affichage de la reponse dans la console.
        if (response.ok) {
            return response.json();
        }
    })

    .then(function (result) {
        // Affichage du produit voulu dans la console.
        console.log(result);

        // Placement des donnees API aux bons endroits. 

        // insertion image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", result.imageUrl);
        productImg.setAttribute("alt", result.altTxt);
        elementImage.appendChild(productImg);
        // document.querySelector('.item_img').setAttribute("src", result.imageUrl);
        console.log(productImg);

        // insertion nom
        elementName.textContent = result.name;

        // insertion prix            
        elementPrice.textContent = result.price;
        
        // insertion decxription           
        elementDescription.textContent = result.description;
    });
