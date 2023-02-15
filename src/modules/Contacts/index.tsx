import React from 'react'
import { contacts } from '../../shared/data/contact'

const Contacts = () => {
    return (
        <div className="contacts w-full section-wrapper" id='contacts'>
            <a href='#contacts' className='section'>
                <p className='section-hash'
                >#</p>
                <h1 className='section-title'>Get in Touch</h1>
            </a>
            <div className="wrap py-7">

                {contacts.map((contact) => {
                    return (
                        <div className="contact__item flex items-center gap-2 ml-2" key={contact.title}>
                            <i className={`${contact.icon} w-[17px] h-auto contact icon`}></i>
                            <a href={contact.link} target="_blank" rel="noreferrer" className='contact link select-all p-2'>{contact.title}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contacts
