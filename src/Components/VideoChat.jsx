import React from 'react'
import { MdShowChart } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import '../assets/styles/VideoChat.css'
import videoChat from '../assets/Images/Web/videoChat.png';

const VideoChat = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="video-section-container">
                        <div className="video-section">
                            <div className="doctor-chat-title">
                                <h1>Video consultation for doctors and their patients</h1>
                                <p>
                                    Save yourself time and distance by easily online
                                    talk with your in the video consultation.
                                    The video consultation connects doctors and patients.
                                </p>
                                <div className="specialist-search">
                                    <form className='form'>
                                        <div className="search-section">
                                            <MdShowChart className='search-icon' />
                                            <input type="email" className="search-bar" placeholder="Specialist, condition, procedure" />
                                            <span className="btn-search">
                                                <FiSearch className='search-icon-i' />
                                                <span> Find my e-specialist</span>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="video-section bg-grey">
                            <img src={videoChat} className="doctor-chat-image" alt="doctor-chat" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoChat