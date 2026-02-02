import Headshot from "../assets/Professional_Image.jpg";

function ProfessionalImage(){

    return(<div className="Image_Container">

        <img className="Professional_Headshot" src={Headshot}></img>
        <p className="Image_Description"></p>

    </div>);


}

export default ProfessionalImage;