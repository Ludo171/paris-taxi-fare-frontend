import React from 'react';
import Header from './Header/Header';
import NewRideForm from './NewRideForm/NewRideForm';
import "./MainPage.scss";

function MainPage() {
  return (
    <div className="main-page">
      <Header title="Paris Taxi" subtitle="Pricing Microservice Demo" />
      <NewRideForm />
    </div>
  );
}

export default MainPage;
