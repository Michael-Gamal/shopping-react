import React, { useState } from 'react'
import HeadphoneImage from '../../assets/headphones.png'
import './login.css'
const Login = () => {


  const [userState, setUserState] = useState("Sign Up")



  return (
    <div className='login-page'>
      <div className="login-container">
        <div className="image">
            <img src={HeadphoneImage} alt="" />
        </div>



        <div className="form">
            <h1>{userState}</h1>
            <form action="">
                {
                  userState === "Sign Up" ? (
                    <div className="name">
                      <label htmlFor="">Name</label>
                      <input type="text" placeholder='Your Name' />
                    </div>
                  ) : null
                }
                <div className="Email">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Your Email' />
                </div>
                <div className="name">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Your Password' />
                </div>
                {
                  userState === "Sign Up" ? (
                  <div className="button-sgin-up">
                    <button  className="sgin-up">{userState}</button>
                    <p>Already have an account ? <span onClick={() => setUserState("Login")} >Login</span> </p>
                  </div>



                  ) : (
                  <div className="button-sgin-up">
                    <button  className="sgin-up">{userState}</button>
                    <p>Forgot your password ?</p>
                    <p>Don't have an account ? <span onClick={() => setUserState("Sign Up")}>Create an account</span> </p>
                  </div>
                  )
                }
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
