// Inizializza il carrello come un array vuoto
var cart = [];

// Funzione per aggiungere il prodotto al carrello
function addToCart() {
    var product = {
        name: "J'Adore Dior",
        price: 20.00
    };

    cart.push(product);

    // Aggiorna l'HTML per mostrare i prodotti nel carrello
    var cartSection = document.getElementById("cart");
    var cartList = "<ul>";

    for (var i = 0; i < cart.length; i++) {
        cartList += "<li>" + cart[i].name + " - $" + cart[i].price + "</li>";
    }

    cartList += "</ul>";
    cartSection.innerHTML = cartList;
}
