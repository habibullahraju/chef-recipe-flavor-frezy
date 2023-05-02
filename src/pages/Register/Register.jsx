import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/authProvider/authProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const [error, setError ]= useState('');
  const [success,setSuccess] = useState('');

  const {handleRegister , GoogleSignIn, githubSignIn} = useContext(AuthContext);

  const handleRegisterForm = (event)=>{
    event.preventDefault();
    setError('');
    setSuccess('');
    const form =  event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    if (password< 6) {
      setError('Your password must be 6 characters long!')
      return;
    }
    handleRegister(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserData(result.user,name,photoURL)
      setError('')
    })
    .catch(error =>{
      setError(error.message);
      console.log(error);
    })
    form.reset();


  }
  const updateUserData = (user,name, photoURL)=>{
    updateProfile(user ,{
      displayName: name, photoURL: photoURL,
    })
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      console.log(error);
    })
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
      const loggedUser = result.user ;
      console.log(loggedUser);
    })
    .catch(error =>{
      setError(error.message);
      console.log(error);
    })
  }
  
    return (
        <div className=''>
            <div className='bg-black relative'>
                <img className='w-full h-[650px] object-cover opacity-50' src="https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
            </div>
          <div className='absolute top-20 left-10 rounded-xl border p-6 w-[400px]'>
            <h3 className='text-3xl my-4 text-white text-center'>Please Register</h3>
            <p className='pb-2 text-warning text-center'>{error}</p>
          <form onSubmit={handleRegisterForm}>
            <input type="text" name='name' required placeholder="Your Name" className="mb-3 input 
            input-bordered w-full  max-w-full" /> <br />
            <input type="text" name='email' required placeholder="Your Email" className="mb-3 input input-bordered w-full max-w-full " /> <br />
            <input type="text" name='password' required placeholder="Your Password" className="mb-3 input input-bordered w-full  max-w-full" /> <br />
            <input type="text" name='photo' placeholder="Your PhotoURL" className="mb-3 input input-bordered w-full  max-w-full" /> <br />
            <input className='btn w-full btn-success border-none' type="submit" value="Register" />
            
            </form>
            <p className='text-white text-center my-3'><span>Already have an account?</span> 
             <Link to="/login" className='text-blue-600 ml-2'>Please Login</Link></p>
             <button onClick={handleGoogleSignIn} className='btn w-full mb-3 btn-success '><FaGoogle></FaGoogle><span className='ms-2'>Register with Google</span></button>
             <button onClick={handleGithubSignIn} className='btn w-full btn-success'><FaGithub></FaGithub><span className='ms-2'>Register with Github</span></button>
          </div>
        </div>
    );
};

export default Register;