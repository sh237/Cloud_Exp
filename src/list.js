import React from 'react'
import  './css/list.css'
import axios from 'axios';
import { BrowserRouter, Link, Route } from "react-router-dom";
import { DataContext } from './App';
import escapeStringRegexp from "escape-string-regexp";

const List = () => {
    const [data, setData] = React.useState([{"date":"2022-12-10","text":"I played tennis0","wordList":["tennis"]},{"date":"2022-12-11","text":"I played tennis1","wordList":["tennis"]},{"date":"2022-12-12","text":"I played tennis2","wordList":["tennis"]},{"date":"2022-12-13","text":"I played tennis3","wordList":["tennis"]},{"date":"2022-12-14","text":"I played tennis4","wordList":["tennis"]},{"date":"2022-12-15","text":"I played tennis5","wordList":["tennis"]},{"date":"2022-12-16","text":"I played tennis6","wordList":["tennis"]},{"date":"2022-12-17","text":"I played tennis7","wordList":["tennis"]},{"date":"2022-12-18","text":"I played tennis8","wordList":["tennis"]},{"date":"2022-12-19","text":"I played tennis9","wordList":["tennis"]},{"date":"2022-12-20","text":"I played tennis10","wordList":["tennis"]},{"date":"2022-12-21","text":"I played tennis11","wordList":["tennis"]},{"date":"2022-12-22","text":"I played tennis12","wordList":["tennis"]},{"date":"2022-12-23","text":"I played tennis13","wordList":["tennis"]},{"date":"2022-12-24","text":"I played tennis14","wordList":["tennis"]},{"date":"2022-12-25","text":"I played tennis15","wordList":["tennis"]},{"date":"2022-12-26","text":"I played tennis16","wordList":["tennis"]},{"date":"2022-12-27","text":"I played tennis17","wordList":["tennis"]},{"date":"2022-12-28","text":"I played tennis18","wordList":["tennis"]},{"date":"2022-12-29","text":"I played tennis19","wordList":["tennis"]},{"date":"2022-12-30","text":"I played tennis20","wordList":["tennis"]},{"date":"2022-12-31","text":"I played tennis21","wordList":["tennis"]}]);
    const [ isLoading, setIsLoading ] = React.useState(false);
    const baseURL = 'https://api.jsonbin.io/b/60c9b8f5b8d3c466b8f1f1f5';
    const { parentData, setParentData } = React.useContext(DataContext);
    const [searchKeyword, updateSearchKeyword] = React.useState("");
    const onInput = (event) => {
        // 入力キーワードをstateに格納する
        updateSearchKeyword(event.currentTarget.value);
      };
    const [filteredList, setFilteredList] = React.useState([]);

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
        console.log('useEffect');
        if (data){
            console.log('data set');
            setFilteredList(
                data.filter((item) => {
                    // ユーザー入力を安全に正規表現にする（このときすべて小文字化で正規化する）
                    const escapedText = escapeStringRegexp(searchKeyword.toLowerCase());
                    // 小文字で比較して部分一致するものだけを残す
                    return new RegExp(escapedText).test(item.text.toLowerCase());
                    })
            );
        }
        // console.log(filteredList);
        // console.log(Array.isArray(filteredList));
      }, [searchKeyword]);

  return (
    <div id="container_list">
        <div id="header_list">
            <h1 id="title-text-list">データ一覧</h1>
        </div>
        <div id="search-container">
        <label htmlFor="search-keyword" id="search-title">検索キーワード</label>
        <input
          id="search-keyword"
          type="search"
          onInput={onInput}
          placeholder="キーワードを入力"
        />
      </div>
        <table>
            <thead>
                <tr>
                    <th>日付</th>
                    <th>文章(先頭30文字)</th>
                </tr>
            </thead>
            <tbody>
                {filteredList && filteredList.length > 0 && (
                    filteredList.map((item, index) => (
                        <tr key={index} onClick={() => clickhandler(index)}>
                            <td>{item.date}</td>
                            <td>{item.text}</td>
                            <td><Link to={"/display"} ><button>詳細</button></Link></td>
                        </tr>
                    )))}
            </tbody>
        </table>
    </div>
  )
}

export default List