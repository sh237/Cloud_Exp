import React from 'react'
import  './css/list.css'
import axios from 'axios';
import { BrowserRouter, Link, Route } from "react-router-dom";
import { DataContext } from './App';
import escapeStringRegexp from "escape-string-regexp";
import Button from './components/Button';

const List = () => {
    const [data, setData] = React.useState([{"date":"2022-12-10","text":"I played tennis0","wordList":["tennis"]},{"date":"2022-12-11","text":"I played tennis1","wordList":["tennis"]},{"date":"2022-12-12","text":"I played tennis2","wordList":["tennis"]},{"date":"2022-12-13","text":"I played tennis3","wordList":["tennis"]},{"date":"2022-12-14","text":"I played tennis4","wordList":["tennis"]},{"date":"2022-12-15","text":"I played tennis5","wordList":["tennis"]},{"date":"2022-12-16","text":"I played tennis6","wordList":["tennis"]},{"date":"2022-12-17","text":"I played tennis7","wordList":["tennis"]},{"date":"2022-12-18","text":"I played tennis8","wordList":["tennis"]},{"date":"2022-12-19","text":"I played tennis9","wordList":["tennis"]},{"date":"2022-12-20","text":"I played tennis10","wordList":["tennis"]},{"date":"2022-12-21","text":"I played tennis11","wordList":["tennis"]},{"date":"2022-12-22","text":"I played tennis12","wordList":["tennis"]},{"date":"2022-12-23","text":"I played tennis13","wordList":["tennis"]},{"date":"2022-12-24","text":"I played tennis14","wordList":["tennis"]},{"date":"2022-12-25","text":"I played tennis15","wordList":["tennis"]},{"date":"2022-12-26","text":"I played tennis16","wordList":["tennis"]},{"date":"2022-12-27","text":"I played tennis17","wordList":["tennis"]},{"date":"2022-12-28","text":"I played tennis18","wordList":["tennis"]},{"date":"2022-12-29","text":"I played tennis19","wordList":["tennis"]},{"date":"2022-12-30","text":"I played tennis20","wordList":["tennis"]},{"date":"2022-12-31","text":"I played tennis21","wordList":["tennis"]}]);
    const [ isLoading, setIsLoading ] = React.useState(true);
    const baseURL = 'https://d9l2z4qpg6.execute-api.us-east-1.amazonaws.com/reactapp/';
    const { parentData, setParentData } = React.useContext(DataContext);
    const [searchKeyword, updateSearchKeyword] = React.useState("");
    const KEYS = ["日付", "文章"];
    const [sort, setSort] = React.useState({});
    const onInput = (event) => {
        // 入力キーワードをstateに格納する
        updateSearchKeyword(event.currentTarget.value);
      };
    const [filteredList, setFilteredList] = React.useState([]);

    const handleSort = (key) => {
        if (sort.key === key) {
            setSort({ ...sort, order: -sort.order });
        } else {
            setSort({
            key: key,
            order: 1
            })
        }
    };

    let sortedList = React.useMemo(() => {
        let _sortedList = filteredList;
        let sort_key;
        if(sort.key == "日付"){
            sort_key = "date";
        }else if(sort.key == "文章"){
            sort_key = "text";
        }
        if (sort_key) {
          _sortedList = _sortedList.sort((a, b) => {
            a = a[sort_key];
            b = b[sort_key];
            switch(sort_key){
                case "date":
                    return a.localeCompare(b) * sort.order;
                case "text":
                    return (a.length - b.length) * sort.order;

            }
          });
        }
        return _sortedList;
    }, [sort, filteredList]);

    const clickhandler = (index) => {
        console.log(data[index]);
        const data_ = data[index];
        setParentData(data_);
    }

    React.useEffect(()=>{
        const loadData = async (e) => {
            e && e.preventDefault();
            setIsLoading(true);
            await axios.get(
                baseURL
            )
            .then((res) => {
                const datas=[]
                res.data.map(_data=>{
                    datas.push(JSON.parse(_data));
                });
                setData(datas);
                console.log(datas);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            })};
        loadData();
    },[]);

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
      }, [searchKeyword,data]);

  return (
    <div id="container_list">
        <div id="header_list">
            <h1 id="title-text-list">データ一覧</h1>
        </div>
        {isLoading ? (
            <div id="loader">
                <ul>
                    <li>L</li>
                    <li>O</li>
                    <li>A</li>
                    <li>D</li>
                    <li>I</li>
                    <li>N</li>
                    <li>G</li>
                </ul>
          </div>
        ) : (
            <><div id="search-container">
                <label htmlFor="search-keyword" id="search-title">検索キーワード&nbsp;</label>
                <input
                    id="search-keyword"
                    type="search"
                    onInput={onInput}
                    placeholder="キーワードを入力" />
            </div>
            <div id="sort-container">
                {KEYS.map((key, index) => (
                    <Button
                        key={index}
                        button={key}
                        handleSort={handleSort} />
                ))}
            </div>
                  <table>
                      <thead>
                          <tr>
                              <th>日付</th>
                              <th>文章(先頭30文字)</th>
                          </tr>
                      </thead>
                      <tbody>
                          {sortedList && sortedList.length > 0 && (
                              sortedList.map((item, index) => (
                                  <tr key={index} onClick={() => clickhandler(index)}>
                                      <td>{item.date}</td>
                                      <td>{item.text}</td>
                                      <td><Link to={"/display"}><button>詳細</button></Link></td>
                                  </tr>
                              )))}
                      </tbody>
                  </table>
                  </>
        )}
        </div>
  )
}

export default List