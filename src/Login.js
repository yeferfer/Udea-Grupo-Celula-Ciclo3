import React from 'react'

function Login() {
    return (
        <div>
            <from class="Login-from" name ="form">

                <h1> inicio </h1>

                <input aurcomplete="off" type="text">
                    name ="Login-email" placeholder="yourEmail@gmail.com" className = "Login-email"
                </input>

                <input type="password">
                    name ="Login-password" className = "Login-password"
                </input>

                <button type="submit" className="Login-button">Submit</button>
                
            </from>
        </div>
    )
}

export default Login
