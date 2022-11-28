import React from 'react'
import  './css/list.module.css'
import axios from 'axios';
import { BrowserRouter, Link, Route } from "react-router-dom";
import { DataContext } from './App';

const List = () => {
    const [data, setData] = React.useState([{"date":"2022-12-10","text":"I played tennis0","wordList":["tennis"]},{"date":"2022-12-11","text":"I played tennis1","wordList":["tennis"]},{"date":"2022-12-12","text":"I played tennis2","wordList":["tennis"]},{"date":"2022-12-13","text":"I played tennis3","wordList":["tennis"]},{"date":"2022-12-14","text":"I played tennis4","wordList":["tennis"]},{"date":"2022-12-15","text":"I played tennis5","wordList":["tennis"]},{"date":"2022-12-16","text":"I played tennis6","wordList":["tennis"]},{"date":"2022-12-17","text":"I played tennis7","wordList":["tennis"]},{"date":"2022-12-18","text":"I played tennis8","wordList":["tennis"]},{"date":"2022-12-19","text":"I played tennis9","wordList":["tennis"]},{"date":"2022-12-20","text":"I played tennis10","wordList":["tennis"]},{"date":"2022-12-21","text":"I played tennis11","wordList":["tennis"]},{"date":"2022-12-22","text":"I played tennis12","wordList":["tennis"]},{"date":"2022-12-23","text":"I played tennis13","wordList":["tennis"]},{"date":"2022-12-24","text":"I played tennis14","wordList":["tennis"]},{"date":"2022-12-25","text":"I played tennis15","wordList":["tennis"]},{"date":"2022-12-26","text":"I played tennis16","wordList":["tennis"]},{"date":"2022-12-27","text":"I played tennis17","wordList":["tennis"]},{"date":"2022-12-28","text":"I played tennis18","wordList":["tennis"]},{"date":"2022-12-29","text":"I played tennis19","wordList":["tennis"]},{"date":"2022-12-30","text":"I played tennis20","wordList":["tennis"]},{"date":"2022-12-31","text":"I played tennis21","wordList":["tennis"]}]);
    const [ isLoading, setIsLoading ] = React.useState(false);
    const baseURL = 'https://api.jsonbin.io/b/60c9b8f5b8d3c466b8f1f1f5';
    const { parentData, setParentData } = React.useContext(DataContext);

    const loadData = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.get(
            baseURL
        )
        .then((res) => {
            setData(res.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
        })};
    
    const clickhandler = (index) => {
        console.log(data[index]);
        const data_ = data[index];
        setParentData(data_);
    }



    React.useEffect(() => {
        // setData([{"date":"2022-12-10","text":"I played tennis0"},{"date":"2022-12-11","text":"I played tennis1"},{"date":"2022-12-12","text":"I played tennis2"},{"date":"2022-12-13","text":"I played tennis3"},{"date":"2022-12-14","text":"I played tennis4"},{"date":"2022-12-15","text":"I played tennis5"},{"date":"2022-12-16","text":"I played tennis"},{"date":"2022-12-17","text":"I played tennis"},{"date":"2022-12-18","text":"I played tennis"},{"date":"2022-12-19","text":"I played tennis"},{"date":"2022-12-20","text":"I played tennis"},{"date":"2022-12-21","text":"I played tennis"},{"date":"2022-12-22","text":"I played tennis"},{"date":"2022-12-23","text":"I played tennis"},{"date":"2022-12-24","text":"I played tennis"},{"date":"2022-12-25","text":"I played tennis"},{"date":"2022-12-26","text":"I played tennis"},{"date":"2022-12-27","text":"I played tennis"},{"date":"2022-12-28","text":"I played tennis"},{"date":"2022-12-29","text":"I played tennis"},{"date":"2022-12-30","text":"I played tennis"},{"date":"2022-12-31","text":"I played tennis"},{"date":"2023-01-01","text":"I played tennis"},{"date":"2023-01-02","text":"I played tennis"},{"date":"2023-01-03","text":"I played tennis"},{"date":"2023-01-04","text":"I played tennis"},{"date":"2023-01-05","text":"I played tennis"},{"date":"2023-01-06","text":"I played tennis"},{"date":"2023-01-07","text":"I played tennis"},{"date":"2023-01-08","text":"I played tennis"},{"date":"2023-01-09","text":"I played tennis"},{"date":"2023-01-10","text":"I played tennis"},{"date":"2023-01-11","text":"I played tennis"},{"date":"2023-01-12","text":"I played tennis"}]);
        // axios.get(baseURL).then((response) => {
        //   setPost(response.data);
        // });
      }, []);
      
  return (
    <div id="container">
        <div id="header">
            <h1>データ一覧</h1>
        </div>
        <table>
            <thead>
                <tr>
                    <th>日付</th>
                    <th>文章(先頭30文字)</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} onClick={() => clickhandler(index)}>
                        <td>{item.date}</td>
                        <td>{item.text}</td>
                        <td><Link to={"/display"} >詳細</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default List