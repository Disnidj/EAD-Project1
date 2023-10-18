import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './TrainSchedule.css';
import { Link, useNavigate } from 'react-router-dom';

const CreateTrainSchedule = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    startingStation: '',
    endingStation: '',
    duration: '',
    trainName: '',
    trainEngine: '',
    availableSeats: '',
    specialNotices: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to send to the API
    const scheduleData = {
      Date: formData.date,
      StartTime: formData.startTime,
      EndTime: formData.endTime,
      StartingStation: formData.startingStation,
      EndingStation: formData.endingStation,
      Duration: formData.duration,
      TrainName: formData.trainName,
      TrainEngine: formData.trainEngine,
      AvailableSeats: formData.availableSeats,
      SpecialNotices: formData.specialNotices,
    };

    // Send a POST request to your API
    fetch('https://localhost:7261/api/Schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scheduleData),
    })
      .then((response) => {
        if (response.ok) {
          // The POST request was successful
          console.log('Schedule created successfully.');
          alert('Schedule created successfully.');
          // Reset the form or perform any other actions as needed
          navigate('/train-view');
        } else {
          // Handle errors here
          console.error('Failed to create the schedule.');
          alert('Schedule is not created.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  return (
    <div className="container-fluid">
      <div className="bg-light">
        <div className="container mt-5">
          <h2 className="TrainScehdule_topic">Create Train Schedule</h2> <br />
          <form onSubmit={handleSubmit}>
            <div className="row" style={{ textAlign: 'left', color: 'gray', fontSize: '18px' }}>
              <div className="col-md-6">
                <hr />

                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date" // Use type="date" for date selection
                    id="date"
                    className="form-control datepicker"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="startTime" className="form-label">
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="startTime"
                    name="startTime"
                    placeholder="Enter the starting time"
                    required
                    value={formData.startTime}
                    onChange={handleInputChange}
                  />
                </div>

                <br />
                <hr />

                <div className="mb-3">
                  <label htmlFor="engine" className="form-label">
                    Train Engine
                  </label>
                  <select
                    className="form-select"
                    id="engine"
                    name="trainEngine"
                    required
                    value={formData.trainEngine}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Train Engine</option>
                    <option value="1001">1001</option>
                    <option value="1002">1002</option>
                    <option value="1003">1003</option>
                    <option value="1004">1004</option>
                    <option value="1005">1005</option>
                    <option value="1006">1006</option>
                    <option value="1007">1007</option>
                    <option value="1008">1008</option>
                    <option value="1009">1009</option>
                    <option value="1010">1010</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <hr />

                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">
                    Estimated Duration (hours)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="duration"
                    name="duration"
                    placeholder="Enter the duration"
                    required
                    value={formData.duration}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="endTime" className="form-label">
                    End Time
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="endTime"
                    name="endTime"
                    placeholder="Enter the ending time"
                    required
                    value={formData.endTime}
                    onChange={handleInputChange}
                  />
                </div>

                <br />
                <hr />
                <div className="mb-3">
                  <label htmlFor="trainName" className="form-label">
                    Train Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="trainName"
                    name="trainName"
                    placeholder="Enter the train name"
                    required
                    value={formData.trainName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="trainEngine" className="form-label">
                    Starting Station
                  </label>
                  <select
                    className="form-select"
                    id="startingStation"
                    name="startingStation"
                    required
                    value={formData.startingStation}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Starting Station</option>
                    <option>Gampaha</option>
                    <option>Colombo-Fort</option>
                    <option>Colombo-Maradana</option>
                    <option>Colombo-Dematagoda</option>
                    <option>Moratuwa</option>
                    <option>Panadura</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="endingStation" className="form-label">
                    Ending Station
                  </label>
                  <select
                    className="form-select"
                    id="endingStation"
                    name="endingStation"
                    required
                    value={formData.endingStation}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Ending Station</option>
                    <option>Gampaha</option>
                    <option>Colombo-Fort</option>
                    <option>Colombo-Maradana</option>
                    <option>Colombo-Dematagoda</option>
                    <option>Moratuwa</option>
                    <option>Panadura</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="availableSeats" className="form-label">
                  Available Seats
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="availableSeats"
                  name="availableSeats"
                  placeholder="Enter the available seats count"
                  required
                  value={formData.availableSeats}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="specialNotices" className="form-label">
                Special Notices
              </label>
              <textarea
                className="form-control"
                id="specialNotices"
                name="specialNotices"
                rows="4"
                placeholder="Type here ..."
                value={formData.specialNotices}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <Link to="/train-management">
                <button type="button" className="btn btn-secondary" style={{ marginRight: '20%', width: '110px' }}>
                  Back
                </button>
              </Link>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <br/> <br/> <br/> <br/><br/> <br/>
      </div>
    </div>
  );
};

export default CreateTrainSchedule;
