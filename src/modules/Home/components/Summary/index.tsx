import React, {FC} from 'react'
import { contacts } from './contact'

const Summary: FC = () => {
    return (
        <div className='summary flex flex-col items-center content-center h-full justify-center gap-4 md:gap-3 m-auto max-w-sm md:max-w-full'>
            <h1 className='name font-black text-4xl md:text-5xl select-all text-center w-full'>Fatema Moharam</h1>
            <div className="summary__content flex flex-col items-center gap-4  w-full">
                <h2 className='title font-medium text-2xl md:text-3xl'>SWE and ML Engineer</h2>
                <div className="line w-full border-b-2 border-purple-600 h-0"></div>
                <div className="summary__contact w-full ">
                    {contacts.map((contact) => {
                        return (
                            <div className="contact__item flex items-center gap-2" key={contact.title}>
                                <i className={`${contact.icon} w-[17px] h-auto contact icon`}></i>
                                <a href={contact.link} target="_blank" rel="noreferrer" className='contact link select-all p-2'>{contact.title}</a>
                            </div>
                        	)})}
                </div>
            </div>
        </div>
    )
}

export default Summary
