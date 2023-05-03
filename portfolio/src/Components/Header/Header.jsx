import React from 'react';
import Img from '../Image/Image'
import github from "../../Img/GitHub.png"
import linkedin from "../../Img/linkedin.png"
import email from "../../Img/Email.png"

function Header() {
    return (
        <div>
            <div className='flex justify-center p-5 h-24 min-h-0'>
                <div className=" flex m-2   hover:bg-black-700 ">
                <Img className="  p-1  " src={github}> </Img>
                <a  className='text-slate-100 text-3xl   transition duration-700 ease-in-out bg-green' href="https://github.com/LucasmSantoss">Git Hub</a> 
                </div>
                <div  className=" flex m-2 hover:bg-black-700">
                <Img className=" p-1 " src={linkedin}> </Img>
                <a  className='text-slate-100 text-3xl    transition duration-700 ease-in-out bg-green' href="https://www.linkedin.com/in/lucas-santos-b133001b9/">LinkedIn</a> 
                </div >
                <div  className=" flex m-2 hover:bg-black-700 ">
                <Img className=" p-1 " src={email}> </Img>
                <a className='text-slate-100 text-3xl   transition duration-700 ease-in-out bg-green' href="mailto:lucasmsantoss95@hotmail.com">Email</a>
                </div>
               
               
                
           
            </div>

        </div>
    );
}

export default Header;