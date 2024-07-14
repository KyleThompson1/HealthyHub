import { Link } from 'react-router-dom'; 
import logoImg from '../../Images/Misc/Leafy Logo.png';

export const Header = () => {

    return (

        <nav className='navbar navbar-expand-lg navbar-dark background-color-navbar-green py-4 fixed-navbar'>
            <div className='container-fluid'>

                <Link to='/'>
                    <img className='navbar-logo' src={logoImg} alt='Logo' />
                </Link>

                <Link to='/' className='navbar-brand' style={{fontSize: '3rem'}}>Healthy Hub</Link>

                <button className='navbar-toggler' type='button'
                    data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'>

                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>

                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Search Recipes</a>
                        </li>

                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Search Workouts</a>
                        </li>

                        <li className='nav-item'>
                            {/* <a className='nav-link' href='#'>Our Mission</a> */}
                            <Link to='/mission' className='nav-link'>Our Mission</Link>
                        </li>
                    </ul>

                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <Link to='/sign-in' className='btn btn-lg btn-outline-light'>Sign In</Link>
                        </li>

                        <li className='nav-item m-1'>
                            {/* <a type='button' className='btn btn-lg btn-outline-light' href='#'>Create Account</a> */}
                            <Link to='/create-account' className='btn btn-lg btn-outline-light'>Create Account</Link>
                        </li>

                        <li className='nav-item m-1'>
                            {/* <a type='button' className='btn btn-lg btn-outline-light' href='#'>Create Account</a> */}
                            <Link to='/' className='btn btn-lg btn-outline-light'>Log Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}