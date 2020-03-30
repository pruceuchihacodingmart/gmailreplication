import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbarcss.css';
import { FaSearch } from "react-icons/fa";
import Sidebar from './Sidebar';

// import Modal from '@material-ui/core/Modal';



export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayme: true
        };
    }
    
      
            
            onHandler=()=>{
        this.setState({displayme:!this.state.displayme})
    }

    

    render() {
        return (
            <div>
            <div className = 'navbardivcss'>
            <div><img className='burger' src= 'gmailbicon.png' onClick={()=>this.onHandler()}/></div>
            <div><img className='mail' src= 'gmailicon.png' /></div>
                <div className ='gmailtext'><p>Gmail</p></div>
                <span className="input-group-btn">
            <button className="btn search-btn" type="button"><FaSearch /></button>
            </span>
                <input type="text" placeholder='Search mail' className="form-control search-field"/>
                
            </div>
            <hr/>
            <Sidebar display= {this.state.displayme}/>

            </div>
        )
    }
}

