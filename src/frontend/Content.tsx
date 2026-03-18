import "./Content.css"
import Contact_Info from "./Content_Pages/Contact_Info";

import {Window} from "./Windows";

type ContentProps = {

    display: number;

}

function Content({display}: ContentProps){

    switch(display){

        case Window.Contact_Info:
            return(<Contact_Info/>);
        case Window.Education:
            return(<div>Education</div>);
        case Window.Tutoring:
            return(<div>Tutoring</div>);
        case Window.TinyFS:
            return(<div>TinyFS</div>);
        case Window.Oazo:
            return(<div>Oazo</div>);

    }

};


export default Content;