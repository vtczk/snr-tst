function removeFromWishlist(userId, productId) {
    console.log("deleting productt" + productId);
    // const fav = {"userId": userId, productId: productId};
    fetch('http://localhost:9000/favourites/' + userId + "/" + productId, {
        mode: 'cors',
        method: 'DELETE',
    }).catch(err => console.log("Error while deleting product " + productId))
}

function addToWishlist(userId, productId) {
    console.log("adding " + productId);
    const fav = {user: userId, product: productId};
    console.log(JSON.stringify(fav));
    fetch('http://localhost:9000/favourites', {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fav),
    }).catch(err => console.log("Error while adding to wishlist " + err))
}

export {removeFromWishlist, addToWishlist};
