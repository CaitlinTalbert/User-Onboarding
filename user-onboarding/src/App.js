import './App.css';
import Form from './Form.js'; 
import axios from 'axios'; 
import * as yup from 'yup'; 
import schema from './formSchema.js'
import React, { useEffect, useState } from 'react'; 

const initialFormValues = {
  first_name: '', 
  email: '', 
  password: '', 
  termsOfService: false, 
}

const initialFormErrors = {
  first_name: '', 
  email: '', 
  password: '', 
  termsOfService: '',
}


const initialDisabled = true;


export default function App() {

  const [users, setUsers] = useState([])
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(resp => {
      console.log(resp)
      setUsers(resp.data); 
    }).catch(err => console.error(err))
  }

  const postNewUsers = newUsers => {
    axios.post('https://reqres.in/api/users')
    .then(resp => {
      setUsers([resp.data, ...users]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value); 
    setFormValues({ ...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newUsers = {
      name: formValues.name.trim(), 
      email: formValues.email.trim(), 
      password: formValues.password.trim(), 
      termsOfService: formValues.termsOfService.trim()
    }
    postNewUsers(newUsers); 
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header><h1>New Users</h1></header>

      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

     
    </div>
  );
}


