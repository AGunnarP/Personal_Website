import "./ShortCuts.css"

import MailImage from "../assets/OE Create Mail.png"
import CalPolyLogo from "../assets/Cal_Poly_Logo_and_Shield.png";
import GradCap from "../assets/Grad_Cap.webp"
import CLogo from "../assets/C_Logo.png"
import RacketLogo from "../assets/Racket_Logo.svg"


function ShortCuts() {

    return(

        <div className="ShortCuts_Container">

            <button className = "Button_Container">

                <img className="Button_Image" src={MailImage} alt="Contact Info"/>

            </button>

            <button className = "Button_Container">

                <img className="Button_Image" src={CalPolyLogo} alt="My Education"/>

            </button>

            <button className = "Button_Container">

                <img className="Button_Image" src={GradCap} alt="Tutoring"/>    

            </button>

            <button className = "Button_Container">

                <img className="Button_Image" src={CLogo} alt="Tutoring"/>    

            </button>

            <button className = "Button_Container">

                <img className="Button_Image" src={RacketLogo} alt="Tutoring"/>

            </button>

        </div>

    );


}


export default ShortCuts;