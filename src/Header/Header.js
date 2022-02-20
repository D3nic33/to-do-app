import React from 'react';
import Logo from '../img/To-do-app-logo.png';

const logoSpecs = "100px";

class Header extends React.Component {
    render(){
        return(
            <div className='bg-blue-400 mb-16'>
                <div className='flex flex-row px-2 py-2'>
                    <img src={Logo} alt="Logo" height={logoSpecs} width={logoSpecs} />
                </div>
            </div>
        )
    }
}

export default Header;