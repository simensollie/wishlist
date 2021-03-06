import React, { Component } from "react";
import FlipMove from "react-flip-move";
 
class WishlistItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }
    
    render() {
        var listEntries = this.props.entries;
        var listItems = listEntries.map(this.createTasks);
    
        return (
        <ul className="theList">
            <FlipMove duration={250} easing="ease-out">
                {listItems}
            </FlipMove>
        </ul>
        );
    }
};
 
export default WishlistItems;