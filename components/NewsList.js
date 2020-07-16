import { useLocalStore, useObserver } from "mobx-react";
import { useNewsStore } from "../mobx/newsContext";
import { NewsListItem } from "./NewsListItem";
export const NewsList = () => {
  const store = useNewsStore();
  return useObserver(() => (
    <ul>
      {store.news && store.news.map((item, idx) => {
        return <NewsListItem key={idx} item={item}></NewsListItem>;
      })}
      <style jsx>{`
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        list-style: none;
        padding: 0;
      `}</style>
    </ul>
  ));
};
