import React from 'react'
import image1 from '../Images/benefit1.png'
import image2 from '../Images/benefit2.png'
import image3 from '../Images/benefit3.png'
const Benefits = () => {
  return (
    <div>

      <div class = "row justify-content-center row">
        <h1 class="row justify-content-center benefits1" > Benefits</h1>
      </div>


      <div class="row justify-content-center my-5">  

        <div class="mx-5" style={{width:"18rem"}}>
        <img class="card-img-top" src={image1} alt="Card image cap"/>
        <div class="justify-content-center" style={{textAlign:"center"}}>
            <h3>High Accuracy</h3>
        </div>
        </div>


        <div class=" mx-5" style={{width:"18rem"}}>
        <img class="card-img-top" src={image2} alt="Card image cap"/>
        <div class="justify-content-center" style={{textAlign:"center"}}>
            <h3>Millisecond-level Response</h3>
        </div>
        </div>


        <div class=" mx-5" style={{width:"18rem"}}>
        <img class="card-img-top" src={image3} alt="Card image cap"/>
        <div class="justify-content-center" style={{textAlign:"center"}}>
            <h3>Supporting Complicated Scenarios</h3>
        </div>
        </div>
      </div>
    </div>
       
  )
}

export default Benefits
