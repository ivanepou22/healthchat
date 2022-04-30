import React from 'react'
import Dermatology from '../assets/Images/specialty/002-dermatology.png'
import internalmedicine from '../assets/Images/specialty/internalmedice.png'
import neurology from '../assets/Images/specialty/003-brain.png'
import GeneralMedicine from '../assets/Images/specialty/004-hospital.png'
import dentistry from '../assets/Images/specialty/006-dentistry.png'
import Otolaryngology from '../assets/Images/specialty/ear.png'
import Cardiology from '../assets/Images/specialty/009-cardiology.png'
import Urology from '../assets/Images/specialty/010-urology.png'
import Allergy from '../assets/Images/specialty/012-allergy.png'
import Pediatrics from '../assets/Images/specialty/013-pediatrics.png'
import Gastroenterology from '../assets/Images/specialty/015-stomach.png'
import Infectious from '../assets/Images/specialty/016-virus.png'
import HIVAIDS from '../assets/Images/specialty/cancer-ribbon.png'
import Gynecology from '../assets/Images/specialty/gynecology.png'
import '../assets/styles/Specialities.css';

const Specialities = () => {
    return (
        <div className="container-fluid bg-maroon">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="specialities-container">
                            <div className="specialty-wrapper">
                                <div className="specialty-header">
                                    <h1>Our Consulting Specialties</h1>
                                    <p>
                                        Ask a doctor online and get quick medical advice for your health queries.
                                        Our medical panel consists of over 1000+ doctors from a variety of Specialties.
                                    </p>
                                </div>
                                <div className="specialty-body">
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Dermatology} alt="Dermatology" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Dermatology</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={internalmedicine} alt="Internal Medicine" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Internal Medicine</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={neurology} alt="neurology" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Neurology</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={GeneralMedicine} alt="General Medicine" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>General Medicine</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={dentistry} alt="dentistry" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Dentistry</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Otolaryngology} alt="Otolaryngology" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Otolaryngology</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Cardiology} alt="Cardiology" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Cardiology</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Urology} alt="Urology" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Urology</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Allergy} alt="Allergy" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Allergy</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Pediatrics} alt="Pediatrics" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Pediatrics</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Gastroenterology} alt="Gastroenterology" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Gastroenterology</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Infectious} alt="Infectious" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Infectious Diseases</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={HIVAIDS} alt="HIVAIDS" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>HIV/AIDS</p>
                                        </div>
                                    </div>
                                    <div className="specialty-card shadow-sm">
                                        <div className="specialty-card-header">
                                            <span className='card-icon'>
                                                <img src={Gynecology} alt="Gynecology" />
                                            </span>
                                        </div>
                                        <div className="specialty-card-body">
                                            <p>Gynecology</p>
                                        </div>
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

export default Specialities