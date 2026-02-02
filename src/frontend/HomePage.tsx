import "./HomePage.css"
import ProfessionalImage from "./ProfessionalImage";

function HomePage(){

    return(
    
    <div className="HomePage_Div">

        <div className="Headshot_and_Intro_Paragraph_Container">


            <ProfessionalImage/>


            <div className="First_Paragraph_Container">

                <p>

                    Hello! My name is Anthony Page. I am a recent college graduate from Cal Poly San Luis Obispo having achieved a Bachelor's of Science in Computer Science in December 2025.
                    Now I'm starting my career in Technology and Education.

                    <br/>
                    <br/>
                    For business inquiries please contact: <a>AnthonyGunnarPage@gmail.com</a>
                    My <a href="https://www.linkedin.com/in/anthony-page-2a33b31b8/">LinkedIn</a>
                    My <a href="https://github.com/AGunnarP">Github</a>

                </p>


            </div>

        </div>


    </div>);

}

export default HomePage;