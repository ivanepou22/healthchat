import React from 'react'
import specialist from '../assets//Images//specialty/005-doctor.png'
import group from '..//assets//Images/Web/group.png'
import lock from '../assets//Images/Web/lock.png'
import communication from '../assets//Images/Web/communications.png'
import '../assets/styles/TrustSection.css'

const TrustSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="trust-section-container">
                        <div className="trust-section-header">
                            <h1>Why should you trust us ? Get to know about us.</h1>
                        </div>
                        <div className="trust-section-content">
                            <div className="trust-section">
                                <div className="trust-icon">
                                    <img src={specialist} alt="specialist" />
                                </div>
                                <div className="trust content">
                                    <h3>All Specialist</h3>
                                    <p>
                                        You can reach out to 1000+ doctors
                                        from 80+ specialities, who are experienced
                                        in telemedicine.
                                    </p>
                                </div>
                            </div>
                            <div className="trust-section">
                                <div className="trust-icon">
                                    <img src={lock} alt="lock" />
                                </div>
                                <div className="trust content">
                                    <h3>Private & Secure</h3>
                                    <p>All your data is protected and safeguarded
                                        with sucres SSL and data at rest encryption.
                                    </p>
                                </div>
                            </div>
                            <div className="trust-section">
                                <div className="trust-icon">
                                    <img src={group} alt="group" />
                                </div>
                                <div className="trust content">
                                    <h3>Million Customers</h3>
                                    <p>Trusted by millions and serving users
                                        from all over the world. Users from 196+ countries.
                                    </p>
                                </div>
                            </div>
                            <div className="trust-section">
                                <div className="trust-icon">
                                    <img src={communication} alt="communication" />
                                </div>
                                <div className="trust content">
                                    <h3>Chatbot Support</h3>
                                    <p>Get access to HealthCare via chat bots for a
                                        fantastic telehealth service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrustSection