import "./Content.css";
import Contact_Info from "./Content_Pages/Contact_Info";
import Education from "./Content_Pages/Education";
import Tutoring from "./Content_Pages/Tutoring";
import TinyFS from "./Content_Pages/TinyFs";
import Chat from "./Content_Pages/Chat"

import {Window} from "./Windows";

type ContentProps = {

    display: number;

}

function Content({display}: ContentProps){

    switch(display){

        case Window.Contact_Info:
            return(<Contact_Info/>);
        case Window.Education:
            return(<Education/>);
        case Window.Tutoring:
            return(<Tutoring/>);
        case Window.TinyFS:
            return(<TinyFS/>);
        case Window.Chat:
            return(<Chat/>);

    }

};


export default Content;