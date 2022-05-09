const Content = (props) => {
    const { article } = props;
    return (
        <section className="content">
            <h3>Title: {article.title}</h3>
            <div className="content__info">
                <p>사용자: {article.author}</p>
                <p>작성일: {article.date}</p>
            </div>
            <div className="content__text">
                <textarea className="content__text__textarea" rows={10} value={article.content} />
            </div>
        </section>
    );
};

export default Content;
