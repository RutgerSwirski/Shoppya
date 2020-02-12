import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { login } from '../useful-things/fetches'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        login(this.state.email, this.state.password)
        .then(response => {
            if(response == null) {
                alert('email or password incorrect!')
            } else {
                window.location = '/'
            }
        })
        .catch((errors) => { console.log(errors) })
    }

    render() {
        return(
            <div className="container">
                <div className="col-lg-4 col-12 offset-lg-4">
                    <h2>Login</h2>
                    <hr/>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(event) => { this.handleChange(event) }} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(event) => { this.handleChange(event) }} name="password" type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={ this.handleSubmit } variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }

}

export default Login