import React from 'react';
import image from '../../images/createTicket.jpeg';

// Import necessary libraries and CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import "./Ticket.css"; // Import the custom CSS file
import { Link } from 'react-router-dom';

const UpdateTicket = () => {
  return (
    <div
      className="bg-light"
      style={{
        minHeight: '100vh',
        padding: '20px',
        background: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      
      <div className="container" style={{ backgroundColor: 'white', padding: '4%' }}>
        <h2 className='Ticket_topic' >Train Ticket Update</h2>
        <br/>

      
      <form>
        <h3> Edit The Journey Details </h3>
        <div className="row" style={{ textAlign: 'left', color:'gray', fontSize:'20px' }}>
            <center>
              <br/>
          <div className="col-md-7">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="text" id="date" className="form-control datepicker" required />
            
              <label htmlFor="time">Time</label>
              <input type="time" id="time" className="form-control" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="startingPoint">Starting Point</label>
              <select id="startingPoint" className="form-select" required>
                <option value="" disabled selected>Select Starting Point</option>
                <option>Gampaha</option>
                <option>Colombo-Fort</option>
                <option>Colombo-Maradana</option>
                <option>Colombo-Dematagoda</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="endingPoint">Ending Point</label>
              <select id="endingPoint" className="form-select" required>
                <option value="" disabled selected>Select Ending Point</option>
                <option>Gampaha</option>
                <option>Colombo-Fort</option>
                <option>Colombo-Maradana</option>
                <option>Colombo-Dematagoda</option>
              </select>
            </div>
            <br/>
            <div className="mb-3">
            <label htmlFor="search" className="visually-hidden">Search</label>
            <input type="text" id="search" className="form-control" placeholder="Search Trains" />
          </div>
            <div className="form-group">
              <button type="button" className="btn btn-primary">Search Trains</button>
            </div>
          </div>
          </center>

          <div>
          <Link to="/home">
          <button type="button" class="btn btn-secondary" style={{width:'100px'}} >Back  </button>
          </Link>

          <Link to="/#">
          <button type="button" class="btn btn-warning" style={{marginLeft: '80%'}} >Update</button>
          </Link>

          </div>

        </div>
        
      
      </form>
    </div>
    </div>
  );
};

export default UpdateTicket;
