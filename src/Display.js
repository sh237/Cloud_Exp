import React from "react";
import './App.css';

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state={
        };
    }

    componentDidMount() {
        this.text=this.props.text
        this.props.wordList.map(word=>{
            this.text=this.text.replace(new RegExp(word,'g'),`<span className="ImportantWord">${word}</span>`);
        })
    }
    
    render() {
        return(
            <div className="DisplayContent">
                <h2>{this.props.date}</h2> 
                <p>文章量:{this.props.text.length}/目安時間:{Math.floor(this.props.text.length/400)}分</p>
                <div dangerouslySetInnerHTML={{ __html:  this.text}} />
            </div>
        )
    }
}

export default Display;
   