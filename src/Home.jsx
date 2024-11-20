import React from 'react'
import './signup.css'

function Home() {
  return (
    <div className='signup-container'>
      <div className='signup-card'>
         <h1>Registration Form</h1>
         <form>
          <label htmlFor="">First Name</label>
          <input type="text" placeholder='first name' name='firstName'/>

          <label htmlFor="">Last Name</label>
          <input type="text" placeholder='last name' name='lastName'/>

          <label htmlFor="">Email</label>
          <input type="text" placeholder='email' name='email'/>

          <label htmlFor="">Password</label>
          <input type="text" placeholder='Password' name='password'/>
          <button>Signup</button>
         </form>
      </div>
    </div>
  )
}

export default Home