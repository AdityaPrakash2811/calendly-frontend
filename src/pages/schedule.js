import React, {/*Component,*/useState} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
//import DatePicker from '@y0c/react-datepicker';
import logo from "./doc.jpeg";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux';
import {book} from '../actions/index'; 
//import store from '../index'
//import Calendar from 'react-calendar';
import "../datepicker.css"

const currHour=(new Date().getHours())
//console.log(currHour)
const currDate=(new Date().getDate())
//console.log(currDate)
const currMonth=(new Date().getMonth())
//console.log(currMonth)

function Schedule(props) {
    
    const[detailError,setDetailError]=useState(false);
    const[phnoError,setPhnoError]=useState(false);
    const[emailError,setEmailError]=useState(false);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[phno,setPhno]=useState('');
    const [startDate, setStartDate]=useState(new Date());
    const[ambulance, setAmbulance]=useState(true);
    //const k=(new Date().getHours())

    return (
        <div>

            <div className="row">
            <nav className="navbar">
                <Link to='/'>
                    <button className="btn btn-outline-primary buttonBack"><i className="fa fa-arrow-left"></i></button>
                </Link>
            </nav>
            </div>

            <div className="row schedule">
                
                <div className="col-sm-12 col-md-5 col-lg-3 info">
                    <Link to='/docDetails'>
                        <img src={logo} className="logo" alt="doc"/><br/>
                    
                        <h1><i className='fa fa-user-md drName'></i> Dr. ABC</h1>
                    </Link>
                    <hr/>
                    <p>
                        <i className='fa fa-list'></i> Fill in details to book meeting
                    </p><hr/>
                    <p>
                        <i className='fa fa-history'></i> Book an hourly slot
                    </p><hr/>
                    <p><i className='fa fa-briefcase'></i> Working hrs. on Weekdays</p>
                    <ul> 
                        <li>9AM - 5PM</li>
                        <li>1PM - 2PM(Lunch Break)</li>
                    </ul><hr/>
                    <p><i className='fa fa-briefcase'></i> Working hrs. on Saturday</p>
                    <ul> 
                        <li>9AM - 2PM</li>
                    </ul><hr/>
                    <p>
                        <i className='fa fa-times'></i> Closed on Sundays
                    </p><hr/>
                    <p>
                        <i className='fa fa-phone'></i> 9835567998
                    </p><hr/>
                </div>


                <div className="col-sm-12 col-md-7 col-lg-9 details">
                

                    <div>
                        {
                            props.booked==='book success'? 
                            <div className="card text-white border-success mb-3 mt-2 shadow-lg rounded resCard" role="alert">
                                <div className="card-header text-success">Booked</div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">Congrats<i className="fa fa-exclamation"></i></h5>
                                    <p className="card-text">Your slot has been booked</p>
                                </div>
                            </div> : null
                        }
                    </div>
                    <div>
                        {
                            props.booked==='book fail'?
                            <div className="card text-white border-danger mb-3 mt-2 shadow-lg rounded resCard" role="alert">
                                <div className="card-header text-danger">Unavailable</div>
                                <div className="card-body text-danger">
                                    <h5 className="card-title">Sorry<i className="fa fa-exclamation"></i></h5>
                                    <p className="card-text">It seems this slot is already booked. Please book another slot</p>
                                </div>
                            </div> : null
                            /*props.booked==='book fail'? 
                            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                
                                <div class="toast-body">
                                    Hello, world! This is a toast message.
                                </div>
                          </div>: null*/
                        }
                    </div>

                    <div>
                        {
                            props.loading===true ? 
                            <div class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>:null
                        }
                    </div>
                    <p className="enterDet">Enter Details</p>
                    <div className="input-group name">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default"><big><i className='fa fa-user'></i></big></span>
                        </div>
                        
                        <input className="shadow-lg bg-white rounded" id="name" placeholder="Name" required type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
                        {
                            detailError && name.length===0?
                            <big className="msg">
                                *Name is a required field(please enter)   
                            </big>: null
                        }
                    </div>


                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg"><big><i className='fa fa-envelope'></i></big></span>
                        </div>
                        <input className="shadow-lg bg-white rounded" id="email" placeholder="Email" required type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        {
                            detailError && email.length===0?
                            <big className="msg">
                                *Email is a required field(please enter)
                            </big>: null
                        }
                        {
                            emailError? 
                            <big className="msg">
                                *Invalid email(please enter a valid one)
                            </big> : null
                        }
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg"><big><i className='fa fa-phone'></i></big></span>
                        </div>
                        <input className="shadow-lg bg-white rounded" id="phno" placeholder="Contact No." type="number" value={phno} onChange={(e)=>{setPhno(e.target.value)}}/>
                        {
                            detailError && phno.length===0?
                            <big className="msg">
                                *Contact no. is a required field(please enter)
                            </big>: null
                        }
                        {
                            phnoError? 
                            <big className="msg">
                                *Please Enter 10 digits in Contact no.
                            </big> : null
                        }
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-lg"><big><i className='fa fa-calendar'></i></big></span>
                        </div>
                        <DatePicker className="datepicker shadow-lg bg-white rounded"
                        selected={startDate} 
                        onChange={date => setStartDate(date)}
                        minDate={new Date()}
                        minTime={new Date().setHours(8)}
                        maxTime={startDate.getDay()===6 ? new Date().setHours(14):new Date().setHours(18)}
                        showMonthDropdown
                        //isClearable
                        showTimeSelect
                        timeIntervals={60}
                        timeCaption="Time"
                        dateFormat="dd/MM/yyyy"
                        filterDate={date => date.getDay()!==0}
                        />
                        
                        {
                            (startDate.getDay()!==6 && startDate.getHours()===13) ? 
                            <small className="msg">1PM is lunch hour</small> : 
                            (startDate.getMonth()===currMonth && startDate.getDate()===currDate && startDate.getHours()<currHour) ? 
                            <small className="msg">This time slot has passed</small> : null
                        }
                    </div><br/>

                
                    <button onClick={()=>{ 
                                        if(name.length===0 || phno.length===0 || email.length===0 ){setDetailError(true)}
                                        else if(phno.length<10 || phno.length>10){setPhnoError(true);setDetailError(false);setEmailError(false)}
                                        else if(!email.includes('@') && !email.includes('.com')){setEmailError(true);setDetailError(false);setPhnoError(false);}

                                        else {  setDetailError(false)
                                                setPhnoError(false)
                                                setEmailError(false)
                                            props.submit(name, email, phno, startDate)} }} 
                                        className="btn bookBtn">Book Appointment</button>
                                        
                    <div className="row mt-4">
                    {
                        ambulance?<div className="card border-primary mb-3 ambulanceCard shadow-lg rounded">
                                    <div className="card-header">Ambulance Service</div>
                                    <div className="card-body text-primary">
                                        <h5 className="card-title text-danger"><i className="fa fa-ambulance"></i></h5>
                                        <input type='text' className="bg-light" placeholder="Enter Phno."/>
                                        <button type="button" className="btn btn-warning mt-4" onClick={()=>{setAmbulance(false)}}>Book Ambulance</button>
                                    </div>
                                </div>:<div className="card border-primary mb-3 ambulanceCard shadow-lg p-3 mb-5 rounded">
                                        <div className="card-header">Ambulance Service</div>
                                        <div className="card-body text-primary">
                                            <h5 className="card-title text-danger"><i className="fa fa-ambulance"></i></h5>
                                            <p>We will contact you shortly.</p>
                                            <button type="button" className="btn btn-warning mt-4" onClick={()=>{setAmbulance(true)}}>OK</button>
                                        </div>
                                    </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}



const mapDispatchToProps = dispatch => {
    return {
        submit:(name,email,phno,startDate) => {
            //console.log(name,email,phno,startDate);
            dispatch(book(name,email,phno,startDate)/*{type:book().type,payload:{name:name, email:email, phno:phno, startDate:startDate}}*/)
        }
    }
}

const mapStateToProps = state => {
    const booked=state.booked
    const loading=state.loading
    return {booked,loading};
}

export default connect(mapStateToProps,mapDispatchToProps)(Schedule);

/*class Schedule extends Component {
    
    constructor (props) {
      super(props)
      this.state = {
        name: "",
        email:"",
        phno:"",
        startDate:new Date()
      };
      this.handleChangeDate = this.handleChangeDate.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePhno = this.handleChangePhno.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePhno(event) {
        this.setState({phno: event.target.value});
    }
  
    handleChangeDate(date) {
      this.setState({
        startDate: date
      })
    }
  
    onFormSubmit(e) {
      e.preventDefault();
      const currDate=new Date();
      if((this.state.startDate.getDate()===currDate.getDate())&&(this.state.startDate.getHours()< currDate.getHours())){
        alert("This time slot has passed");
      }
      else if(this.state.startDate.getDay()===6){
        if(this.state.startDate.getHours()<9 || (this.state.startDate.getMinutes()>=0 && this.state.startDate.getHours()>=14)){
           alert('Clinic Closed in this slot')
        }
        else{
            console.log(this.state)
        }
      }
      else if(this.state.startDate.getHours()<9 || (this.state.startDate.getMinutes()>=0 && this.state.startDate.getHours()>=17)){
           alert('Clinic Closed in this slot')
      }
      else {
        if((this.state.startDate.getHours()===13)){
            alert('Lunch break')
        }
        else {
            //var n = (this.state.startDate).toISOString();
            console.log(this.state)
        }
      }
    }
   
    render() {
      return (
        <div className="row schedule">
            <div className="col-sm-12 col-md-12 col-lg-3 info">
                <Link to='/'>
                    <button className="btn btn-danger buttonBack">Back</button><br/>
                </Link>
                <img src={logo} className="logo" alt="doc"/>
                <p><br/>
                    <i className='fa fa-user-md'></i> Dr. ABC
                </p>
                <p>
                    <i className='fa fa-history'></i> Book an hourly slot
                </p>
                    Working hrs. on Weekdays
                    <ul> 
                        <li>9AM - 5PM</li>
                        <li>1PM - 2PM(Lunch Break)</li>
                    </ul>
                    Working hrs. on Saturday
                    <ul> 
                        <li>9AM - 2PM</li>
                    </ul>
                <p>
                    <i className='fa fa-times'></i> Closed on Sundays
                </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-9 form">
            <form onSubmit={ this.onFormSubmit }>
                <div className="form-group">

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default"><i className='fa fa-user'></i></span>
                        </div>
                        <input id="name" placeholder="Name" required type="text" value={this.state.name} onChange={this.handleChangeName}/>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default"><i className='fa fa-envelope'></i></span>
                        </div>
                        <input id="email" placeholder="Email" required type="text" value={this.state.email} onChange={this.handleChangeEmail}/>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default"><i className='fa fa-phone'></i></span>
                        </div>
                        <input id="phno" placeholder="Phone No." type="number" required value={this.state.phno} onChange={this.handleChangePhno}/>
                    </div>

                    
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default"><i className='fa fa-calendar'></i></span>
                        </div>
                        <DatePicker className="datepicker"
                        selected={ this.state.startDate }
                        onChange={ this.handleChangeDate }
                        minDate={new Date()}
                        //isClearable
                        showTimeSelect
                        timeIntervals={60}
                        timeCaption="Time"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        filterDate={date => date.getDay()!==0}
                        />
                    </div>

                    <button className="btn btn-success">Book</button>
                </div>
            </form>
            </div>
        </div>
      );
    }
    
  }*/


//export default Schedule;