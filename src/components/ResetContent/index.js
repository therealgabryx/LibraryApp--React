import React from 'react' 
import './index.css' 

// components
import { Form, FormGroup, FormInput, Button } from 'shards-react'
import { Link } from 'react-router-dom'

export default function index() { 
    return ( 
        <div className='ResetContent'> 
            <div className='info'>
                <h6> 
                    Enter your email to recover your profile.<br/> 
                    A password reset link will be sent to your email.
                </h6> 
            </div>
            <div className='form'>
                <Form>
                    <FormGroup>
                        <label htmlFor='#email'>Email</label>
                        <FormInput id='email' type='email' placeholder='email'/>
                    </FormGroup>
                </Form>
            </div>
            <div className='actions'>
                <Button>Reset Password</Button> 
                <Link to='/login'>or Back to Login</Link>
            </div>
        </div> 
    ) 
} 
