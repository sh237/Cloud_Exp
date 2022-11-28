import React from "react";
import  './css/Display.module.css'

class Display extends React.Component {

    constructor(props){
        super(props);
        this.text="";
    }

    componentDidMount() {
        console.log(this.props.data);
        // this.text=this.props.data.text;
        console.log(this.props.data.text.length);
        this.props.data.wordList.map(word=>{
            this.text=this.props.data.text.replace(new RegExp(word,'g'),`<span className="ImportantWord">${word}</span>`);
        });
        console.log(this.text);
    }
    
    render() {
        return(

        <div id="container">
            <h1>{this.props.data.date}のデータ</h1> 
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
                            <td>{this.text}</td>
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
   