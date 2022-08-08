let myId = new URL(document.location.href).searchParams.get("id")
//priceProduct = [];

// Creation des variables. Elle sont déclarées en dehors pour pouvoir les appelées plus tard si besoin.

// let elementImage = document.querySelector(".item__img");
let elementName = document.querySelector("#title");
let elementPrice = document.querySelector("#price");
let elementDescription = document.querySelector("#description");
let elementColors = document.querySelector("#colors");

afficher_produit();

// création nouvelle adresse fetch + identifiant produit
function afficher_produit() {
    fetch('http://localhost:3000/api/products/'+ myId)
    .then((response) => {    
         return response.json();
        }
    )
    .then ((resultApi) => {
        // Affichage du produit dans la console.
        //console.table(resultApi);

        let elementImage = document.querySelector(".item__img");

        // insertion image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", resultApi.imageUrl);
        productImg.setAttribute("alt", resultApi.altTxt);
        elementImage.appendChild(productImg);
            
        // insertion nom
        elementName.innerHTML = resultApi.name;

        // insertion prix            
        elementPrice.innerHTML = resultApi.price;
        
            
        // insertion decxription           
        elementDescription.innerHTML = resultApi.description;
        
        // insertion couleurs
        let productColors = resultApi.colors;
        let monHtml = "";
        for (let i= 0; i < productColors.length; i++) {
            monHtml += '<option value = "' + productColors[i]+ '">' + productColors[i]+"</option>";
        }

        document.querySelector("select").innerHTML += monHtml;    
        
        ajouter_panier(resultApi);
        
    })

    .catch ((err) => {
        console.log(err);
    })
}


// .......  Local storage .............

// localStorage.getItem("clé") => La fonction récupère la valeur d'une clé.
// localStorage.setItem("clé", "valeur") => La fonction enregistre une valeur dans le storage.
// JSON.parse() => La méthode JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne.
// parseInt() => La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.

function ajouter_panier(product) {
    let tableauLocalStorage = JSON.parse(localStorage.getItem("productId"));
    let myColor = document.querySelector("#colors").value;
    let myQuantity = document.querySelector("#quantity");

    

    // Création  d'un tableau de données (product)
     addToCart.onclick = () => {

        let myColor = document.querySelector("#colors");

        let product = {
            id: myId,
            color: myColor.value,
            quantity: myQuantity.value,
            quantity: parseInt(myQuantity.value)
        }
        console.log(product);


       if(tableauLocalStorage == null) {
            // Ajouter un produit au localStorage 
            localStorage.setItem("product", JSON.stringify(product));     
        }
        
        
        //Alimenter le tableau des prix 
        // Tableau des prix : (ne jamais stocker les prix dans le localStorage) 
        //priceProduct.push(product);
   
    }
}  
   