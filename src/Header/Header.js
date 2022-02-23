import React from 'react';

class Header extends React.Component {
	render(){
		return(
			<div className='bg-blue-500 px-2 py-16 absolute w-full'>
				<div className='flex justify-center'>
					<h1 className='text-white font-bold text-3xl'>Whoosh to-do</h1>
				</div>
			</div>
		)
	}
}

export default Header;


/*<div className='flex flex-row items-center'>
					<Link to="/">
						<img src={Logo} alt="Logo" height={logoSpecs} width={logoSpecs} />
					</Link>
					<Link to="/about">About</Link>
				</div>*/