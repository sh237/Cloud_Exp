import React from "react";
import  './css/Display.module.css'

class Display extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.data);
    }

    render() {
        return(
            <div id="container">
                <h1>{this.props.data["date"]}のデータ</h1> 
                <div id="bottom">
                <table>
                    <thead>
                        <tr>
                            <th>日付</th>
                            <th>文章</th>
                            <th>重要な文字</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.data["date"]}</td>
                            <td>{this.props.data["text"]}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default Display;
   