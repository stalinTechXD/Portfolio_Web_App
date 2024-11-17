import React from 'react';
import Layout from '../components/Layout';
import { FaAngular, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6';
import { SiCsharp , SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function Home(){
    return (
            <Layout>
                <div>

                    {/*  self intro */}
                  <div className="h-screen bg-theme">
                     <div className="grid md:grid-cols-1 grid-cols-2 h-screen bg-themehomecolor  items-center border-4 md:border-0 
                     mx-24 md:mx-0 z-10
                     border-themetext transform rotate-12 md:rotate-0">
                        <div className="h-1/2">
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json" background="transparent" speed="1" loop   autoplay></lottie-player>
                        </div>
                        <div className="font-bold md:px-5">
                            <h1 className="text-7xl md:text-4xl">Hi , I am <b className="text-yellow-500">Stalin S 😊</b> </h1>
                            <h1 className="text-4xl md:text-xl">Full Stack <b className="text-red-500"> Cloud , Ai Developer </b> </h1>
                        </div>
                     </div>
                  </div>

                  {/* Technologies i use */}
                <div className="mt-20">
                    <h1 className="text-4xl text-textthemecolor font-bold text-center my-8">Technologies I use</h1>
                    <div className="grid md:grid-cols-1 grid-cols-4">
                        <FaReact size={200} color = 'cyan' className="w-full text-center mt-20 "/>
                        <FaAngular size={200} color = 'tomato' className="w-full text-center mt-20 animate-bounce"/>
                        <FaNodeJs size={200} color = 'green' className="w-full text-center mt-20 animate-bounce"/>
                        <FaJava size={200} color = '#6F9CF4' className="w-full text-center mt-20"/>
                        <SiCsharp size={200} color = '#964D92' className="w-full text-center mt-20 animate-bounce"/>
                        <FaPython size={200} color = '#4380B0' className="w-full text-center mt-20"/>
                        <SiCplusplus size={200} color = '#6295CB' className="w-full text-center mt-20"/>
                        <IoLogoJavascript size={200} color = '#F7CF00' className="w-full text-center mt-20 animate-bounce"/>
                    </div>
                </div>
                {/* javascript */}
                 <div className="my-20  ">
                    <div className="text-center h-52 bg-themehomecolor">
                        <h1 className="text-themetext font-bold text-4xl py-10">Yes, you are correct. I am passionate about JavaScript and C#.</h1>
                    </div>
                    <div className="md:mx-5 mx-20 shadow-2xl bg-gray-50 -mt-20 md:mt-0 rounded-lg hover:bg-btexttheme">
                        <div className="h-96">
                        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_sSF6EG.json" background="transparent" speed="1"  loop  autoplay></lottie-player>
                        </div>
                        <p className="text-2xl my-5 font-semibold md:px-5 px-14 py-10">JavaScript is a versatile language used for creating interactive web content, enhancing user experiences with dynamic interfaces. C# is a modern, object-oriented language by Microsoft, ideal for building robust applications on the .NET framework</p>
                    </div>
                 </div>

                 {/* dev stack */}
                 <div className="my-20  ">
                    <div className="text-center h-52 bg-themehomecolor">
                        <h1 className="text-themetext font-bold text-4xl py-10">My Dev Stack</h1>
                    </div>
                    <div className="md:mx-5 mx-20 shadow-2xl bg-gray-50 -mt-20 md:mt-0 rounded-lg hover:bg-btexttheme">
                        <div className="h-96">
                        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json" background="transparent" speed="1"  loop  autoplay></lottie-player>
                        </div>
                        <div className='grid md:grid-cols-1 grid-cols-4 p-5'>
                            <div>
                                <h1 className="text-xl font-bold">Front End</h1>
                                < hr/>
                                <p className='font-semibold my-2'>HTML/CSS</p>
                                <p className='font-semibold mt-2'>JavaScript</p>
                                <p className='font-semibold mt-2'>Angular</p>
                                <p className='font-semibold mt-2'>React</p>
                                <p className='font-semibold mt-2'>Redux</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">UI/UX </h1>
                                < hr/>
                                <p className='font-semibold my-2'>BootStrap</p>
                                <p className='font-semibold mt-2'>Tailwind</p>
                                <p className='font-semibold mt-2'>Material UI</p>

                            </div>
                            <div>
                                <h1 className="text-xl font-bold">BackEnd & Database </h1>
                                < hr/>
                                <p className='font-semibold my-2'>NodeJs</p>
                                <p className='font-semibold mt-2'>ExpressJs</p>
                                <p className='font-semibold mt-2'>ASP.NET CORE</p>
                                <p className='font-semibold mt-2'>Mysql</p>
                                <p className='font-semibold mt-2'>MongoDB</p>
                                <p className='font-semibold mt-2'>Redis</p>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Cloud , AI , Devops</h1>
                                < hr/>
                                <p className='font-semibold my-2'>Azure</p>
                                <p className='font-semibold mt-2'>Generative AI</p>
                                <p className='font-semibold mt-2'>Azure Devops</p>
                                <p className='font-semibold mt-2'>Docker</p>

                            </div>
                        </div>
                    </div>
                 </div>
                 {/* coding protfoli links*/}
                 <div className="my-20 bg-themehomecolor h-100  ">
                    <div className="text-center h-52 bg-themehomecolor">
                        <h1 className="text-themetext font-bold text-4xl py-10">Coding Profiles</h1>
                    </div>
                    <div className="flex justify-between  items-center py-10 mx-10">
                        <a href="https://www.hackerrank.com/profile/secretscoof" target="_blank" rel="noopener noreferrer" className="text-4xl text-themetext mx-4">
                            <img src="./../hackerank.png" alt="GitHub" className="w-10 h-10" />
                        </a>
                        <a href="https://leetcode.com/u/liveman/" target="_blank" rel="noopener noreferrer" className="text-4xl text-themetext mx-4">
                            <img src="./../leetcode.png" alt="LinkedIn" className="w-10 h-10" />
                        </a>
                        <a href="https://www.geeksforgeeks.org/user/stalintechxd/" target="_blank" rel="noopener noreferrer" className="text-4xl text-themetext mx-4">
                            <img src="./../geeksforgeeks.png" alt="Stack Overflow" className="w-10 h-10" />
                        </a>
                        <a href="https://www.codechef.com/users/codeagent" target="_blank" rel="noopener noreferrer" className="text-4xl text-themetext mx-4">
                            <img src="./../codechef.png" alt="Codewars" className="w-10 h-10" />
                        </a>
                    </div>
                </div>
                 {/** Dev Info */}
                 <div>
                    <h1 className='text-4xl text-themetext text-center'> Who is Stalin.s ?</h1>
                    <div className='h-screen relative'>
                        <div className='h-full'>
                    <dotlottie-player src="https://lottie.host/87034aac-f200-4d70-8ad5-1adaa0d11855/aN8a1KKBHh.json" background="transparent" speed="1"   loop autoplay></dotlottie-player>
                    </div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center'>
                        <h1 className="text-2xl md:text-sm font-bold"> Hi  ,Hello , Namaste...🙏</h1>
                        <hr />

                        <pre className='text-xl md:text-sm my-5 font-mont'>
                            {JSON.stringify({
                                name : "stalin S",
                                age : 24,
                                gender : "male",
                                country : "india"
                            } , null , 2)}
                        </pre>
                    </div>
                    </div>
                 </div>
                </div>
            </Layout>
    )

}

export default Home;