import React from "react";

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    
 render() {
    return(
        <div>
            <h2>{this.props.date}</h2>
            <p>{this.props.content}</p>
        </div>
    )
 }
}

export default Display;
   