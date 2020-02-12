import React from 'react'
import { addToCart } from '../useful-things/FUNctions'

class ProductCard extends React.Component {
    constructor() {
        super()
        this.state = {
            quantity: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAddToCart(event, product, quantity) {
        event.preventDefault()
        addToCart(product, quantity)
    }


    render() {
        const { product } = this.props
        return(
            <div className="product-card-container">
                <div className="product-card">
                    <div className="product-card-left">
                        <img className="product-img" src="https://www.hamiltonwatch.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/H/8/H82315331_4.png" alt=""/>
                    </div>
                    <div className="product-card-right">
                        <h1 className="product-card-title">{product.name}</h1>
                        <h2 className="product-card-subtitle">lorem ipsum</h2>
                        <h3 className="product-card-price"><span className="product-card-price-symbol">£</span>{product.price}</h3>
                        <p className="product-card-description">{product.description}</p>
                        <div className="product-card-buttons-container">
                            <button onClick={(event) => { this.handleAddToCart(event, product, 3) }} className="product-card-button">add to cart</button>
                            <button className="product-card-button">buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard