import "./ShortCuts.css"

import {Window} from "./Windows";
import MailImage from "../assets/OE Create Mail.png"
import CalPolyLogo from "../assets/Cal_Poly_Logo_and_Shield.png";
import GradCap from "../assets/Grad_Cap.webp"
import CLogo from "../assets/C_Logo.png"
import ChatIcon from "../assets/Whistler - User Accounts.png"

type ShortCutsProps = {
    setWindowDisplay : (window_display: number) => void;
}

function ShortCuts({ setWindowDisplay }: ShortCutsProps) {

    return(

        <div className="ShortCuts_Container">

            <button className = "Button_Container" onClick={() => setWindowDisplay(Window.Contact_Info)}>

                <img className="Button_Image" src={MailImage} alt="Contact Info"/>

            </button>

            <button className = "Button_Container" onClick={() => setWindowDisplay(Window.Education)}>

                <img className="Button_Image" src={CalPolyLogo} alt="My Education"/>

            </button>

            <button className = "Button_Container" onClick={() => setWindowDisplay(Window.Tutoring)}>

                <img className="Button_Image" src={GradCap} alt="Tutoring"/>    

            </button>

            <button className = "Button_Container" onClick={() => setWindowDisplay(Window.TinyFS)}>

                <img className="Button_Image" src={CLogo} alt="TinyFs"/>    

            </button>

            <button className = "Button_Container" onClick={() => setWindowDisplay(Window.Chat)}>

                <img className="Button_Image" src={ChatIcon} alt="Chat"/>

            </button>

        </div>

    );


}


export default ShortCuts;