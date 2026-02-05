import { useState } from "react";

type BlurbProps = {
  score: number;
};



function Blurb(score: BlurbProps){


    return(

        <div className="Tutor_Blurb_Div">

            <p>

                I have partnered with Champion Sports and Tutoring and Study Smart Tutors to serve students in the Bay area.
                I have provided in and after school tutoring to students in the Bay Area since October in subjects including math, physics, chemistry, and ELA.

                <br/>
                <br/>
                
                I'm also within the top <a href="https://leetcode.com/u/AnthonyPage">{score.score}</a> percent of leetcode competitive coding contest players in terms of elo.
                I received a top rate Data Structures and Algorithms education and I'm happy to pass it on.

                <br/>
                <br/>

                My rate is $45 an hour for school related tutoring and $75 an hour for Data Structure and Algorithms for tech interviews.
                Payment will be made up front in cash each session. Email me to book a session.

            </p>

        </div>

    );


}


function TutorPage(){

    const [score, setScore] = useState<number>(19.59);

    async function Percentage(){

        var p = (await fetch("/api/rank"));
        var percentage = (await p.json())
            
        setScore(percentage);

    }

    Percentage();

    return(
    
    <div className="Tutor_Div">

        
        <Blurb score={score}/>


    </div>
    
);

}

export default TutorPage;