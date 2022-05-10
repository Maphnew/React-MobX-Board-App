import { createContext } from "react";
import SaveInfoStore from "./saveInfo";
import ArticleListStore from "./aricleList";

export const storesContext = createContext({
    saveInfoStore: new SaveInfoStore(),
    articleListStore: new ArticleListStore(),
});
