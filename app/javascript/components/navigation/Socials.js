import React from "react";
import { FaTwitter, FaFacebook, FaGlide, FaVimeo, FaPinterest } from "react-icons/fa";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Socials = () => {
    return (
        <div>
          <ul className="socials">
            <li><FaTwitter /></li>
            <li><FaFacebook /></li>
            <li><FaGlide /></li>
            <li><FaVimeo /></li>
            <li><FaPinterest /></li>
           </ul>
         <div className="arrow">
            <BiLeftArrow />
            <BiRightArrow />
         </div> 
        </div>
    )
};
export default Socials;