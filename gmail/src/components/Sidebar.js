import React, { Component } from 'react'
import './Sidebarcss.css';
import ModalComp from './ModalComp';
export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
    }
    
    
    render() {
        return (
            <div className="maindiv">
               <div className= {this.props.display ? 'mainbar': 'main-none'} >
                
                <div> <button className="ComposeBtn" onClick={()=>this.setState({show: !this.state.show})}> <span className= {this.props.display? ' ': 'display-none'}>Compose</span> </button></div>


                <div className={this.props.display ? 'sbar': 'main-none'}>
                    <div>
                        <img src='https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png'/>
                    </div>
                    <div>
                        <p className= {this.props.display? '   ': 'display-none'}> Inbox </p>
                    </div>
                </div>
                <div className={this.props.display ? 'sbar': 'main-none'}>
                    <div>
                        <img src='https://www.gstatic.com/images/icons/material/system/1x/send_black_20dp.png'/>
                    </div>
                    <div>
                        <p className= {this.props.display? '   ': 'display-none'}> Sent </p>
                    </div>
                </div>
                <div className={this.props.display ? 'sbar': 'main-none'}>
                    <div>
                        <img src='https://www.gstatic.com/images/icons/material/system/1x/insert_drive_file_black_20dp.png'/>
                    </div>
                    <div>
                        <p className= {this.props.display? '   ': 'display-none'}> Drafts </p>
                    </div>
                </div>
                <div className={this.props.display ? 'sbar': 'main-none'}>
                    <div>
                        <img src='https://www.gstatic.com/images/icons/material/system/1x/delete_black_20dp.png'/>
                    </div>
                    <div>
                        <p className= {this.props.display? '': 'display-none'}>  Trash </p>
                    </div>
                </div> 
                
                               
            </div> 
            <ModalComp showme={this.state.show} closeHandler={(e)=>{
                this.setState({show: !this.state.show})}}/>
            </div>
        

        )
    }
}
