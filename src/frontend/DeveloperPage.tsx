import ProfessionalImage from "./ProfessionalImage.tsx";

function Education(){

    return(

        <div className="Education_Div">

            <div className="Picture_Paragraph_Container">

                <img src="../assets/Cal_Poly_Logo_and_Shield.png"/>
                <p>

                    I graduated from California Polytechnic State University - San Luis Obispo in December of 2025. 
                    I think my education was of incredible quality. 
                    Now all that's needed is for me to break into the industry.
                    <br/>
                    <br/>
                    I took electives pertaining to Networks, Cyber Security, and Web Development. Currently (02/01/2026) I'm working on my CCNA certification.

                </p>

                
            </div>


        </div>

    );

};

function File_System(){


    return(

        <div className="File_System_Div">

            <div className="Picture_Paragraph_Container">

                <img src="../assets/File_System_Demo.png"/>
                <p>

                    I think the most impressive project I've done so far as a software developer is the tiny file system I wrote for my Operating Systems class (CSC 453) for Professor Foaad Khosmood.
                    A bit of a story, I decided that Operating Systems was a very important class for me to master, and so I decided to forgo a group and do all the projects in the class by myself.
                    The tiny file system assignment he gave us at the end of the quarter was meant for four people to complete over 3 weeks. With great difficulty, I did it myself in that time 
                    and earned myself the second best score on the project in the class. The mean score was 85 points, and I scored 108. I still feel proud of that.
                    <br/>
                    <br/>
                    As you may expect, my professor has askekd us not to make the source code of the assignment publically accessible on Github, and therefore I cannot display it on this portfolio. 
                    I would be willing to pull it up during an interview, however. Instead, here is a demo picture demonstrating my file systems capability of creating, reading, writing, and deleting files,
                    as well as its hierarchical directory, defragmenting, and list features. We had to simulate a disk and write this file system all form scratch in C. My project ended up being a little over
                    2000 lines of code.

                </p>

            </div>
            

        </div>

    );
}

function Programming_Language(){

    return(

        <div className="Programming_Language_Div">

            <div className="Picture_Paragraph_Container">

                <img src="../assets/Programming_Language_Demo"/>
                <p>

                    I think Professor Clements' Programming Language (CSC 430) class was the most difficult during my course at Cal Poly. 
                    We had to make a Turing complete purely functional programming language on week 2 and implement a new feature each week until week 10.
                    Often, we'd have to start from scratch as the feature was so fundemantal adding it constituted an entirely different programming language.
                    Up until that point I had never encountered the functional programming paradigm before.
                    Then I had to write a programming language in a functional programming language I didn't know and had received no instruction on at week 2, definitely put some hair on my chest.
                    I definitely see the perks of a functional paradigm, I think one of my next projects will be writing a web application in elixir.
                    <br/>
                    <br/>
                    Once again, I have been asked not to make a public repository as current students may copy from it, cheating themselves out of learning.
                    I don't think there would be much harm in screensharing some of the code and walking through it during an interview, however. 
                    For now please enjoy a demo of my language's capabilties.
                    


                </p>

            </div>

        </div>

    );

}

function Blurb(){

    return(

        <div className="Blurb_Div">

            <p>

                I'm open to freelance work. If you want a project done send me an email with its specifications and I'll send you a quote for its cost.
                <br/>
                <br/>
                The code for this website can be found <a href="https://github.com/AGunnarP/Personal_Website">here</a>

            </p>

        </div>

    );


}


function DeveloperPage(){

    return(

        <div className="Developer_Div">

            <Education/>
            <File_System/>
            <Programming_Language/>
            <Blurb/>


        </div>
    );

}

export default DeveloperPage;