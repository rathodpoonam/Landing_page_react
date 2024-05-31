import React from 'react'

const Login = () => {
  return (
    <div>
      <div class="container">
        <div class="form-container sign-up-container">
            <form action="#" id="signUpForm">
                <h1>Create Account</h1>
                <input type="text" placeholder="Username" id="signupUsername" required />
                <input type="email" placeholder="Email" id="signupEmail" required />
                <input type="password" placeholder="Password" id="signupPassword" required />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#" id="signInForm">
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" id="loginEmail" required />
                <input type="password" placeholder="Password" id="loginPassword" required />
                <button>Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
