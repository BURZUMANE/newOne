import { useContext } from "react";
import Fetch from "isomorphic-unfetch";

export const createNewsStore =  () => {
  return {

    news: [{title:"asdasas"}],
    addBug(item) {
      this.news.push(item);
    },

    getNews(news) {
      const newsArr = Object.values(news)
      this.news = [...newsArr]
    },
    get bugsCount() {
      return store.bugs.length;
    },
  };
};

