import React, {FC} from 'react'
import { contacts } from './contact'

const Summary: FC = () => {
    return (
        <div className='summary'>
            <h1 className='name text-white font-bold text-[64px]'>Fatema Moharam</h1>
            <div className="summary__content flex flex-col items-center gap-4">
                <h2 className='title text-white font-normal text-3xl'>SWE and ML Engineer</h2>
                <div className="line w-full border-b-2 border-primary-yellow h-0"></div>
                <div className="summary__contact">
                    {contacts.map((contact) => {
                        return (
                            <div className="contact__item flex items-center gap-2 text-white" key={contact.title}>
                                <i className={`${contact.icon} w-[17px] h-auto`}></i>
                                <a href={contact.link} target="_blank" rel="noreferrer" >{contact.title}</a>
                            </div>
                        	)})}
                </div>
            </div>
        </div>
    )
}

export default Summary
