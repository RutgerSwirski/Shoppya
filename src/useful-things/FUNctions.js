export function addToCart(product, quantity) {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
    cart[product.id] = (cart[product.id] ? cart[product.id] : 0)
    const qty = cart[product.id] + parseInt(quantity)
    cart[product.id] = qty
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`added ${quantity} ${product.name}'s to your cart!`)
}