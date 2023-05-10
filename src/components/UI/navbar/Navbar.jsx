import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className='navbar'>
            <div className='navbar__link'>
                {isAuth ?
                    <MyButton onClick={logout}>
                        Log Out
                    </MyButton>
                    :
                    <MyButton onClick={() => navigate(`/login`)}>
                        Log In
                    </MyButton>
                } 
                
            </div>
            <div className='navbar__link'>
                <Link to='/about'>About</Link>
            </div>
            <div className='navbar__link'>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    )
}

export default Navbar;