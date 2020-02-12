import React from 'react'
import { getProducts } from '../useful-things/fetches'
import ProductCard from '../components/ProductCard'

class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            products: []
        }
    }

    componentDidMount() {
        getProducts()
        .then(response => {
            this.setState({
                products: response
            })
        })
        .catch(errors => console.log(errors))
    }


    render() {
        return(
            <div>
                <h1 className="products-title">All Products</h1>
                <div className="product-cards-container">
                    {
                        this.state.products.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Products