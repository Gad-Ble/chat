import React from 'react';
import Classes from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={Classes.messages}>
            <div className={Classes.chat_history}>
                <div className={Classes.accepted}>
                    <img src="#" alt="#"/>
                    <p className={Classes.message}>Hello</p>
                </div>
                <div className={Classes.sent}>
                    <p className={Classes.message}>Hello</p>
                    <img src="#" alt="#"/>
                </div>
            </div>
        </div>
    )
};

export default Messages;