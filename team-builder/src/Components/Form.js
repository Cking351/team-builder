import React from 'react'
import { Button } from 'reactstrap';

export default function Form(props) {
    const { values, inputChange, onSubmit, } = props
    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Add a Team Member</h2>
                <Button style={{backgroundColor: 'blue'}}>Submit!</Button>
            </div>

            <div className='form-inputs'>

            </div>
        </form>
    )
}