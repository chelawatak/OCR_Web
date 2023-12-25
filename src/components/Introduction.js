import React from 'react'
import face from '../Images/face.png'
const Introduction = () => {
  return (
    <div class="intro1">
        <h1 class="row justify-content-center i1" style={{opacity:"0.95", width:"100%"}}>ID Card OCR</h1>
        <div class="intro2">
            
            
            <div class ="image"> 
                <img class="image mx-3 " src={face} alt="Logo" />
            </div>

            <div class="intro3">
                Effectively identify 6+ fields on the Thai ID card. Even under certain reflection and backlight conditions, the recognition accuracy can reach more than 90%.
            </div>

        </div>
       
    </div>


    
  )
}

export default Introduction
