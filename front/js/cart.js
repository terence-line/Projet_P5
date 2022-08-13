// Importation du local storage de la page produit
const tableauLocalStorage = JSON.parse(localStorage.getItem("products"));
console.table(tableauLocalStorage);



//let myId = new URL(document.location.href).searchParams.get("id")
prixProduits = [];
let panierPlein = [];



// Affichage des produits du local storage
const kanapPanier = document.querySelector("#cart__items");
console.log(kanapPanier);

// Vérification du contenu du panier : si le panier est vide
if (tableauLocalStorage === null){
    alert("Votre panier est vide");
}
// Si le panier est plein, afficher les produits
else {
    
    
    for(let i=0; i < tableauLocalStorage.length; i++) {

        panierPlein = panierPlein += 

        `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
            <div class="cart__item__img">
                <img src="${tableauLocalStorage[i].imageUrl}" alt="${tableauLocalStorage[i].altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${tableauLocalStorage[i].name}</h2>
                    <p>${tableauLocalStorage[i].myColorValue}</p>
                    <p>${tableauLocalStorage[i].price} €</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=" ${tableauLocalStorage[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div>
                </div>
            </div>
        </article>`;
        }

    kanapPanier.innerHTML = panierPlein;
   
    

    // Alimenter le tableau des prix
    prixProduits.push("products");
    //console.log(prixProduits);

}
     
           
                  
        
        
           
               