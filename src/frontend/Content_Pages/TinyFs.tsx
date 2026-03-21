import "./TinyFs.css"

import FileSystemDemo from "../../assets/File_System_Demo.png";


function File_System(){


    return(

        <div className="File_System_Div">

            <div className="Picture_Paragraph_Container_TFS">

                <img className="FS_Image"src={FileSystemDemo}/>
                <p>

                    The most impressive project I've done so far is the tiny file system I wrote for my Operating Systems class.
                    Against my best judement, I did this all myself.
                    The tiny file system assignment he gave us at the end of the quarter was meant for four people to complete over 3 weeks. With great difficulty, I did it myself in that time 
                    and earned myself the second best score on the project in the class. I still feel proud of that.
                    <br/>
                    My professor has asked us not to make the source code of the assignment publically accessible on Github, and therefore I cannot display it.
                    I would be willing to pull it up during an interview, however. TinfyFS is capable of reading, writing, and deleting files,
                    as well as its hierarchical directory, defragmenting, and list features. We had to simulate a disk and write this file system all from scratch in C. I plan on making a box such that people can ssh into File_System_Demo@AnthonyGunnarPage.com to interact with my project soon.

                </p>

            </div>
            

        </div>

    );
}

function TinyFS(){

    return(<File_System/>);

}

export default TinyFS;

