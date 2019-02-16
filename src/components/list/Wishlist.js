import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import WishlistItems from "./WishlistItems";
import "../../style/wishlist.css";
 
class Wishlist extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
            items: [],
            isCancel: false,
            isSave: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({value: e.target.value});
    }

    handleCancel(e){
        e.preventDefault();
        this.setState({isCancel: true});
    }

    handleSave(e){
        e.preventDefault();
        this.setState({isSave: true});
    }

    addItem(e){
        if (this.state.value !== ""){
            var newItem = {
                text: this.state.value,
                key: Date.now()
            };

            this.setState({
                    value: '',
                    items: this.state.items.concat(newItem)
            });
        } else {
            console.log('this.state.value is empty')
        }

        console.log(this.state.value);
        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        if(this.state.isCancel === true){
            return <Redirect to='/' />
        } else if(this.state.isSave === true){
            return <Redirect to='mylists' />
        }

        return (
        <div className="wishlistMain">
            <div className="header">
                <form onSubmit={this.addItem} >
                    <input placeholder="enter task"
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
            <WishlistItems  entries={this.state.items}
                        delete={this.deleteItem} />

            <div className="header">
                <button type="button" onClick={this.handleCancel}>cancel</button>
                <button type="submit"onClick={this.handleSave}>save</button>
            </div>
        </div>
        );
    }
}
 
export default Wishlist;