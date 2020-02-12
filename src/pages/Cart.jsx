import React from 'react'
import { getCartProducts } from '../useful-things/fetches'

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        getCartProducts()
        .then((response) => {
            console.log(response)
        })
    }


    render() {
        return(
            <div className="cart">
                <h3>your cart</h3>
            </div>
        )
    }
}


export default Cart