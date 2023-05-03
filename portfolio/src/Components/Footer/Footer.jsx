import React from 'react';
import Img from '../Image/Image'
import wp from '../../Img/wp.png'
import github from "../../Img/GitHub.png"
import linkedin from "../../Img/linkedin.png"
import email from "../../Img/Email.png"

function Footer() {
    return (
        <div className='flex justify-around  text-slate-100 text-3xl p-5'>
            <iframe className="h-60 w-2/4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100584.56676730582!2d-57.68293440421718!3d-38.01753789945654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1683052216792!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='flex-col aling-center bg-slate-300 text-black '>
            <div className="flex m-3 p-1 " >
            <Img className="h-10" src={wp}> </Img>
            <a className="text-3xl  pl-1 transition duration-700 ease-in-out bg-green'" href="tel:+542235065893">Telefono</a>
            </div>
            <div className=" flex m-3 p-1  ">
                <Img className="  h-10  " src={github}> </Img>
                <a  className='text-3xl  pl-1 transition duration-700 ease-in-out bg-green' href="https://github.com/LucasmSantoss">Git Hub</a> 
                </div>
                <div  className=" flex m-3 p-1">
                <Img className=" h-10 " src={linkedin}> </Img>
                <a  className='text-3xl  pl-1  transition duration-700 ease-in-out bg-green' href="https://www.linkedin.com/in/lucas-santos-b133001b9/">LinkedIn</a> 
                </div >
                <div  className=" flex m-3 p-1 ">
                <Img className=" h-10 " src={email}> </Img>
                <a className='text-3xl pl-1  transition duration-700 ease-in-out bg-green' href="mailto:lucasmsantoss95@hotmail.com">Email</a>
                </div>
                </div>
        </div>
    );
}

export default Footer;