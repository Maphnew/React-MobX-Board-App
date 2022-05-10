import { action, makeObservable, observable } from "mobx";

export default class SaveInfoStore {
    author;
    date;

    constructor(author = "Anonyclass", date = new Date()) {
        this.author = author;
        this.date = date;
        makeObservable(this, {
            author: observable,
            date: observable,
            setAuthor: action,
            setDate: action,
        });
    }
    setAuthor(author) {
        this.author = author;
    }
    setDate(date) {
        this.date = date;
    }
}
