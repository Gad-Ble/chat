import React from 'react';
import Classes from './Contacts.module.css';


const Contacts = () => {
    return (
        <div className={Classes.contacts}>
            <div className={Classes.search}>
                <input className={Classes.search_area} type="text"/>
                <button className={Classes.search_btn}>Поиск</button>
            </div>
            <div className={Classes.contact + ' ' + Classes.active}>
                <img src="#" alt="#"/>
                Contact User
            </div>
            <div className={Classes.contact + ' ' + Classes.checked}>
                <img src="#" alt="#"/>
                Contact User
            </div>
            <div className={Classes.contact}>
                <img src="#" alt="#"/>
                Contact User
            </div>
        </div>
    )
};

export default Contacts;