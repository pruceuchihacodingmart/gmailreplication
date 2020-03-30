import React, { Component } from 'react'
import './Mainsectorcss.css';

export default class Mainsector extends Component {
    constructor(props){
        super(props);
        this.state = {
            displays: true
        };
        
    }

    handlerdisplay=()=>{
        this.setState({displays: !this.state.displays})
    }   

    render() {
        
        return (
            <div >
                <button className= {this.props.flag ? 'bnone': 'btnclass'} onClick={()=>{this.props.undoHandler()}}>undo</button>
                {this.props.name && this.props.name.map(a => (
                <div className = 'Mainsectorcss' key={a.id}>
                    <div>
                        <input 
                        onClick={this.props.Selectlist.bind(null, a)}
                        type="checkbox"
                        /></div>
                    <div className="textcss">
                    <div>Name: {a.names}</div>
                     <div>Subject: {a.subjects}</div>
                     </div>
                     <div className="buttoncss">
                    <button onClick={()=>{this.props.closeHandler(a)}}>delete</button>
                     </div> 
                     </div>
                 ))}
             <button onClick={()=>{this.props.removeAll()}}>Remove Selected</button>
             <button onClick={()=>{this.props.undoAllHandler()}}>Undo ALL</button>
            </div> 
        )
    }
}
