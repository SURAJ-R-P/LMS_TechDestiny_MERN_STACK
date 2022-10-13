import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {

    const {state, dispatch} = useContext(UserContext)

    const Menu = () => {
        if(state){
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active text-decoration-none" aria-current="page" to="/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home"><i className="fa-solid fa-house-user"></i>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/lms" data-bs-toggle="tooltip" data-bs-placement="bottom" title="LMS"><i className="fa-sharp fa-solid fa-file-audio"></i>LMS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/cart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart"><i className="fa-sharp fa-solid fa-cart-plus"></i>Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/contact" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact"><i className="fa-sharp fa-solid fa-id-badge"></i>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/about" data-bs-toggle="tooltip" data-bs-placement="bottom" title="About"><i className="fa-regular fa-address-card"></i>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/management" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Management"><i class="fa-solid fa-pen-to-square"></i>Management</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/logout" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Logout"><i className="fa-sharp fa-solid fa-user"></i>Logout</Link>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active text-decoration-none" aria-current="page" to="/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home"><i className="fa-solid fa-house-user"></i>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/lms" data-bs-toggle="tooltip" data-bs-placement="bottom" title="LMS"><i className="fa-sharp fa-solid fa-file-audio"></i>LMS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/cart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart"><i className="fa-sharp fa-solid fa-cart-plus"></i>Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/contact" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact"><i className="fa-sharp fa-solid fa-id-badge"></i>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/about" data-bs-toggle="tooltip" data-bs-placement="bottom" title="About"><i className="fa-regular fa-address-card"></i>About</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/management" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Management"><i class="fa-solid fa-pen-to-square"></i>Management</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/login" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login"><i className="fa-sharp fa-solid fa-circle-user"></i>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/register" data-bs-toggle="tooltip" data-bs-placement="bottom" title="SignUp"><i className="fa-sharp fa-solid fa-user-plus"></i>SignUp</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link text-decoration-none" to="/logout" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Logout"><i className="fa-sharp fa-solid fa-user"></i>Logout</Link>
                    </li> */}
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar shadow-sm navbar-expand-lg navbar-light bg-light py-3 py-lg-0 px-lg-5">
                <div className="container">
                    <Link className="navbar-brand ml-lg-3" to="/">
                        <h1 className="m-0 display-5"><span><img src="https://www.thetechdestiny.com/wp-content/uploads/2022/06/The-Tech-Destiny_Light-Bg-1-1-869x488.png" className="logo img-fluid" alt="logo" style={{height:"55px", width:"75px", marginTop:"-5px"}} /></span><span className="text-primary" /></h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-lg-3" id="navbarNavDropdown">
                        <form className="d-flex" style={{marginLeft:"20rem"}}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mx-auto py-0 d-flex justify-content-end">
                            <Menu />
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    );
};

export default Navbar;