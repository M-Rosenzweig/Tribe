import React, { useEffect, useState } from "react";
import "./AppComingSoon.css";
// import PreviewChat from "../components/PreviewChat"
import PreviewTribe from "../components/PreviewTribe";
import { BsChatSquare } from "react-icons/bs";
import { FaCampground } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { GiCampfire } from "react-icons/gi";


function AppComingSoon() {
  const [active, setActive] = useState('Tribe');
  const [trigger, setTrigger] = useState(true);
  

  function handleActiveSetter(number) {
    setTrigger(!trigger)
    switch (number) {
      case 1:
        setActive('Tribe')
        break;
        case 2:
          setActive('Energy')
          break;
          case 3:
            setActive('Chat')
            break;
            case 4:
              setActive('Resources')
              break;
              case 5:
                setActive('Governance')
                break;
    }
  }

  return (
    <div className="MasterAppSoon">
      <div className="TribeApp">
        <h2 className="TribeNameSoon">Tribe</h2>
        {/* <p className="StrongerSoon"> Stronger Together </p> */}
      </div>

      <div id="SwitchUpComponent ">
       <PreviewTribe
       active={active}
       trigger={trigger}
       />
      </div>

      <div className="MasterAppStore">
        <div className="AppleAppStore"></div>
        <div className="AppleAppStore2"></div>
      </div>

      <div>
      <p className="StrongerSoon"> Stronger Together </p>
      </div>

      <div className="OptionsMobile slide-in-bottom ">
        <div id={active === 'Tribe' ? "SelectedButton" : ''} className="IndividualButton" onClick={()=> handleActiveSetter(1)}>
          <FaCampground />
        </div>
        <div id={active === 'Energy' ? "SelectedButton" : ''} className="IndividualButton" onClick={()=> handleActiveSetter(2)}>
          <FiCoffee />
        </div>
        <div id={active === 'Chat' ? "SelectedButton" : ''} className="IndividualButton" onClick={()=> handleActiveSetter(3)}>
          <BsChatSquare />
        </div>
        <div id={active === 'Resources' ? "SelectedButton" : ''} className="IndividualButton" onClick={()=> handleActiveSetter(4)}>
          <BsBoxSeam />
        </div>
        <div id={active === 'Governance' ? "SelectedButton" : ''} className="IndividualButton" onClick={()=> handleActiveSetter(5)}>
          <GiCampfire />
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default AppComingSoon;
