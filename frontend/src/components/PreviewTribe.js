import React, {useEffect, useState} from 'react'
import './PreviewTribe.css';

function PreviewTribe({active, trigger}) {
  const [title, setTitle] = useState('')
  const [textInfo, setTextInfo] = useState('')
  const [count, setCount] = useState(0)
  const [slide, setSlide] = useState('slide-in-left ')

  let tribeTitle = "Connect"
  let tribeInfo = "A Tribe is much more than a group - it is a unit that shares resources and energy. A Tribe holds each other accountable and makes sure no one is left behind. Join a Tribe or found one today."
  let energyTitle = "Energy"
  let energyInfo = "Live share your priorities and blockers and get live interactive feedback in the chat."
  let chatTitle = "Chat"
  let chatInfo = "View Tribe members priorities and Blockers. View their energy and easily update your own."
  let resourcesTitle= "Resources"
  let resourcesInfo = "Share you top resources and links and place them in the appropriate Box for other members to find."
  let governanceTitle = "Governance"
  let governanceInfo = "All tribe members are equal. Governance facilitates the democratic voting and security decisions of the tribe "

  console.log(count);





  useEffect(() => {
    switch (active) {
      case "Tribe":
      setTitle(tribeTitle)
      setTextInfo(tribeInfo)
      setCount(count+1)
      break;
      case "Energy":
      setTitle(energyTitle)
      setTextInfo(energyInfo)
      setCount(count+1)
      break;
      case "Chat":
      setTitle(chatTitle)
      setTextInfo(chatInfo)
      setCount(count+1)
      break;
      case "Resources":
      setTitle(resourcesTitle)
      setTextInfo(resourcesInfo)
      setCount(count+1)
      break;
      case "Governance":
      setTitle(governanceTitle)
      setTextInfo(governanceInfo)
      setCount(count+1)
      break;
    }
  },[active])

  useEffect(()=> {
    if(count > 1) {
      setSlide("slide-in-left")
    }
  },[active])

  return (
    <div>
    <h1 className='TitleSwitchComponent'>{title}</h1>
    {/* <p>Tribe Members look out for each other and no one is left. Easily Slide into your different Tribes dependant on goal and focus of each group. </p> */}
    <p className='PreviewText'> {textInfo}</p>
  </div>
  )
}

export default PreviewTribe