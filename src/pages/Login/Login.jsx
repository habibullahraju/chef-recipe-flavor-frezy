import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/authProvider/authProvider';

const Login = () => {
  const [error, setError] = useState('');
  const {handleLogin, GoogleSignIn, githubSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleUseLogin = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    handleLogin(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      setError('')
      navigate(location?.state?.from?.pathname)
    })
    .catch(error =>{
      console.log(error);
      setError(error.message);
    })
    form.reset()
  }
  const handleGoogleSignIn = ()=>{
    GoogleSignIn()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      setError(error.message);
    })
  }
  const handleGithubSignIn = ()=>{
    githubSignIn()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      setError(error.message);
      console.log(error);
    })
  }

    return (
        <div>
             <div className='bg-black relative'>
                <img className='w-full h-[650px] object-cover opacity-50' src="https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
            </div>
          <div className='absolute top-20 left-10 rounded-xl border p-6 w-[400px]'>
            <h3 className='text-3xl my-4 text-white text-center'>Please Login</h3>
            <p className='pb-2 text-warning text-center'>{error}</p>
          <form onSubmit={handleUseLogin}>
            <input type="text" name='email' required placeholder="Your Email" className="mb-3 input 
            input-bordered w-full  max-w-full" /> <br />
            <input type="text" name='password' required placeholder="Your Password" className="mb-3 input input-bordered w-full max-w-full " /> <br />
            <input className='btn w-full btn-success border-none' type="submit" value="Login" />
            
            </form>
            <p className='text-white text-center my-3'><span>Are you new here?</span> 
             <Link to="/register" className='text-blue-600 ml-2'>Please Register</Link></p>
             <button onClick={handleGoogleSignIn} className='btn w-full mb-3 btn-success '><FaGoogle></FaGoogle><span className='ms-2'>Register with Google</span></button>
             <button onClick={handleGithubSignIn} className='btn w-full btn-success'><FaGithub></FaGithub><span className='ms-2'>Register with Github</span></button>
          </div>
        </div>
    );
};

export default Login;