import React from 'react'
import { Button } from 'reactstrap';
import '../Form.css'

export default function Form(props) {
    const { values, onInputChange, onSubmit, } = props
    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-submit'>
                <h2>Add a Team Member</h2>
                <Button style={{backgroundColor: 'blue'}}>Submit</Button>
            </div>

            <div className='form-inputs'>
                <h4>General Infomation</h4>

                <label>Name:&nbsp;
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onInputChange}
                        maxLength='100'
                    />
                </label>

                <label htmlFor='emailInput'>Email:&nbsp;
                    <input 
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                        maxLength='100'

                    />
                </label>

                <label>Role:&nbsp;
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