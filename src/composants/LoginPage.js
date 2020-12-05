import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import '../App.css'
import '../Assets/affiche2.png'

const LoginPage = () => {

    const [password, setPassword] = useState('')
    const [mail, setMail] = useState('')

    const validate = (e) => {
        e.preventDefault();

        setMail(mail)
        setPassword(password)
        console.log("ok button appuyer")
        console.log(mail)
        console.log(password)
        
    }

    const mailHandle = (e) => {
        //e.preventDefault();
        setMail(e.target.value)
        console.log(mail)

    }

    const  passwordHandle = (e) => {
      //  e.preventDefault();
        setPassword(e.target.value)
        console.log(password)

    }


    return (
        <div className='containerLogin'>
            <h1> Login Page </h1>
         <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label> Email</Form.Label>
                <Form.Control 
                    onChange={mailHandle}
                    type="email" 
                    placeholder="Enter email" />
                <Form.Text className="text-muted" >
                Nous ne partagerons jamais votre Email.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    onChange={passwordHandle}
                    type="password" 
                    placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit" 
                size="lg"
                onClick={validate}    
            >
                Login
            </Button>
        </Form>
        </div>
    )
}

export default LoginPage
