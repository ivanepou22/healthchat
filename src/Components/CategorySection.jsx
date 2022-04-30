import React, { useState } from 'react'
import { MdChat, MdVoiceChat } from 'react-icons/md'
import { AiOutlineWechat } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import doctorchat from '../assets/Images/doctor-chat.PNG'
import '../assets/styles/CategorySection.css';

const CategorySection = () => {
    const [checked, setChecked] = useState(true);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="category-section-container">
                        <div className="category-section height-100 width-100">
                            <img src={doctorchat} className="doctor-chat-image" alt="doctor-chat" />
                        </div>
                        <div className="category-section height-100 width-100">
                            <div className="doctor-chat-title">
                                <h1>Start an online chat consultation with a doctor</h1>
                                <p>
                                    Post unlimited follow-ups to the doctor and get instant feedback
                                    by picking one of our chat and video consultation Services.
                                    Easily accessible via our comprehensive chat and video consultation app available online.
                                </p>
                                <div className="consultation-options">
                                    <div className="consultation-option">
                                        <div className='round'>
                                            <input type="checkbox" id="query" />
                                            <label htmlFor="query"></label>
                                        </div>
                                        <span className='doctor-consult-option shadow-sm'>
                                            <MdChat className="chat-icon" />
                                            Query
                                        </span>
                                    </div>
                                    <div className="consultation-option">
                                        <div className='round'>
                                            <input type="checkbox"
                                                defaultChecked={checked}
                                                onChange={() => setChecked(!checked)}
                                                id="chat" />
                                            <label htmlFor="chat"></label>
                                        </div>
                                        <span className='doctor-consult-option shadow-sm'>
                                            <AiOutlineWechat className="chat-icon" />
                                            Chat
                                        </span>
                                    </div>
                                    <div className="consultation-option">
                                        <div className='round'>
                                            <input type="checkbox" id="voice" />
                                            <label htmlFor="voice"></label>
                                        </div>
                                        <span className='doctor-consult-option shadow-sm'>
                                            <FaPhoneAlt className="chat-icon" />
                                            Voice Call
                                        </span>
                                    </div>
                                    <div className="consultation-option">
                                        <div className='round'>
                                            <input type="checkbox" id="video" />
                                            <label htmlFor="video"></label>
                                        </div>
                                        <span className='doctor-consult-option shadow-sm'>
                                            <MdVoiceChat className="chat-icon" />
                                            Video
                                        </span>
                                    </div>
                                </div>
                                <span className='consultation-btn'>
                                    <a href="#/">
                                        start Chat consultation
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorySection