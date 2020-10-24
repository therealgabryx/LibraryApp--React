import React from 'react' 
import './index.css' 

// components
import { Form, FormGroup, FormInput } from 'shards-react'

export default function index() { 
    return ( 
        <div className='LoginContent'> 
            <Form>
                <FormGroup>
                    <FormInput/>
                </FormGroup>
                <FormGroup>
                    <FormInput/>
                </FormGroup>
            </Form>
        </div> 
    ) 
} 
