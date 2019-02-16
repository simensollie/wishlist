import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import "../../style/dashboard.css";
 
class Dashboard extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            toNewList: false,
            toNewGroup: false,
            toMyLists: false,
            toMyGroups: false
        };

        this.newListClick = this.newListClick.bind(this);
    }

    newListClick(e){
        e.preventDefault();
        this.setState({toNewList: true});
    }
    
    render() {
        if(this.state.toNewList === true){
            return <Redirect to='/new' />
        }

        return (
        <div className="dashboardMain">
            <div className="header">
                <div className="row">
                    <div className="box list" id="newList" onClick={this.newListClick}>
                        <img src={require('../../resources/icons/pencil-2.png')} />
                        <h1>New list</h1>
                    </div>
                    <div className="box group inactive" id="newGroup">
                        <img src={require('../../resources/icons/messages-people-person-bubble-oval.png')} />
                        <h1>inactive</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="box list inactive" id="myLists">
                        <img src={require('../../resources/icons/insurance-card.png')} />
                        <h1>inactive</h1>
                    </div>
                    <div className="box group inactive" id="myGroups">
                        <img src={require('../../resources/icons/human-resources-search-employees.png')} />
                        <h1>inactive</h1>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};
 
export default Dashboard;