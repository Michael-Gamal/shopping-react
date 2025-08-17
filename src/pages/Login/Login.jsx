import { useState,useContext } from 'react'
import HeadphoneImage from '../../assets/headphones.png'
import { useNavigate } from 'react-router-dom' // Add this import
import {ShopContext} from '../../ShopContext/ShopContextInstance'
import './login.css'
const Login = () => {

  const {setCurrentUser} = useContext(ShopContext)
  const navigate = useNavigate(); 
  const [userState, setUserState] = useState("Login")
  const [vis, setVis] = useState("none")
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const userExists = users.some( (user) => user.email === formData.email)
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
const handleSubmit = (e) => {
  e.preventDefault();



  if (userState === "Sign Up") {
    users.push(formData)  
    localStorage.setItem('users', JSON.stringify(users));
    if (userState === "Sign Up") {
      navigate('/login'); 
        setUserState("Login")
    }
  } else if (userState === "Login") {

    const userFound = users.find(
      (user) => 
        user.email === formData.email && 
        user.password === formData.password  

    );
    if (userFound) {
        localStorage.setItem('currentUser', JSON.stringify(userFound))
        setCurrentUser(userFound)
      navigate('/');
    } else {
      setVis("flex")
    }
  }
};

  return (
    <div className='login-page'>
      <div className="login-container">
        <div className="image">
            <img src={HeadphoneImage} alt="" />
        </div>



        <div className="form " >
            <h1>{userState}</h1>
            <form id = "registrationForm" action="" onSubmit={handleSubmit} >
                {
                  userState === "Sign Up" ? (
                    <div className="name">
                      <label htmlFor="text">Name</label>
                      <input 
                        name="username" 
                        type="text" 
                        placeholder='Your Name'
                        onChange={handleChange}
                        />
                    </div>
                  ) : null
                }

                    {
                    <div className="Email">
                      <label htmlFor="email">Email</label>
                        <input 
                          name='email' 
                          type="email" 
                          placeholder='Your Email' 
                          onChange={() => handleChange}
                        />
                        {
                          userExists && userState === "Sign Up" ? (
                            <p className='error-message'>This email is already registered</p>
                          ) : null  
                        }
                      </div>
                    }
                    
                <div className="name">
                    <label htmlFor="password">Password</label>
                    <input 
                      name='password' 
                      type="password" 
                      placeholder='Your Password' 
                      onChange={() => handleChange}
                    />
                    <p className='user-not-found' style={{display: vis}}>password or Email not correct</p>
                    
                </div>
                {
                  userState === "Sign Up" ?  (
                  <div className="button-sgin-up">
                    <button type='submit' className="sgin-up">{userState}</button>
                    <p>Already have an account ? <button  onClick={() => setUserState("Login")} >Login</button> </p>
                  </div>



                  ) : (
                  <div className="button-sgin-up">
                    <button type='submit' className="sgin-up">{userState}</button>
                    <p>Forgot your password ?</p>
                    <p>Don&apos;t have an account ? <button onClick={() => setUserState("Sign Up")}>Create an account</button> </p>
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
