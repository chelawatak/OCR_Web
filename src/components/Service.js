import React from 'react'
import upd from '../Images/upload.png'



const Service = () => {
  return (
    <div >
      <div class="s1">
        <h1 class="row justify-content-center servhead" style={{color:"white"}}> Service</h1>
      </div>

      <div class="service">
      <div class="row service_left my-5 mx-5 justify-content-center">
        <img src={upd} alt="Please Upload ID card " class="imagehandle my-3"/>
        <button class="btn-grad my-2" style={{width:"40%"}}>Upload</button>
      </div>



      <div class="service_right mx-5 my-5">
        <h2 class="row justify-content-center">Results</h2>
        <p class="mx-3 my-3">
          <span >Attendance Record -</span>
          <span >Success/Fail</span>
        </p>


        <p class="mx-3 my-3">
          <span >Identification Number -</span>
          <span >aniket chelawat</span>
        </p>
        

        <p class="mx-3 my-3">
          <span >First Name -</span>
          <span >aniket chelawat</span>
        </p>

        <p class="mx-3 my-3">
          <span >Last Name -</span>
          <span >aniket chelawat</span>
        </p>

        <p class="mx-3 my-3">
          <span > Date of Birth -</span>
          <span >aniket chelawat</span>
        </p>


        <p class="mx-3 my-3">
          <span > Date of Issue -</span>
          <span >aniket chelawat</span>
        </p>

        <p class="mx-3 my-3">
          <span > Date of Expiry -</span>
          <span >aniket chelawat</span>
        </p>
      </div>
    </div>
    </div>
    
  )
}

export default Service
