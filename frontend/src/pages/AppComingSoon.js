import React, { useEffect, useState } from "react";
import "./AppComingSoon.css";
import PreviewChat from "../components/PreviewChat"
import PreviewTribe from "../components/PreviewTribe";
import { RiSailboatLine } from "react-icons/ri";
import { BsChatSquare } from "react-icons/bs";
import { FaCampground } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { GiCampfire } from "react-icons/gi";

function AppComingSoon() {
  const [active, setActive] = useState('Tribe');
  const [trigger, setTrigger] = useState(1);
  // state that maybe says something like 1234 and
  //when it is 1 we show tribe and when it is 2 we
  //show etc as well as onclick of each button we set the
  //number id to change it
  useEffect(() => {
    switch (trigger) {
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
  }, []);

  return (
    <div className="MasterAppSoon">
      <div className="TribeApp">
        <h2 className="TribeNameSoon">Tribe</h2>
        <p className="StrongerSoon"> Stronger Together </p>
      </div>

      <div id="SwitchUpComponent" className={active}>
       <PreviewTribe
       active={active}
       />
      </div>

      <div className="MasterAppStore">
        <div className="AppleAppStore"></div>
        <div className="AppleAppStore2"></div>
      </div>

      <div className="OptionsMobile slide-in-bottom ">
        <div className="IndividualButton">
          <FaCampground />
        </div>
        <div className="IndividualButton">
          <FiCoffee />
        </div>
        <div id="ChatButton" className="IndividualButton">
          <BsChatSquare />
        </div>
        <div className="IndividualButton">
          <BsBoxSeam />
        </div>
        <div className="IndividualButton">
          <GiCampfire />
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default AppComingSoon;
