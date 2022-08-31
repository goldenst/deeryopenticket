
import React, { useState } from 'react'
import './Login.css'
import {useLogin } from '../../hooks/useLogin'



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayname] = useState("");
  //const [thumbnail, setThunbnail] = useState(null);
  //const [thumbmailError, setThumbnailError] = useState(null);
  const { login, isPending, error } = useLogin()



const handleSubmit = (e) => {
  e.preventDefault()
  login(email, password)
}
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2> Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
    
     
      { !isPending && <button className="btn">Sign in</button>}
      { isPending && <button className="btn" disabled>Loading</button>}
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login