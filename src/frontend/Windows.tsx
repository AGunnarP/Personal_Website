import "./Windows.css"

import ShortCuts from "./ShortCuts";

import WindowsImage from "../assets/windows_xp.webp"
import StartBar from "../assets/startbar1.png"
import Links from "./Links";


function Windows(){

    return(

        <div className="Windows_Container">

            <div className="Content_Container">

                <img className="Windows_Image" src={WindowsImage} alt="Windows Image"/>

                <div className="Shortcuts_Container">

                    <ShortCuts/>

                </div>

            </div>

            <div className= "Start_Bar_Container">

                <img className="Start_Bar" src={StartBar} alt="Start Bar"/>



                <Links/>                
                

            </div>

        </div>

        

    );

}

export default Windows;