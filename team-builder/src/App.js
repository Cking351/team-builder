import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'


const initialTeamList = [
  {
    id: uuid(),
    username: 'Chris',
    email: 'chris@king.com',
    role: 'Student',
  },
]

const intitalFormValues = {
  username: '',
  email: '',
  role: '', // Remember that roll is a drop down selection
}



function App() {

 const [team, setTeam] = useState(initialTeamList)
 const [error, setError] = useState('')

  const [formValues, setFormValues] = useState(intitalFormValues)

  const inputChange = event => {
    const { name, value } = event.target

    setFormValues({...formValues, [name]: value,})
  }

  const onSubmit = event => {
    event.preventDefault()

    if ( !formValues.username || !formValues.email || !formValues.role ) {
      setError('Please fill out the info')
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <div>
        <span style={{color:'red'}}>{error}</span>
        <Form />
      </div>
    </div>
  );
}

export default App;
