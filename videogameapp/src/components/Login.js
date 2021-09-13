
import React, { useState } from 'react'

function Login() {

    const [user, setUser] = useState({})

    const handleLoginChange = (e) => {
        setUser({
            
            ...user, 
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Login Here!!!</h1>
            <input type = "text" name = "username" onChange = {handleLoginChange} placeholder = "User name" />
            <input type = "password" name = "password" onChange = {handleLoginChange} placeholder = "Password" />
            <button>Login</button>
        </div>
    )
}

export default Login





    