import "./DisplayWindow.css";

import {Window} from "./Windows";
import Content from "./Content";

import Logo from "../assets/anthonylogo.png"
import Exit from "../assets/Exit.png"

type DisplayWindowProps = {

    setWindowDisplay : (window_display: number) => void;
    display : number;

}



function DisplayWindow({ display, setWindowDisplay }: DisplayWindowProps){   


    console.log(Window);

    if(display === Window.No_Display)
        return(<div/>);


    return(


        <div className="Container_Container">


            <div className="Display_Window_Container">


                <img src={Logo} alt="Logo" className="Logo"/>

                <button className="Exit_Button" onClick={() => setWindowDisplay(Window.No_Display)}>

                    <img src={Exit} alt="Exit" className="Exit"/>

                </button>

                    
            
            <div className="Grey_Background">
                <div className="Content font-orange-kid">


                    <Content display={display} />


                </div>

            </div>


            </div>

        </div>



    );
}

export default DisplayWindow;