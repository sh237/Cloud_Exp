import React from "react";
import  './css/Display.css'
import { BrowserRouter, Link, Route } from "react-router-dom";

class Display extends React.Component {

    constructor(props){
        super(props);
        this.state={
            text:"",
            summary:""
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

        const texts_=this.props.data.text.split('。');
        console.log(texts_);
        const imList=[]
        texts_.map(text_=>{
            let c=0;
            this.props.data.wordList.map(word=>{
                let l=text_.match(new RegExp(word,'g'));
                if(l){
                    c+=l.length;
                }
            })
            imList.push(c);
        });
        console.log(imList);
        const m = (imList.length / 2) | 0;

        const imList2 = imList.concat();;
        imList2.sort();
        console.log("sort",imList2);
        let median=0;
        if (imList2.length % 2) { 
            median=imList2[m]
        }else{
            median=(imList2[m - 1] + imList2[m])/2;
        }
        console.log(median);

        console.log(imList2,imList);

        let summary="";
        texts_.map((content,i)=>{
            if (imList[i]>=median){
                console.log("#",summary);
                summary=summary+content;
            }
        });
        this.setState({summary});
        
    }
    
    render() {
        return(
        <div id="container">
             <div id="header">
                <div id="back-button"><Link to="/"><button>戻る</button></Link></div>
                <div id="title"><h1 id="title-text-display">{this.props.data.date}のデータ</h1> </div>
            </div>
            <div id="bottom">
                <table>
                    <thead>
                        <tr>
                            <th>日付</th>
                            <th>重要な文字を強調した文章</th>
                            <th>要約</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.data.date}</td>
                            <td><div dangerouslySetInnerHTML={{ __html:  this.state.text}} /></td>
                            <td>{this.state.summary}</td>
                        </tr>
                    </tbody>
                </table>
                <h2>{this.props.date}</h2> 
                <p>{this.props.content}</p>

                </div>
            <p>文章量:{this.props.data.text.length}/目安時間:{Math.floor(this.props.data.text.length/400)}分</p>
        </div>
        );
    }
}

export default Display;
   