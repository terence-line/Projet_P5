/*console.log(window.location);*/

// création nouvel url avec urlSearchParams

let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id);




fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => {
        return response.json();   
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


    });