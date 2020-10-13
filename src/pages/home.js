import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./doc.jpeg";
import logo1 from './doc2.png'

function Home() {
  return (
    <div className="home">
        <div className="row">
        <nav className="navbar">
            <img src={logo1} alt="sign" className="sign"/>
        </nav>
        </div>

        <div className="card mt-5">
            <div className="card-header bg-primary">
                Dr. ABC
            </div>
            
            <div className="card-body">
                <img src={logo} className="logo1" alt="doc"/>
                <h5 className="card-title">Surgeon</h5>
                <Link to='/schedule'>
                    <button type="button" className="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Click to book Appointment">Book Appointment</button>
                </Link><br/><br/>
                <Link to='/docDetails'>
                    <button type="button" className="btn btn-success" data-toggle="tooltip" data-placement="top" title="Click to view Doctor Details">View Doctor Details</button>
                </Link>
            </div>
        </div><br />

        
    </div>
  );
}


export default Home;