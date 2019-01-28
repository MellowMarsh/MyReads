import React from 'react'
import './App.css'
//Import Router from library
import { Route} from 'react-router-dom'
//Import StartPage from the Components folder
import StartPage from './Components/StartPage';
//importing SearchPage Components folder
import SearchPage from './Components/SearchPage';

class BooksApp extends React.Component {
   render() {
    // Routing set up 
    return (
      <div>
        <Route exact path= "/" component= { StartPage } />
        <Route exact path= "/search" component= { SearchPage } />
      </div>
    );
  }
}
//Routes for the SearchPage and StartPage were moved into the SearchPage.js and PageHome.js files as part of creating React components


export default BooksApp
