import React from 'react'
import seno1 from '../Images/scenario1.png'
import seno2 from '../Images/scenario2.png'
const Scenarios = () => {
  return (

    <div>

      <div class="row justify-content-center">
        <h1 class="row justify-content-center benefits1" > Scenarios</h1>
      </div>

    <div class="row justify-content-center my-5">  
          <div class="mx-5 my-3 scenario1" style={{width:"19rem"}}>
        <img class="card-img-top" src={seno1} alt="Card image cap"/>
        </div>


        <div class=" mx-5 my-3 scenario1" style={{width:"19rem"}}>
        <img class="card-img-top" src={seno2} alt="Card image cap"/>
        </div>
    </div>


    </div>
  )
}

export default Scenarios
