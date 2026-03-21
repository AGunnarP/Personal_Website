import "./Tutoring.css"

import { useState } from "react";


function Blurb({score}: {score : number}){

    return(
        
        <div>

            <p>
                I am currently a tutor teaching Math and Data Structures and Algorithms (DSA). I have six months of education experience and have carried out over 100 tutoring sessions. (I hate to brag about this but I feel the need to prove my credibility as a DSA tutor.) I am also within the top <a href="https://leetcode.com/u/AnthonyPage">{score}%</a> of users on Leetcode based on elo. I charge a rate at $45/hr.
            </p>

        </div>

    );


}



function Tutoring(){

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


export default Tutoring;