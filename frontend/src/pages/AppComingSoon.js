import React, {useState} from "react";
import "./AppComingSoon.css";
import { RiSailboatLine } from "react-icons/ri";
import { BsChatSquare } from "react-icons/bs";
import { FaCampground } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { GiCampfire } from "react-icons/gi";


function AppComingSoon() {
  // const [active, setActive] = useState("")
  return (
    <div className="MasterAppSoon">
      {/* <div className='TitleApp'> */}
      <div className="TribeApp">
        <h2 className="TribeNameSoon">Tribe</h2>
        <p className="StrongerSoon"> Stronger Together </p>
      </div>

      <div>
        <h1>My Tribes</h1>
        <p>Tribe Members are look out for each other and no one is left. Easily Slide into your different Tribes dependant on goal and focus of each group. </p>
      </div>

      <div className="AppleAppStore"></div>

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
