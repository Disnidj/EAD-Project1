// Import necessary components and libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainManagement from "./components/Train/View";
import TicketManagement from "./components/Ticket/View";
import Home from "./components/Home";
import CreateTicket from "./components/Ticket/CreateTicket";
import UpdateTicket from "./components/Ticket/UpdateTicket";
import CreateTrainSchedule from "./components/Train/CreateTrainSchehdule";
import UpdateTrainSchedule from "./components/Train/UpdateTrainSchedule";

import PassengerDetails from "./components/Ticket/PassengerDetails";
import UpdatePassengerDetails from "./components/Ticket/UpdatePassengerDetails";

import LoginPage from "./components/Auth/Login"; // Import LoginPage component
import RegisterPage from "./components/Auth/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Form12 from "./components/Train/form"
import TrainFormPage from "./components/Train/CreateTrains";
import TrainsView from "./components/Train/ViewTrains";
import TrainStatusPage from "./components/Train/UpdateStatus";



//backoffice
import CreateTrainSchedule_BackOffice from "./components/BackOffice/CreateTrainSchehdule";
import UpdateTrainSchedule_BackOffice from "./components/BackOffice/UpdateTrainSchedule";
import TrainScheduleView_BackOffice from "./components/BackOffice/View"
import ActivatePage from "./components/Activate";
import UpdateUserProfile from "./components/BackOffice/UpdateUserProfile"

//Travel Agent
import CreateTicketAgent from "./components/TravelAgent/CreateTicket";
import PassengerDetailsAgent from "./components/TravelAgent/PassengerDetails";
import UpdateTicketAgent from "./components/TravelAgent/UpdateTicket"
import ViewTicketAgent from "./components/TravelAgent/View"

export default function AppRouter() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          
          <Route path="/home" element={<Home />} />
          <Route path="/trains" element={<TrainFormPage />} />
          <Route path="/train-management" element={<TrainManagement />} />
          <Route path="/train-create" element={<CreateTrainSchedule />} />
          <Route path="/train-update" element={<UpdateTrainSchedule />} />
          <Route path="/train-view" element={<TrainsView />} />
          <Route path="/train-status/:id" element={<TrainStatusPage />} />

          <Route path="/ticket-management" element={<TicketManagement />} />
          <Route path="/ticket-create" element={<CreateTicket />} />
          <Route path="/ticket-update/:id" element={<UpdateTicket />} />
          <Route path="/ticket-passenger1" element={<PassengerDetails />} />
          <Route path="/ticket-passenger-update" element={<UpdatePassengerDetails />} />


          <Route path="/ticket-form" element={< Form12/>} />


          {/* Backoffice components  */}
          <Route path="/train-create-backoffice" element={< CreateTrainSchedule_BackOffice/>} />
          <Route path="/train-update-backoffice" element={< UpdateTrainSchedule_BackOffice/>} />
          <Route path="/train-view-backoffice" element={< TrainScheduleView_BackOffice/>} />
          <Route path="/activate-account" element={<ActivatePage />} />
          <Route path="/Update-user-profile" element={<UpdateUserProfile />} />


          {/* Travel Agent */}
          <Route path="/Create-ticket-agent" element={<CreateTicketAgent />} />
          <Route path="/passenger-details-agent" element={<PassengerDetailsAgent />} />
          <Route path="/update-ticket-agent" element={<UpdateTicketAgent />} />
          <Route path="/view-ticket-agent" element={<ViewTicketAgent />} />





        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
