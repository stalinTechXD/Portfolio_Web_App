import React from 'react';
import Layout from '../components/Layout';

function Contact(){
    return (
        <div>
            <Layout>
                <div>
                    <div className="h-screen mt-20">
                    <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script> 

                    <dotlottie-player src="https://lottie.host/457a6eba-70e4-4ece-a1b5-1c919d7ba4ee/l5bjrI2V9I.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
                    </div>

                    <div className="w-screen flex justify-center">
                       <div className="md:w-full w-1/2 p-10 shadow-2xl bg-themehomecolor">
                            <h1 className="text-2xl font-semibold"> Contact me to know More</h1>
                            <input type="text" placeholder = "Name" className="w-full border-2 border-backgroundformcolor rounded p-1 shadow-lg mt-5"/> 
                            <input type="text" placeholder = "Email" className="w-full border-2 border-backgroundformcolor rounded p-1 shadow-lg mt-5"/> 
                            <textarea type="text" placeholder = "Query" className="w-full border-2  border-backgroundformcolor  rounded p-1 shadow-lg mt-5"/> 
                            <button className='bg-themetext text-white px-5 py-1 mt-5 rounded'>Submit</button>
                       </div>
                    </div>
                </div> 
            </Layout>
        </div>
    )

}

export default Contact;