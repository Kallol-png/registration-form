import React from 'react'
import style from './Form.module.css'
import { useState } from 'react'

const Form = () => {
    const[user, setUser] = useState({Name:'',Email:'',Password:''});
    const{name,email,password} = user;

    const handleChange =(e)=>{
     setUser({...user,[e.target.name]:e.target.value});
    }
    const handleSubmit =(e)=>{
        console.log('submitted');
        console.log(user);
        e.preventDefault();
    }


  return (
    <div>
      <h1 className={style.title}>Registration Form</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className={style.moduleForm}>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' value={name} id='name' required onChange={handleChange}/>
        </div>
        <div className={style.moduleForm}>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' value={email} id='email' required onChange={handleChange}/>
        </div>
        <div className={style.moduleForm}>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' value={password} id='password' required onChange={handleChange}/>
        </div>
        <div className={style.moduleForm}>
            
            <button type='submit'>Submit</button>
        </div>

      </form>
      
    </div>
  )
}

export default Form
