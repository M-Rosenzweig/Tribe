import React, {useEffect, useState} from 'react'
import './PreviewTribe.css';

function PreviewTribe({active, trigger}) {
  const [title, setTitle] = useState('')
  const [textInfo, setTextInfo] = useState('')

  let tribeTitle = "Connect"
  let tribeInfo = "A Tribe is much more than a group - it is a unit that shares resources and energy. A Tribe holds each other accountable and makes sure no one is left behind. Join a Tribe or found one today."
  let energyTitle = "Energy"
  let energyInfo = "Live share your priorities and blockers and get live interactive feedback in the chat."
  let chatTitle = "Chat"
  let chatInfo = "View tribe members priorities and blockers and Chat about them in real time! View their energy and easily update your own."
  let resourcesTitle= "Resources"
  let resourcesInfo = "Share your top resources and links and place them in the appropriate Box for other members to find."
  let governanceTitle = "Governance"
  let governanceInfo = "All tribe members are equal. Governance facilitates the democratic voting and security decisions of the tribe "

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [active]);

  useEffect(() => {
    switch (active) {
      case "Tribe":
      setTitle(tribeTitle)
      setTextInfo(tribeInfo)
      break;
      case "Energy":
      setTitle(energyTitle)
      setTextInfo(energyInfo)
      break;
      case "Chat":
      setTitle(chatTitle)
      setTextInfo(chatInfo)
      break;
      case "Resources":
      setTitle(resourcesTitle)
      setTextInfo(resourcesInfo)
      break;
      case "Governance":
      setTitle(governanceTitle)
      setTextInfo(governanceInfo)
      break;
    }
  },[active])

  return (
    <div>
      {/* 'TitleSwitchComponent' */}
    <h1 className={trigger ? "slide-in-left TitleSwitchComponent" : "slide-in-right TitleSwitchComponent"}>{title}</h1>
    {/* <p>Tribe Members look out for each other and no one is left. Easily Slide into your different Tribes dependant on goal and focus of each group. </p> */}
    <p className={trigger ? 'slide-in-left PreviewText' : 'slide-in-right PreviewText ' }> {textInfo}</p>
  </div>
  // PreviewText
  )
}

export default PreviewTribe