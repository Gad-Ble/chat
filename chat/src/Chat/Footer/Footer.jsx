import React from 'react';
import Classes from "../Footer/Footer.module.css";

const Footer = () => {
    return (
        <div className={Classes.send}>
            <input className={Classes.send_area} type="text"/>
            <button className={Classes.send_btn}>Отправить</button>
        </div>
    )
}

export default Footer;