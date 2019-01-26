import React from 'react'
import './App.css'
//Import route in the root 
import { Route} from 'react-router-dom'
//Import components from the Components folder
import MainPage from './Components/Pages/MainPage';
import SearchPage from './Components/Pages/SearchPage';

class BooksApp extends React.Component {
   render() {
    // Creating components to be mounted 
    return (
      <div>
        <Route exact path= "/" component= { MainPage } />
        <Route exact path= "/search" component= { SearchPage } />
      </div>
    );
    //Routes for the SearchPage and MainPages were moved into the SearchPage.js and MainPage.js files as part of creating React components
  }
}

export default BooksApp
