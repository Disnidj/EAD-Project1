import React, { useState, useEffect } from 'react';
import image from '../../images/createTicket.jpeg'
import { Link } from 'react-router-dom';

const TicketManagement = () => {
  // Define sample ticket data
  // const ticketData = [
  //   {
  //     refID: '123D',
  //     trainName: 'Express 123',
  //     to: 'Moratuwa',
  //     from: 'Gampaha',
  //     ticketFare: '$400',
  //     seatNo: '4A',
  //     time: '19:00',
  //     date: '10-11-23'
  //   },
  //   {
  //     refID: '573E',
  //     trainName: 'Econmy 123',
  //     to: 'Galle',
  //     from: 'Colombo',
  //     ticketFare: '$1200',
  //     seatNo: '32D',
  //     time: '20:00',
  //     date: '12-11-23'
  //   },
  //   {
  //     refID: '124D',
  //     trainName: 'Express 123',
  //     to: 'Moratuwa',
  //     from: 'Gampaha',
  //     ticketFare: '$400',
  //     seatNo: '12A',
  //     time: '19:00',
  //     date: '10-11-23'
  //   },
  //   {
  //     refID: '345E',
  //     trainName: 'Econmy 123',
  //     to: 'Moratuwa',
  //     from: 'Colombo',
  //     ticketFare: '$100',
  //     seatNo: '15C',
  //     time: '10:00',
  //     date: '02-11-23'
  //   },
    

  //   // Add more train data as needed
  // ];

  // State to store the search term
  const [searchTerm, setSearchTerm] = useState('');
  const [ticketData, setTicketData] = useState([]);

      // Function to fetch the list of trains
      const fetchTickets = () => {
        fetch('https://localhost:7261/api/Reservation')
          .then((response) => response.json())
          .then((data) => setTicketData(data))
          .catch((error) => console.error('Error fetching tickets:', error));
      };
  
      useEffect(() => {
        fetchTickets();
      }, []);


  // Event handler for search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };



  //Delete function
  const handleDeleteTicket = (ticketId) => {
    // Display a confirmation dialog to the user
    const userConfirmed = window.confirm("Are you sure you want to delete this ticket?");
  
    if (userConfirmed) {
      // User confirmed, proceed with deletion
      fetch(`https://localhost:7261/api/Reservation/${ticketId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log('Ticket deleted successfully');
            alert('Ticket deleted successfully');
            fetchTickets();
          } else {
            console.error('Error deleting Ticket:', response.status);
            alert('Ticket deletion failed');
          }
        })
        .catch((error) => {
          console.error('Error deleting Ticket:', error);
          alert('Ticket deletion failed');
        });
    }
  };


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
    <div className="container mt-4">
      <h2 className="display-4 mb-4">Ticket Management</h2>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search tickets..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Reference ID</th>
            <th>Train Name</th>            
            <th>Departure Stand</th>
            <th>Destination</th>
            <th>Berth</th>
            <th>Time</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ticketData
            .filter((ticket) =>
            ticket.AvailableTrains.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.id}</td>
                <td>{ticket.AvailableTrains}</td>
                <td>{ticket.StartingPoint}</td>
                <td>{ticket.EndingPoint}</td>
                <td>{ticket.DoB}</td>
                <td>{ticket.Time}</td>
                <td>{ticket.Date}</td>
                <td> <Link to="/ticket-update"><button type="button" class="btn btn-warning"><i className="fas fa-edit"></i>&nbsp; Update</button></Link>
                &nbsp; 
                {/* <Link to="/#"><button type="button" class="btn btn-danger"><i className ="far fa-trash-alt"> </i>&nbsp; Delete</button></Link>*/}
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteTicket(ticket.id)}> <i className="far fa-trash-alt"></i>&nbsp; Delete Ticket </button></td>
                
                
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
    </div>
  );
};

export default TicketManagement;
