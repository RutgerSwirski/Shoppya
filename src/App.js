import React from 'react'
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { autoLogin } from './useful-things/fetches'

import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import Cart from './pages/Cart'

import Navbar from './components/Navbar'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: {}
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if(token) {
      autoLogin(token)
      .then((response) => {
        this.setState({
          currentUser: response.autoLogin
        })
      })
    }
  }
  
  render() {
    // const PrivateRoute = ({component: Component, ...rest}) => (
    //   <Route {...rest} render={(props) => ( localStorage.getItem('token') ? <Component {...props} user={this.state.currentUser} /> : <Redirect to='/login' /> )} />
    // )

    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/products" component={ Products } />
          <Route path="/cart" component={ Cart } />
          {/* <PrivateRoute path="/landing" component={ Landing } /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
