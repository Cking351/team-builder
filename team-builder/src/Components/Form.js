import React from 'react'
import { Button } from 'reactstrap';
import '../Form.css'

export default function Form(props) {
    const { values, onInputChange, onSubmit, } = props
    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Add a Team Member</h2>
                <Button color='primary'>Submit</Button>
            </div>

            <div className='form-inputs'>
                <h4>Please enter your info here</h4>

                <label className='label'>Name:&nbsp;
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onInputChange}
                        maxLength='100'
                    />
                </label>

                <label className='label' htmlFor='emailInput'>Email:&nbsp;
                    <input 
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                        maxLength='100'

                    />
                </label>

                <label className='label'>Role:&nbsp;
                    <select 
                        name='role'
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>-- Select Your Role --</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>UX Designer</option>
                        <option value='Devops Engineer'>Devops Engineer</option>
                    </select>

                </label>

            </div>
        </form>
    )
}