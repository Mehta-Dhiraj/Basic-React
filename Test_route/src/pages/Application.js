import React, { Component } from 'react';

class Application extends Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }
    onClick=(e)=>{
        console.log("Output ",e.target.id);
    }
    render() {
        return (
            <div>
                <h1>Hello ES6</h1>
                <p>more info<a href="#" onClick={this.onClick} id="moreinfo">here</a></p>
            </div>
        );
    }
}

export default Application;