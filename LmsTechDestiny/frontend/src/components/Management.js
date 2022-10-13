import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Management = () => {
    const navigate = useNavigate()

    const callManagePage = async () => {
        try {
            const res = await fetch('/management',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" :"application/json"
                },
                credentials: "include"
            })

            const data = await res.json()
            console.log(data)

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
        callManagePage()
    },[])

    return (
        <div className='home-page'>
            <div className='home-div'>
                <p className='pt-5'>Welcome</p>
                <h1>Admin Page</h1>
                <form method='GET'>

                </form>
            </div>
        </div>
    );
};

export default Management;