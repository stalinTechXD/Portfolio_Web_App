import React from 'react';
import Layout from '../components/Layout';
import blogsData from '../Resources/blogresources';


function Blogs(){
    return (
        <div>
        <Layout>
            <div>
            <div>
                <div className="h-screen bg-themehomecolor relative">
                    <div className="h-3/4   pt-20"> <dotlottie-player src="https://lottie.host/ce58586c-10cd-4e7b-beb2-721c37ab8d49/7J1iQRMqsg.json" background="transparent" speed="1"   loop autoplay></dotlottie-player></div>
                   
                    <p className="text-xl font-semibold text-center text-themetext">Below is a list of blogs that discuss C#, AI, and JavaScript. Please take the time to read these blogs, like them, and provide some feedback. We are always open to improvements.</p>
                   
                </div>
                </div>
            </div>
            <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center  justify-center gap-10 mx-20 md:mx-5">
                   { blogsData.map( (value) => {
                    return <div className="relative p-10 border-2  text-center rounded-tr-3xl rounded-bl-3xl border-themetext">
                            <img src={value.image} alt="no"  className="w-full h-52 text-center"/>
                            <div className="absolute inset-0 flex items-center justify-center flex-col  opacity-0 bg-projectbgcolor hover:opacity-80">
                                <h1 className='text-4xl font-semibold'>{value.title}</h1>
                                <a href={value.demoLink} target="_blank" rel="noopener noreferrer"> 
                                <button className='border-2 rounded-3xl border-white my-2 p-2 bg-themetext text-white'>READ MORE</button>
                                </a>
                            </div>
                         </div>            
                   })}
                </div>
        </Layout>
    </div>
    )

}

export default Blogs;