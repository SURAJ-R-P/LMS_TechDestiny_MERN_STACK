import React,{useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

    const {state, dispatch} = useContext(UserContext)

    const navigate = useNavigate()

    const[user, setUser] = useState({email: "", password: ""})

    const [typePass, setTypePass] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({...user, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {email, password} = user

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, password
            }) 
        })

        const data = await res.json()

        if(data.status === 422 || !data){
            window.alert("Login Failed")
            console.log("login failed")
        } else {
            dispatch({type:"USER", payload: true})
            window.alert("Login Successful")
            navigate("/")
        }
    }

    return (
        <>
            <div className='login'>
                <div className="row justify-content-center">
                    <div className="col-4 d-flex flex-column mx-5">
                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/user-showing-user-login-page-in-website-or-application-1886527-1597938.png' style={{height:"25rem", width:"40rem"}}  className='img-fluid' alt=''/>
                    <Link to="/register" className="btn btn-outline-success text-decoration-none">Don't have an account register</Link>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                        <form method='POST' className='login-form' id='login-form'>
                            <div className="row mb-3">
                                <label htmlFor='email' className="col-sm-4 col-form-label text-dark"><i className="fa-sharp fa-solid fa-envelope"></i> Email-Id</label>
                                <input type="email" name="email" className="form-control" id="email" autoComplete='off' value={user.email} onChange={handleChange} placeholder='Your Email-Id' />
                            </div>
                            <div className="row mb-3">
                                <label htmlFor='password' className="col-sm-4 col-form-label text-dark"><i className="fa-solid fa-lock"></i> Password</label>
                                <div className="passShowHide">
                                    <input type={ typePass ? "text" : "password" } className="form-control" id="password" autoComplete="off" value={user.password} onChange={handleChange} name="password"  placeholder='Your Password' aria-describedby="PasswordHelp" style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}/>
                                    <div id="PasswordHelp" className="form-text text-danger">{alert.password ? alert.password: ''}</div>
                                    <p onClick={() => setTypePass(!typePass)}>{typePass ? "Hide" : "Show"}</p>
                                </div>
                            </div>
                            <button className="btn btn-outline-primary" onClick={handleSubmit}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;