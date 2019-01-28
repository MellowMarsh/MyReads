import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
//Importing the browser router from library
import { BrowserRouter} from 'react-router-dom'

//Wrapping BrowserRouter around the root which is App.js
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
document.getElementById('root'))
