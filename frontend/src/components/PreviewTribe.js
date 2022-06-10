import React, {useEffect, useState} from 'react'


function PreviewTribe({active}) {
  const [title, setTitle] = useState('')
  const [textInfo, setTextInfo] = useState('')

  let tribeTitle = "Connect"
  let tribeInfo = "A Tribe is much more than a group - it is a unit that holds each other accountable, shares resources, and makes sure no one is left behind. Join a Tribe or found one."
  let energyTitle = ""
  let energyInfo = ""
  let chatTitle = ""
  let chatInfo = ""
  let resourcesTitle= ""
  let resourcesInfo = ""
  let governanceTitle = ""
  let governanceInfo = ""


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
  },[])
  return (
    <div>
    <h1 className='TitleSwitchComponent'>{title}</h1>
    {/* <p>Tribe Members look out for each other and no one is left. Easily Slide into your different Tribes dependant on goal and focus of each group. </p> */}
    <p> {textInfo}</p>
  </div>
  )
}

export default PreviewTribe