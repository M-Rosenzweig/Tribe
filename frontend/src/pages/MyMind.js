import React, { useState, useEffect } from 'react'
import "./MyMind.css"
import FeelingsCard from '../components/FeelingsCard'


function MyMind({user}) {

  const [energy, setEnergy] = useState('')
  const [className, setClassName] = useState('EnergyButton')
  const [feeling, setFeeling] = useState('Toggle Me')
  console.log(energy);
  let ID = user.id
  
  useEffect(() => {
    // auto-login
    fetch(`/energy/${ID}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((energyData) => {
          console.log(energyData)
         setEnergy(energyData)
        })
      }
    });
  }, [user]);

  useEffect(() => {
    if(energy == 1){
      setClassName("EnergyWeak")
    } else if(energy ==2) {
      setClassName("EnergyDecent")
    } else if(energy == 3){
      setClassName('EnergySolid')
    } else if(energy == 4){
      setClassName('EnergyAwesome')
    }
  },[energy])

  function handleEnergyShift() {
    fetch(`/update/${ID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      }, 
    }).then(resp => resp.json()) 
    .then(data => console.log(data))
    if (energy == 1) {
      setEnergy(energy + 1) 
      setFeeling("Decent")
    } else if (energy == 2) {
      setEnergy(energy + 1)
      setFeeling("Solid")
    } else if (energy == 3) {
      setEnergy(energy + 1)
      setFeeling('Awesome')
    } else if (energy == 4) {
      setEnergy(1)
      setFeeling('Weak')
    }
    
  }

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
      <button id='EnergyButton' className={className} onClick={handleEnergyShift} > {feeling} </button>

      </div>

      
    
    
    </div>
  )
}

export default MyMind