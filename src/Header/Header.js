import React from 'react';
import Logo from '../Img/To-do-app-logo.png';
import { Link } from "react-router-dom";

const logoSpecs = "100px";

class Header extends React.Component {
    render(){
        return(
            <div className='bg-blue-400 mb-16 px-2 py-2'>
                <div className='flex flex-row items-center'>
                    <Link to="/">
                        <img src={Logo} alt="Logo" height={logoSpecs} width={logoSpecs} />
                    </Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        )
    }
}

export default Header;