import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import {  FaGithub , FaBlog , FaMailBulk} from 'react-icons/fa';
function Footer(){
    return (
        <div className="bg-themehomecolor flex justify-center ">
           <div className="md:w-full w-1/2">
           <div className="bg-themehomecolor p-10 font-mont text-center mt-5">
                <p className="text-black pb-5"> Designed and Developed By </p>
                
                <div className="flex justify-between">
                <a href="https://www.linkedin.com/in/stalin-s%F0%9F%87%AE%F0%9F%87%B3-71671318a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                    </a>
                <a href="https://github.com/stalinTechXD" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://dev.to/stali1234" target="_blank" rel="noopener noreferrer"> 
                    <FaBlog />
                </a>
                <a href="mailto:stalin.sangeethraj@gmail.com">
                    <FaMailBulk />
                </a>    
                </div>
                 
                <p className="text-black">Stalin S</p>
            </div>
           </div>
        </div>
    )

}

export default Footer;