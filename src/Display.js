import React from "react";
import './App.css';

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    
    render() {
        return(
            <div className="DisplayContent">
                <h2>{this.props.date}</h2> 
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Display;
   