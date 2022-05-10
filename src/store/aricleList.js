import { action, makeObservable, observable } from "mobx";

export default class ArticleListStore {
    articleList;
    constructor(articleList = []) {
        this.articleList = articleList;
        makeObservable(this, {
            articleList: observable,
            createArticle: action,
            updateArticle: action,
            deleteArticle: action,
        });
    }

    createArticle(item) {
        if (this.articleList.length === 0) {
            item.number = 1;
        } else {
            const numList = this.articleList.map((a) => parseInt(a.number));
            item.number = Math.max(...numList) + 1;
        }
        this.articleList = [...this.articleList, item];
    }

    updateArticle(item) {
        this.articleList = this.articleList.map((article) => {
            if (item.author === article.author && item.number === article.number) {
                return item;
            }
            return article;
        });
    }

    deleteArticle(item) {
        this.articleList = this.articleList.filter((article) => {
            return !(item.author === article.author && item.number === article.number);
        });
    }
}
