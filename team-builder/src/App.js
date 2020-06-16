import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import Create from './Components/Create'
import { Jumbotron } from 'reactstrap'


const initialTeamList = [
  {
    id: uuid(),
    username: 'Chris King',
    email: 'chris@king.com',
    role: 'Frontend Engineer',
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

  const onInputChange = event => {
    const { name, value } = event.target

    setFormValues({...formValues, [name]: value,})
  }

  const onSubmit = event => {
    event.preventDefault()

    if ( !formValues.username || !formValues.email || !formValues.role ) {
      setError('Please fill out the info')
      return
    }

    const newMember = {...formValues, id:uuid()}

    setTeam(team => [...team, newMember])

    setFormValues(intitalFormValues)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
      </header>
      <Jumbotron>
        <span style={{color:'red'}}>{error}</span>
        <Form 
         values = {formValues}
         onInputChange = {onInputChange}
         onSubmit = {onSubmit}
        />

        {
          team.map(team => {
            return (
              <Create key={team.id} details={team} />
            )
          })
        }
      </Jumbotron>
    </div>
  );
}

export default App;
