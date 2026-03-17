import "./Links.css";


import LinkedInLogo from "../assets/LinkedIn.png"
import GithubLogo from "../assets/Github_Logo.png"
import LeetcodeLogo from "../assets/LeetCode_logo.png"


function Links(){

    return(

        <div className="Links_Container">

            <a href="https://www.linkedin.com/in/anthony-page-2a33b31b8/" className="Link">

                <img className="a_image" src={LinkedInLogo} alt="LinkedIn Logo"></img>

            </a>

            <a href="https://github.com/AGunnarP" className="Link">

                <img className="a_image" src={GithubLogo} alt="GitHub Logo"></img>

            </a>

            <a href="https://leetcode.com/u/AnthonyPage" className="Link">

                <img className="a_image" src={LeetcodeLogo} alt="Leetcode Logo"></img>

            </a>


        </div>

    );

}

export default Links;