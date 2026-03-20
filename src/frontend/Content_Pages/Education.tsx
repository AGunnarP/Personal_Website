import "./Education.css"

import CalPolyLogo from "../../assets/Cal_Poly_Logo_and_Shield.png";


function Education(){


    return(
    
        <div className="Picture_Paragraph_Container">

                <img src={CalPolyLogo}/>
                <p>

                    I graduated from California Polytechnic State University - San Luis Obispo in December of 2025. 
                    I think my education was of incredible quality. 
                    Now all that's needed is for me to break into the industry.
                    <br/>
                    <br/>
                    I took electives pertaining to Networks, Cyber Security, and Web Development. Currently (02/01/2026) I'm working on my CCNA certification.

                </p>

                
         </div>

    );

}


export default Education;