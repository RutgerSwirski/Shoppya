const baseUrl  = 'http://localhost:4000/graphql'

export function login(email, password) {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: `{
                login(email: "${email}", password: "${password}") {
                    token
                }
            }`
        })
    })
    .then(response => response.json())
    .then(responseText => {
        localStorage.setItem('token', responseText.data.login.token)
        return responseText.data
    })
    .catch((errors) => { console.log(errors) })
}

export function autoLogin(token) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: `{
                autoLogin(token: "${token}") {
                    id
                    email
                }
            }`
        })
    })
    .then(response => response.json())
    .then(responseText => {
        return responseText.data
    } )
    .catch((errors) => { console.log(errors) })
}

export function signUp(email, password) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
            query:`mutation{
                sign_up(email: "${email}", password: "${password}"){
                    token
                }
            }`
        })
    })
    .then(response => response.json())
    .then(responseText => {
        localStorage.setItem('token', responseText.data.sign_up.token)
        return responseText.data
    })
    .catch(errors => { console.log(errors) })
}

export function getProducts() {
    return fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
            query: `{
                getProducts {
                    id
                    name
                    description
                    price
                    user {
                        id
                        email
                    }
                }
            }`
        })
    })
    .then(response => response.json())
    .then(responseText => {
        return responseText.data.getProducts
    })
    .catch(errors => console.log(errors))
}

export function getCartProducts() {
    const cartItems = JSON.parse(localStorage.getItem('cart'))
    const cartProducts = []
    
    Object.entries(cartItems).map((item) => {
        return fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                query: `
                {
                    getProduct(id: "${item[0]}") {
                        id
                        name
                        description
                        price
                        user {
                            id
                            email
                        }
                    }
                }
                `
            })
        })
        .then(response => response.json())
        .then((responseText) => {
            responseText.data.getProduct["quantity"] = item[1]
            cartProducts.push(responseText.data.getProduct)
        })
        .catch((errors) => { console.log(errors) })
    })
}
