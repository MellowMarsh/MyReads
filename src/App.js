import React from 'react'
import './App.css'
//Import Router from library
import { Route} from 'react-router-dom'
//Import MainPage from the Components folder
import MainPage from './Components/Pages/MainPage';
//importing SearchPage Components folder
import SearchPage from './Components/Pages/SearchPage';

class BooksApp extends React.Component {
   render() {
    // Routing set up 
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
