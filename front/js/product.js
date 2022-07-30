// console.log(window.location.search);
console.log(window.location);


// création nouvel url avec urlSearchParams
// let params = new URLSearchParams(document.location.search);
// let id = params.get('id');
let str = window.location.href;
let url = new URL(str);
let params = new URLSearchParams(document.location.href)
let id = url.searchParams.get("id");
console.log('id');


// Creation des variables. Elle sont déclarées en dehors pour pouvoir les appelées plus tard si besoin.

let elementImage = document.querySelector(".item__img");
let elementName = document.querySelector("#title");
let elementPrice = document.querySelector("#price");
let elementDescription = document.querySelector("#description");
let elementColors = document.querySelector("#colors");


// création nouvelle adresse fetch + identifiant produit

fetch(`http://localhost:3000/api/products/${id}`)

    .then(function (response) {
        console.log(response);
        // Utilisation d'une condition pour l'affichage de la reponse dans la console.
        if (response.ok) {
            return response.json();
        }
    })

    .then (function (result) {
        // Affichage du produit dans la console.
        console.log(result);

        // insertion image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", result.imageUrl);
        productImg.setAttribute("alt", result.altTxt);
        elementImage.appendChild(productImg);
        
        // insertion nom
        elementName.innerHTML = result.name;

        // insertion prix            
        elementPrice.innerHTML = result.price;
        
        // insertion decxription           
        elementDescription.innerHTML = result.description;
    
        // insertion couleurs
        let productColors = result.colors;
        let monHtml = "";
        for (let i= 0; i < productColors.length; i++) {
            console.log(productColors[i]);
            monHtml += '<option value = "' + productColors[i]+ '">' + productColors[i]+"</option>";
        }
            console.log(monHtml);
            document.querySelector("select").innerHTML += monHtml;
                    
        
        });

    

        // création nouvelle adresse fetch + identifiant produit

/*fetch(`http://localhost:3000/api/products/${id}`)
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
        elementName.innerHTML = result.name;

        // insertion prix            
        elementPrice.innerHTML = result.price;
        
        // insertion decxription           
        elementDescription.innerHTML = result.description;
    
        // insertion couleurs
        let productColors = result.colors;
        let monHtml = "";
        for (let i=0; i<productColors.length; i++) {
            console.log(productColors[i]);
            monHtml += '<option value = "' + productColors[i]+ '">' + productColors[i]+"</option>";
        }
            console.log(monHtml);
            document.querySelector("select").innerHTML += monHtml;
                       
    });*/


