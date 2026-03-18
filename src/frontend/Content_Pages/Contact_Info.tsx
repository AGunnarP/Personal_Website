import "./Contact_Info.css"

import ProfessionalImage from "../../assets/Professional_Image.jpg";
import { useState } from "react";


function Blurb({score}: {score: number}){

    return(


        <div className="flex_container Contact_Info_Container">

            <div className="Left flex_container">

                <img src={ProfessionalImage} alt="Professional Image" />

                
                

                
            </div>

            <div className="Right flex_container">

                <p>

                    Hello! Thank you for visiting my website! My name is Anthony Page and I am a recent grad from Cal Poly San Luis Obispo with a Bachelor's of Science in Computer Science. I am currently based in Oakland.
                    <br/><br/>
                    I am currently a tutor teaching Math and Data Structures and algorithms. I charge a rate at $45/hr. I have six months of education experience and have carried out over 100 tutoring sessions. (I hate to brag about this but I feel the need to prove my credibility as a DSA tutor.) I am also within the top <a href="https://leetcode.com/u/AnthonyPage">{score}%</a> of users on Leetcode based on elo.
                    

                </p>

                <p>For business inquiries, please contact me at: <a href="mailto:AnthonyGunnarPage@gmail.com">AnthonyGunnarPage@gmail.com</a></p>


            </div>


         </div>

    )


}


function Contact_Info(){

    const [score, setScore] = useState<number>(10);

    async function Percentage(){
    
            var p = (await fetch("/api/rank"));
            var percentage = (await p.json())

            setScore(percentage);
    
        }

    Percentage();


    return(

        <Blurb score={score}/>

    );
    

}

export default Contact_Info;