let id = new URL(document.location.href).searchParams.get("id")
prixProduits = [];

// Creation des variables. Elle sont déclarées en dehors pour pouvoir les appelées plus tard si besoin.

// let elementImage = document.querySelector(".item__img");
let elementName = document.querySelector("#title");
let elementPrice = document.querySelector("#price");
let elementDescription = document.querySelector("#description");
let elementColors = document.querySelector("#colors");

afficher_produit();

// création nouvelle adresse fetch + identifiant produit
function afficher_produit() {
    fetch('http://localhost:3000/api/products/'+id)
    .then((response) => {    
        // Utilisation d'une condition pour l'affichage de la reponse dans la console.
        if (response.ok) {
            return response.json();
        }
    })
    .then ((result) => {
        // Affichage du produit dans la console.
        console.log('Afficher la réponse du serveur');
        console.table(result);

        let elementImage = document.querySelector(".item__img");

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
        
        ajouter_panier(result);
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

function ajouter_panier(un_produit) {
    const local = JSON.parse(localStorage.getItem("product"));
    const myColor = document.querySelector("#colors").value;
    const myQte = document.querySelector("#quantity");

    const opt = {
        idProduit: id,
        couleur: myColor,
        qte: parseInt(myQte.value),
        nom: un_produit.name,
        descr: un_produit.description,
        image: un_produit.imageUrl,
        altimage: un_produit.altTxt
    }

    // Création  d'un tableau de données (product)
     addToCart.onclick = () => {

        const product = {
            id: id,
            colors: myColor,
            quantity: myQte.value
        }

        // Ajouter un produit au localStorage 
        localStorage.setItem("product", JSON.stringify(opt));
        console.table(localStorage['product'])

        //Alimenter le tableau des prix 
        // Tableau des prix : (ne jamais stocker les prix dans le localStorage) 
        prixProduits.push(product);
        console.table(prixProduits);
    }
}

    
    


       



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


