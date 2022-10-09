import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FuncComp from './FuncComp'
import ClassComp from './ClassComp'

const About = () => {
    const [resourceType, setResourceType] = useState('posts')

    console.log("Component Rendered!")

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        // console.log("Rendered On Mount!")
        console.log("Resource Type Changed!")

        // return(
        //     console.log("Clean Up removed previous useEffect()")
        // );
    }, [resourceType])

    return (
        <div className='flex flex-col justify-center items-center h-screen w-full overflow-hidden'>
            <Navbar />
            <div className="flex flex-col items-center justify-start h-screen w-full">
                <div className='text-3xl my-10 rounded-2xl shadow-md bg-slate-300 px-5 py-2'>useEffect - API Calling</div>
                <div className='text-xl flex'>
                    <button onClick={() => setResourceType('posts')} className='mx-3 bg-slate-300 shadow-md rounded-2xl px-5 py-2'>Posts</button>
                    <button onClick={() => setResourceType('users')} className='mx-3 bg-slate-300 shadow-md rounded-2xl px-5 py-2'>Users</button>
                    <button onClick={() => setResourceType('comments')} className='mx-3 bg-slate-300 shadow-md rounded-2xl px-5 py-2'>Comments</button>
                </div>
                <h1 className='text-5xl my-12'>Resource Type : {resourceType}</h1>
                <FuncComp/>
                <ClassComp/>
            </div>
            <Footer />
        </div>
    )
}

export default About;