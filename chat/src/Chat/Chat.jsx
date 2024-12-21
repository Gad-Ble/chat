import React from 'react';
import Classes from './Chat.module.css';
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";
import Footer from "./Footer/Footer";

const Chat = () => {
    return (
        <div className={Classes.chatMessage}>
            <Contacts/>
            <Messages/>
            <Footer/>
        </div>
    )
};

export default Chat;