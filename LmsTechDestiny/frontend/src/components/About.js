import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" :"application/json"
                },
                credentials: "include"
            })

            const data = await res.json()
            console.log(data)
            setUser(data)

            if(!res.status === 200){
                const error = new Error(res.error)
                throw error
            }

        } catch (error) {
            console.log(error)
            navigate('/login')
        }
    }

    useEffect(() => {
        callAboutPage()
    },[])

    return (
        <>
            <div className='container std-profile'>
                <form method='GET'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-img'>
                                <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' className='img-fluid' alt=''/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='profile-header'>
                                <h5>{user.name}</h5>
                                <p className='profile-rating mt-3 mb-3'>Ranking<span>/10</span></p>
                                <ul className="nav nav-pills" id='pills-tab' role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active text-decoration-none" aria-current="page" id='pills-about-tab' data-bs-toggle="pill" data-bs-target="#pills-about" role="tab" href="#about" aria-controls="pills-about" aria-selected="false">About</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link text-decoration-none" id='pills-profile-tab' data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" href="#profile" aria-controls="pills-profile" aria-selected="false">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <button type="button" className='btn btn-outline-success profile-edit-btn'>Edit Profile</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-link'>
                                <p className='mx-4'>Links :-</p>
                                <a className="btn btn-light btn-social text-decoration-none" href="#"><i className="fa-brands fa-facebook service-icon bg-warning text-dark" data-bs-toggle="tooltip"  title="Facebook"></i></a>
                                <a className="btn btn-light btn-social text-decoration-none" href="#"><i className="fa-brands fa-twitter service-icon bg-warning text-dark" data-bs-toggle="tooltip"  title="Twitter"></i></a>
                                <a className="btn btn-light btn-social text-decoration-none" href="#"><i className="fa-brands fa-linkedin-in service-icon bg-warning text-dark" data-bs-toggle="tooltip"  title="Linkedin"></i></a>
                                <a className="btn btn-light btn-social text-decoration-none" href="#"><i className="fa-solid fa-map-location-dot service-icon bg-warning text-dark" data-bs-toggle="tooltip"  title="Location"></i></a>
                                <a className="btn btn-light btn-social text-decoration-none" href="#"><i className="fa-brands fa-youtube service-icon bg-warning text-dark" data-bs-toggle="tooltip"  title="Youtube"></i></a>
                                <a className="btn btn-light btn-social text-decoration-none" href="#"><i className="fa-brands fa-instagram service-icon bg-warning text-dark" data-bs-toggle="tooltip"  title="Instagram"></i></a>
                            </div>
                        </div>
                        <div className='col-md-8 about-info'>
                            <div className='tab-content profile-tab' id='pills-tabContent myTabContent'>
                                <div className='tab-pane fade show active' id='pills-about' role="tabpanel" aria-labelledby="pills-about-tab">
                                    <div className='row'>
                                        <div className='col-md-6 labeltext'>
                                            <label>User Id :-</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>111</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 labeltext'>
                                            <label>Name :-</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{user.name}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 labeltext'>
                                            <label>EmailId :-</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 labeltext'>
                                            <label>Phone No :-</label>
                                        </div>
                                        <div className='col-md-6'>
                                            <p>{user.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className='row'>
                                    <div className='col-md-6 labeltext'>
                                        <label>Experience :-</label>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>Medium</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 labeltext'>
                                        <label>Total Project :-</label>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>15</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default About;