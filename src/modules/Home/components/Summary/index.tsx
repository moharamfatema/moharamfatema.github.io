import React, {FC} from 'react'
import { contacts } from './contact'

const Summary: FC = () => {
    return (
        <div className='summary'>
            <h1 className='name font-bold text-[64px] select-all'>Fatema Moharam</h1>
            <div className="summary__content flex flex-col items-center gap-4">
                <h2 className='title font-normal text-3xl'>SWE and ML Engineer</h2>
                <div className="line w-full border-b-2 border-purple-600 h-0"></div>
                <div className="summary__contact">
                    {contacts.map((contact) => {
                        return (
                            <div className="contact__item flex items-center gap-2" key={contact.title}>
                                <i className={`${contact.icon} w-[17px] h-auto contact icon`}></i>
                                <a href={contact.link} target="_blank" rel="noreferrer" className='contact link select-all'>{contact.title}</a>
                            </div>
                        	)})}
                </div>
            </div>
        </div>
    )
}

export default Summary
