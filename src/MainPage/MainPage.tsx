import React, { useReducer } from 'react';
import Header from './Header/Header';
import NewRideForm from './NewRideForm/NewRideForm';
import RidesList from './RidesList/RidesList';
import "./MainPage.scss";
import { IMainPageContext, initialState } from './MainPageStore/state';
import { ridesReducer } from './MainPageStore/reducer';

// Create context object
export const MainPageContext = React.createContext({} as IMainPageContext);


const MainPage = () => {

  const [state, dispatch] = useReducer(ridesReducer, initialState);

  return (
    <div className="main-page">
      <Header title="Paris Taxi" subtitle="Pricing Microservice Demo" />
      <MainPageContext.Provider value={{ state, dispatch }}>
        <NewRideForm />
        <RidesList />
      </MainPageContext.Provider>
    </div>
  );
}

export default MainPage;
