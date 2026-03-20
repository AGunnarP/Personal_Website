import "./Windows.css"

import ShortCuts from "./ShortCuts";

import WindowsImage from "../assets/windows_xp.webp"
import StartBar from "../assets/startbar1.png"
import Links from "./Links";
import { useState } from "react";
import DisplayWindow from "./DisplayWindow";

export const Window = {

    No_Display: 0,
    Contact_Info: 1,
    Education: 2,
    Tutoring: 3,
    TinyFS: 4,
    Chat: 5

}

function Windows(){

    const [window_display, setWindowDisplay] = useState<number>(Window.No_Display);

    return(

        <div className="Windows_Container">

            <div className="Content_Container">

                <img className="Windows_Image" src={WindowsImage} alt="Windows Image"/>

                <div className="Shortcuts_Container">

                    <ShortCuts setWindowDisplay={setWindowDisplay}/>

                </div>

                <DisplayWindow display={window_display} setWindowDisplay={setWindowDisplay}/>

            </div>

            <div className= "Start_Bar_Container">

                <img className="Start_Bar" src={StartBar} alt="Start Bar"/>



                <Links/>                
                

            </div>

        </div>

        

    );

}

export default Windows;