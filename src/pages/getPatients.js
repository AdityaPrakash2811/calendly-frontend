import React from "react";
import { connect } from "react-redux";
import {getMeetings} from '../actions/index';
import {Link} from 'react-router-dom';
//import {Link} from 'react-router-dom';


function getPatients(props) {
  return (

    <div className="getPatients">

        <div className="row">
        <nav className="navbar">
            <Link to='/'>
                <button className="btn btn-outline-primary buttonBack"><i className="fa fa-arrow-left"></i></button>
            </Link>
        </nav>
        </div>

        <button type="button" className="btn btn-outline-info mt-4" onClick={()=>{props.submit()}}>View</button>
        {
            props.meetingFetch==='Success'?<div>
                {props.user.map((user)=>(
                    /*<h5 key={user.id}>{user.name}{user.start_date}</h5>*/
                    <div className="card border-secondary mb-3 meetingCard" key={user.id}>
                        <div className="card-header"><i className='fa fa-calendar'></i> {new Date(user.start_date).toDateString()}</div>
                        <div className="card-body">
                            <span><i className='fa fa-history'></i> {new Date(user.start_date).getHours()-5+":"+(new Date(user.start_date).getMinutes()-30)+"0-"}</span>
                            <span>{new Date(user.start_date).getHours()-4+":"+(new Date(user.start_date).getMinutes()-30)+"0"}</span>
                            <span className="meetingName"><i className='fa fa-user'></i> {user.name}</span>
                            <span className="meetingEmail"><i className='fa fa-envelope'></i> {user.email}</span>
                        </div>
                    </div>
                ))
            }</div>:null
        }
    </div>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        submit:()=>{
            dispatch(getMeetings())
        }
    }
}

const mapStateToProps = state => {
    if(state.users.data!==undefined){
    const users=state.users.data.data
    const meetingFetch=state.meetingFetch
    //console.log(users[0])
    const user=users[0]
    return {meetingFetch,user}
    }
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(getPatients);
