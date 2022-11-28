import React from "react";
import  './css/Display.module.css'
import { BrowserRouter, Link, Route } from "react-router-dom";

class Display extends React.Component {

    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }

    componentDidMount() {
        console.log(this.props.data);
        let text=this.props.data.text;
        console.log(this.props.data.text.length);
        this.props.data.wordList.map(word=>{
            text=text.replace(new RegExp(word,'g'),`<span className="ImportantWord">${word}</span>`);
        });
        this.setState({text});
    }
    
    render() {
        return(
        <div id="container">
             <div id="header"style={{"backgroundColor":"#707070","display":"flex"}}>
                <div id="back-button" style={{"paddingTop":"3%","paddingLeft":"2%","width":"10%"}}><Link to="/"><button>戻る</button></Link></div>
                <div id="title" style={{"width":"100%","height":"40%"}}><h1>{this.props.data.date}のデータ</h1> </div>
            </div>
            <div id="bottom">
                <table>
                    <thead>
                        <tr>
                            <th>日付</th>
                            <th>元の文章</th>
                            <th>重要な文字を強調した文章</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.data.date}</td>
                            <td>{this.props.data.text}</td>
                            <td><div dangerouslySetInnerHTML={{ __html:  this.state.text}} /></td>
                        </tr>
                    </tbody>
                </table>
                <h2>{this.props.date}</h2> 
                <p>{this.props.content}</p>

                </div>
            <p>文章量:{this.props.data.text.length}/目安時間:{Math.floor(this.props.data.text.length/400)}分</p>
            {/* <div dangerouslySetInnerHTML={{ __html:  this.text}} /> */}
        </div>
        );
    }
}

export default Display;
   