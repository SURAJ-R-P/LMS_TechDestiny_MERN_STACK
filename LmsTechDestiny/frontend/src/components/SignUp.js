import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const[user, setUser] = useState({name: "", email: "", phone: "", password: "", cpassword: ""})

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({...user, [name]:value})
    }

    const handlesubmit = async (e) => {
        e.preventDefault()

        const {name, email, phone, password, cpassword} = user

        const res = await fetch("/register",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword
            })
        })

        const data = await res.json()

        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
        } else {
            window.alert("Registration Successful")

            navigate("/login")
        }
    }

    return (
        <>
            <div className='signup'>
            <div className="row justify-content-center">
            <div className="col-4">
                <form method='POST' className='register-form' id='register-form'>
                    <div className="row mb-3">
                        <label htmlFor='name' className="col-sm-4 col-form-label text-dark"><i className="fa-sharp fa-solid fa-circle-user"></i> Name</label>
                        <input type="text" name="name" className="form-control" id="name" autoComplete='off' value={user.name} onChange={handleChange} placeholder='Your Name' />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='email' className="col-sm-4 col-form-label text-dark"><i className="fa-sharp fa-solid fa-envelope"></i> Email-Id</label>
                        <input type="email" name="email" className="form-control" id="email" autoComplete='off' value={user.email} onChange={handleChange} placeholder='Your Email-Id' />
                    </div>
                    <div className="row mb-3 d-flex">
                        <label htmlFor='phone' className="col-sm-4 col-form-label text-dark"><i className="fa-solid fa-phone"></i> Phone</label>
                        <input type="text" name="phone" className="form-control" id="phone" autoComplete='off' value={user.phone} onChange={handleChange} placeholder='Your Phone' />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='password' className="col-sm-4 col-form-label text-dark"><i className="fa-solid fa-lock"></i> Password</label>
                        <div className="passShowHide">
                            <input type={ typePass ? "text" : "password" } className="form-control" id="password" autoComplete="off" value={user.password} onChange={handleChange} name="password"  placeholder='Your Password' aria-describedby="PasswordHelp" style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}/>
                            <div id="PasswordHelp" className="form-text text-danger">{alert.password ? alert.password: ''}</div>
                            <p onClick={() => setTypePass(!typePass)}>{typePass ? "Hide" : "Show"}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='cpassword' className="col-sm-4 col-form-label text-dark"><i className="fa-solid fa-lock"></i> Confirm Password</label>
                        <div className="passShowHide">
                            <input type= { typeCfPass ? "text" : "password" } className="form-control" id="cpassword" autoComplete="off" aria-describedby="ConfirmPasswordHelp" onChange={handleChange} value={user.cpassword} name="cpassword" placeholder='Your Confirm Password' style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}}/>
                            <div id="ConfirmPasswordHelp" className="form-text text-danger">{alert.cf_password ? alert.cf_password: ''}</div>
                            <p onClick={() => setTypeCfPass(!typeCfPass)}>{typeCfPass ? "Hide" : "Show"}</p> 
                        </div>
                    </div>
                    <button className="btn btn-outline-primary" onClick={handlesubmit}>Register</button>
                </form>
            </div>
            <div className="col-4 d-flex flex-column mx-5">
                <img src='https://media.istockphoto.com/vectors/online-registration-concept-vector-id1324147344?k=20&m=1324147344&s=612x612&w=0&h=d3CVNCVGC5kLUKOpwhhkC9fYBatjlORWG1HzF5rjjlo=' style={{height:"25rem", width:"40rem"}}  className='img-fluid' alt=''/>
                <Link to="/login" className="btn btn-outline-success text-decoration-none">Already a account</Link>
            </div>
            </div>
            </div>
        </>
    );
};

export default SignUp;