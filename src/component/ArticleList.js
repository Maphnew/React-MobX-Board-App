import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
// import { getTime } from "../utils/clock";

const ArticleList = (props) => {
    const { setArticle } = props;
    const [time, setTime] = useState("");
    useEffect(() => {
        setTime(new Date().toLocaleTimeString());
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }, []);
    const rowClickHandler = (e) => {
        const { number, title, author, date, content } = e.data;
        setArticle({
            number,
            title,
            author,
            date,
            content,
        });
    };
    return (
        <section className="article-list">
            <div className="article-list__header">
                <div className="userInfo">
                    <label htmlFor="user">사용자</label>
                    <input id="user" placeholder="ADMIN"></input>
                </div>
                <div className="time">
                    <label htmlFor="time">현재시간</label>
                    <input id="time" className="userInfo__time" value={time} readOnly></input>
                </div>
            </div>
            <div className="board">
                <div className="board__buttons">
                    <button>신규</button>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
                <div
                    className="board__list ag-theme-material"
                    style={{
                        height: "100%",
                        minHeight: "200px",
                    }}
                >
                    <AgGridReact
                        columnDefs={[
                            { field: "number", headerName: "번호" },
                            { field: "title", headerName: "제목" },
                            { field: "author", headerName: "작성자" },
                            { field: "date", headerName: "작성일" },
                        ]}
                        defaultColDef={{
                            flex: 1,
                            resizable: true,
                            sortable: true,
                            filter: true,
                        }}
                        rowData={[
                            { number: 1, title: "title1", author: "author1", date: "date1", content: "content1" },
                            { number: 2, title: "title2", author: "author2", date: "date2", content: "content2" },
                            { number: 3, title: "title3", author: "author3", date: "date3", content: "content3" },
                            { number: 4, title: "title4", author: "author4", date: "date4", content: "content4" },
                        ]}
                        onRowClicked={rowClickHandler}
                    />
                </div>
            </div>
        </section>
    );
};

export default ArticleList;
