import React,{useEffect, useState} from 'react';

const Contact = () => {
    const[user, setUser] = useState({name:"", email:"", phone:"", message:""})

    const callContactPage = async () => {
        try {
            const res = await fetch('/contact',{
                method: "GET",
                headers: {
                    "Content-Type" :"application/json"
                }
            })

            const data = await res.json()
            console.log(data)
            setUser({...user, name: data.name, email: data.email, phone: data.phone})


            if(!res.status === 200){
                const error = new Error(res.error)
                throw error
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callContactPage()
    },[])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({...user, [name]:value})
    }

    const contactForm = async (e) => {
        e.preventDefault();

        const { name, email, phone, message } = user;

        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        });

        const data = await res.json();

        if (!data) {
            console.log("message not send ");
        } else {
            alert("Message Send");
            setUser({ ...user, message: "" });
        }

    }


    return (
        <>
            <div className='contact_info'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                            <div className='conatct_info_item  d-flex justify-content-start align-items-center'>
                                <p className='contact_info_icon'><i className="fa-solid fa-mobile-retro"></i></p>
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        Phone
                                    </div>
                                    <div className='contact_info_text'>
                                        +91 xxxxxxxxxx
                                    </div>
                                </div>
                            </div>
                            <div className='conatct_info_item  d-flex justify-content-start align-items-center'>
                                <p className='contact_info_icon'><i className="fa-solid fa-envelope-open-text"></i></p>
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        Email
                                    </div>
                                    <div className='contact_info_text'>
                                        email@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className='conatct_info_item  d-flex justify-content-start align-items-center'>
                                <p className='contact_info_icon'><i className="fa-solid fa-map-location-dot"></i></p>
                                <div className='contact_info_content'>
                                    <div className='contact_info_title'>
                                        Address
                                    </div>
                                    <div className='contact_info_text'>
                                        Mumbai
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact_form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1'>
                            <div className='contact_form_conatiner py-5'>
                                <div className='contact_form_title'>
                                    Get in touch
                                </div>
                                <form method='POST' className='' id='contact_form'>
                                    <div className='contact_form_name d-flex justify-content-between align-items-between'>
                                        <input type="text" name='name'  value={user.name} onChange={handleChange} id='contact_form_name' className='contact_form_name input_field' placeholder='Your Name' required="true" />
                                        <input type="email" name="email" value={user.email} onChange={handleChange} id='contact_form_email' className='contact_form_email input_field' placeholder='Your Email' required="true" />
                                        <input type="number" name='phone' value={user.phone} onChange={handleChange} id='contact_form_phone' className='contact_form_phone input_field' placeholder='Your Phone No.' required="true" />
                                    </div>
                                    <div className='contact_form_text mt-4'>
                                        <textarea name='message' value={user.message} onChange={handleChange} className='text_field contact_form_message' placeholder='Message' cols="25" rows="10"></textarea>
                                    </div>
                                    <div className='contact_form_button'>
                                        <button type='submit' onClick={contactForm} className='btn btn-outline-primary contact_submit_button'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;