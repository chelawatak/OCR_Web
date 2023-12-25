import React from 'react'
import invFace from '../Images/invertedface.png'

const Footer = () => {
  return (
    <div class="intro1">
        <div class="intro2 f1">
            
            <div class="footerstyle">
                <h1 class="mx-5" style={{color:"#43e0fe"}}>OCR Web - Thai ID Card</h1>
                <h5 class="mx-5"><i class="fa-regular fa-face-smile"></i> Aniket Chelawat</h5>
                <h5 class="mx-5"><i class="fa fa-phone"></i> 7340282458</h5>
                <h5 class="mx-5"><i class="fa fa-envelope-open"></i>  20uec019@lnmiit.ac.in, chelawatak@gmail.com</h5>
                <h5 class="mx-5"><i class="fa-solid fa-graduation-cap"></i> LNMIIT, Jaipur</h5>

            </div>

            <div > 
                <img class="footer" style={{marginLeft:"140px"}} src={invFace} alt="Logo" />
            </div>

        </div>
       
    </div>
  )
}

export default Footer
