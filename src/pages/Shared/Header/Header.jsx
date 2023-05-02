import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/authProvider/authProvider';
import { useContext } from 'react';

const Header = () => {
  const {user, logOutUser} = useContext(AuthContext);
  const [userName, setUserName] = useState('');

  const handleLogOut = ()=>{
    logOutUser()
    .then(result =>{
      const logoutUser = result.user;
      console.log(logoutUser);
    })
    .catch(error =>{
      console.log(error);
    })
  }
  const handleSeeUserName = ()=>{
    setUserName(user?.displayName);
  }
    return (
        <div>
          
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-2xl">Flavor Frenzy</Link>
  </div>
  <div className="flex-none gap-2">
    <div>
        <NavLink to='/'  className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold": ""
                    }>Home</NavLink>
        <NavLink to='/blog' className={({ isActive }) =>
                      isActive ? "text-[#C59D5F] font-bold mx-2": "mx-2"
                    } >Blog</NavLink>
       {user?
        <NavLink onClick={handleLogOut}><button className='btn bg-[#C59D5F] border-none'>Logout</button></NavLink>:
        <NavLink  to='/login'><button className='btn bg-[#C59D5F] border-none'>LogIn</button></NavLink>}
    </div>
    { user &&
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div title={userName} onMouseOver={handleSeeUserName} className="w-10 rounded-full ">
          <img  src={user?.photoURL} />
        </div>
      </label>
      
    </div>}

    
  </div>
</div>
        </div>
    );
};

export default Header;