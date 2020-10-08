import React from 'react';
import styled from "styled-components";
import Header from './Header/Headers';
import NewRideForm from './NewRideForm/NewRideForm';

const StyledPageBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(34,75,195);
  background: linear-gradient(0deg, rgba(34,75,195,1) 0%, rgba(45,196,253,1) 100%);
`;

function MainPage() {
  return (
    <StyledPageBackground>
      <Header title="Paris Taxi" subtitle="Pricing Microservice Demo" />
      <NewRideForm></NewRideForm>
    </StyledPageBackground>
  );
}

export default MainPage;
