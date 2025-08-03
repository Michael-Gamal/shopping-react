import React, { useState,useContext } from 'react'
import HeadphoneImage from '../../assets/headphones.png'
import { useNavigate } from 'react-router-dom' // Add this import
import {ShopContext} from '../../ShopContext/ShopContext.jsx'
import './login.css'
const Login = () => {

  const {setCurrentUser} = useContext(ShopContext)
  const navigate = useNavigate(); 
  const [userState, setUserState] = useState("Login")
  const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: ""
  });
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem('users')) || [];



  if (userState === "Sign Up") {
    const userExists = users.some( (user) => user.email === formData.email)
    if (userExists) {
      alert("this user already recorded");
      return;
    }
    
    users.push(formData)  
    localStorage.setItem('users', JSON.stringify(users));
    if (userState === "Sign Up") {
      navigate('/login'); 
        setUserState("Login")
    }
  } else if (userState === "Login") {
                setFormData({ username: "", email: "", password: "" });

    const userFound = users.find(
      (user) => 
        user.email === formData.email && 
        user.password === formData.password  

    );
    if (userFound) {
      alert("Login Successffuly");
        localStorage.setItem('currentUser', JSON.stringify(userFound))
        setCurrentUser(userFound)
      navigate('/');
    } else {
      alert("Email or password not correct")
    }
  }
};

  return (
    <div className='login-page'>
      <div className="login-container">
        <div className="image">
            <img src={HeadphoneImage} alt="" />
        </div>



        <div className="form">
            <h1>{userState}</h1>
            <form id = "registrationForm" action="" onSubmit={handleSubmit} >
                {
                  userState === "Sign Up" ? (
                    <div className="name">
                      <label htmlFor="">Name</label>
                      <input 
                        name="username" 
                        type="text" 
                        placeholder='Your Name'
                        onChange={handleChange}
                        />
                    </div>
                  ) : null
                }
                <div className="Email">
                    <label htmlFor="">Email</label>
                    <input 
                        name='email' 
                        type="email" 
                        placeholder='Your Email' 
                        onChange={handleChange}
                      />
                </div>
                <div className="name">
                    <label htmlFor="">Password</label>
                    <input 
                      name='password' 
                      type="password" 
                      placeholder='Your Password' 
                      onChange={handleChange}
                    />
                </div>
                {
                  userState === "Sign Up" ? (
                  <div className="button-sgin-up">
                    <button type='submit' className="sgin-up">{userState}</button>
                    <p>Already have an account ? <span onClick={() => setUserState("Login")} >Login</span> </p>
                  </div>



                  ) : (
                  <div className="button-sgin-up">
                    <button type='submit' className="sgin-up">{userState}</button>
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
