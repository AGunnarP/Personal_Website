import "./Chat.css"

function Chat(){

    return(

        <div>

            <p>

                My Chat program is a robust chatroom program I had to write for my Networking class in university.
                It's written in C and uses system level TCP sockets in order to implement direct, broadcast, and multicast messaging through a chatroom
                with several clients running on different servers. It doesn't sound like a lot, but writing this at a system level robustly is quite the task.
                <br/><br/>
                Once again I cannot publish my source code publically, although I'm willing to pull it up privately. 
                I plan on making a box for people to interact with the chatroom through ssh ChatRoom@AnthonyGunnarPage.com soon.

            </p>

        </div>

    )


}

export default Chat;