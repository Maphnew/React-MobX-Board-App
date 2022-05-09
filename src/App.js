import { useState } from "react";
import "./App.css";
import ArticleList from "./component/ArticleList";
import Content from "./component/Content";

function App() {
    const [article, setArticle] = useState({});
    return (
        <>
            <h2>Board App 📋</h2>
            <div className="App">
                <ArticleList setArticle={setArticle} />
                <Content article={article} />
            </div>
        </>
    );
}

export default App;
