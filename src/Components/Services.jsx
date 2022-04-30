import React from 'react'
import { RiSurgicalMaskLine } from 'react-icons/ri'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { RiStethoscopeFill } from 'react-icons/ri'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { SiSpeedtest } from 'react-icons/si'
import '../assets/styles/Services.css'

const Services = () => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className='row'>
                    <div className='col-12'>
                        <div className="services-container">
                            <div className="service-wrapper shadow-sm p-3 bg-white rounded">
                                <div className="service-icon shadow-sm">
                                    <AiOutlineVideoCamera />
                                </div>
                                <div className="service-content">
                                    <div className="service-title">
                                        <h3>Video Consultation</h3>
                                    </div>
                                    <div className="service-description">
                                        <p>Connect within 60 Secs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-wrapper shadow-sm p-3 bg-white rounded">
                                <div className="service-icon shadow-sm">
                                    <RiStethoscopeFill />
                                </div>
                                <div className="service-content">
                                    <div className="service-title">
                                        <h3>Find Doctors</h3>
                                    </div>
                                    <div className="service-description">
                                        <p>Confirmed Appointments.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-wrapper shadow-sm p-3 bg-white rounded">
                                <div className="service-icon shadow-sm">
                                    <MdOutlineMedicalServices />
                                </div>
                                <div className="service-content">
                                    <div className="service-title">
                                        <h3>Medicine</h3>
                                    </div>
                                    <div className="service-description">
                                        <p>Essentials at your doorstep.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-wrapper shadow-sm p-3 bg-white rounded">
                                <div className="service-icon shadow-sm">
                                    <SiSpeedtest />
                                </div>
                                <div className="service-content">
                                    <div className="service-title">
                                        <h3>Lab Tests</h3>
                                    </div>
                                    <div className="service-description">
                                        <p>Sample Pickups at your home.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="shadow-sm p-3 bg-white rounded service-wrapper">
                                <div className="service-icon shadow-sm">
                                    <RiSurgicalMaskLine />
                                </div>
                                <div className="service-content">
                                    <div className="service-title">
                                        <h3>Surgeries</h3>
                                    </div>
                                    <div className="service-description">
                                        <p>Safe and trusted surgery Centers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services