import "./Contact_Info.css"

import ProfessionalImage from "../../assets/Me.jpeg";
import { useState } from "react";


function Blurb(){

    return(


        <div className="flex_container Contact_Info_Container">

            <div className="Left flex_container">

                <img src={ProfessionalImage} alt="Professional Image" />

                
                

                
            </div>

            <div className="Right flex_container">

                <p>

                    Hello! Thank you for visiting my website! My name is Anthony Page and I am a recent grad from Cal Poly San Luis Obispo with a Bachelor's of Science in Computer Science. I am currently based in Oakland.
                    <br/><br/>
                    
                    

                </p>

                <p>For business inquiries, please contact me at: <a href="mailto:AnthonyGunnarPage@gmail.com">AnthonyGunnarPage@gmail.com</a></p>


            </div>


         </div>

    )


}


function Contact_Info(){

    return(

        <Blurb/>

    );
    

}

export default Contact_Info;