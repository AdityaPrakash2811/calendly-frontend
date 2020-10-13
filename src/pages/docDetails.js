import React from 'react';
import {Link} from 'react-router-dom';
//import logo from "./doc2.png"
 
function docDetails(){
    return(
        <div className='docDetails'>
            
            <div className="row">
                <nav className="navbar">
                    <Link to='/'>
                        <button className="btn btn-outline-primary buttonBack"><i className="fa fa-arrow-left"></i></button>
                    </Link>
                    <Link to='/schedule'>
                        <button className="btn btn-success mr-4">Book Appointment</button>
                    </Link>
                </nav>
            </div>
            
            <div className="row det1">
                <div className="card border-primary mb-3 mt-3 ml-5 col-9">
                    <div className="card-body bg-waning text-primary">
                        <h1 className="card-title">Dr. ABC</h1><br/>
                        <h2>General Surgeon</h2>
                        <p className="text-success"><i className='fa fa-map-marker'></i>H/31, Hem Tower, Gandhi road<br/>Patna, Bihar</p>
                        <p className="text-secondary"><i className='fa fa-phone'></i>9835567998</p><br/>

                        <p className="card-text">
                            One of the professional quality of <b>Dr. ABC</b> is his humanity. She undoubtedly takes good care 
                            of your health both mental and physical.
                        </p>
                        <b><u><h4>Education</h4></u></b>
                        <p>
                            Ranchi Institute of Medical Sciences(MBBS)<br/>
                            Govt. Medical College, Salem(Gen. Surgery) 
                        </p>

                        <b><u><h4>Experience</h4></u></b>
                        <p>
                            Mission Hospital Durgapur(7 years)<br/>
                            PMCH, Patna(HOD Gen. Surgery)
                        </p>

                        <b><u><h4>Publications</h4></u></b>
                        <p>
                            Journal for Medical Researches, Chennai<br/>
                            Efficient dealing of craniotomy,SAGE Publications<br/>
                            MRI: A new Implementation 
                        </p>

                        <p>
                            <b>Dr. ABC</b> plans to extend a helping hand to the society using her experience and efforts.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default docDetails;