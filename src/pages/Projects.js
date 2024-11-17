import React from 'react';
import Layout from '../components/Layout';
import projectsData from '../Resources/projectsresource';
function Project(){
    return (
        <div>
            <Layout>
                 
                <div className="mt-20">
                <div className="h-screen">
                    <div className="h-3/4"> <dotlottie-player src="https://lottie.host/1b20d0ed-d958-4407-9185-b4e88e6323a1/m78lxEjMRx.json" background="transparent" speed="1"   loop autoplay></dotlottie-player></div>
                    <p className="text-xl font-semibold text-center text-themetext">Innovative ideas don't implement themselves. They require bold determination and steadfast perseverance to become reality.</p>
                     <h1 className="text-4xl text-center font-bold mt-5"> Because </h1>
                </div>
                <div className="font-semibold text-center bg-projectbgcolor  mx-20 p-20 rounded-tl-full rounded-br-full md:mx-full">
                    <h1 className="text-8xl text-white  md:text-xl "> SUCCESS REQUIRES...</h1>
                    <h1 className="text-8xl text-white md:text-xl  ">Perseverance</h1>
                </div>
                </div>
                <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center  justify-center gap-10 mx-20 md:mx-5">
                   { projectsData.map( (value) => {
                    return <div className="relative p-10 border-2  text-center rounded-tr-3xl rounded-bl-3xl border-themetext">
                            <img src={value.image} alt="no"  className="w-full h-52 text-center"/>
                            <div className="absolute inset-0 flex items-center justify-center flex-col  opacity-0 bg-projectbgcolor hover:opacity-80">
                                <h1 className='text-4xl font-semibold'>{value.title}</h1>
                                <a href={value.githubLink} target="_blank" rel="noopener noreferrer"> 
                                <button className='border-2 rounded-3xl border-white my-2 p-2 bg-themetext text-white'>DEMO</button>
                                </a>
                            </div>
                         </div>            
                   })}
                </div>
            </Layout>
        </div>
    )

}

export default Project;