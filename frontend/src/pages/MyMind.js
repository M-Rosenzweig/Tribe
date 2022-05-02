import React from 'react'
import "./MyMind.css"
import FeelingsCard from '../components/FeelingsCard'


function MyMind() {
  return (
    <div className='myMindMaster' >
      <div className='PrioritiesSection' >
        <h1 className='PrioritiesTitle'>My Priorities</h1>
        <FeelingsCard/>
        <FeelingsCard/>
    {/* <input type="text" className='PriorityInput'></input> */}
    {/* value={} onChange={} */}
    {/* <input className='logininput' placeholder='Priorities' ></input> */}

      </div>

      <div className='WorriesSection' > 
        <h1 className='WorriesTitle'>Whats Holding Me Back</h1>
        <FeelingsCard/>
        <FeelingsCard/>
      </div>

      <div className='EnergySection'> 
        <h2> Toggle Your Energy Level</h2>
        <button className='EnergyButton'> Awesome </button>
      </div>
      
    
    
    </div>
  )
}

export default MyMind