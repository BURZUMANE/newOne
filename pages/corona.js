import React from "react";
import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import { NewsProvider } from "../mobx/newsContext";
import { useNewsStore } from "../mobx/newsContext";
import { NewsList } from "../components/NewsList";
import  {Paggination}  from "../components/Paggination";

import URL from "../config";
// description
const StoreContext = React.createContext();

const BugsForm = () => {
  const store = useNewsStore();
  const [bug, setBug] = React.useState({ title: "" });
  return (
    <form
      onSubmit={e => {
        store.addBug(bug);
        setBug({ title: "" });
        e.preventDefault();
      }}>
      <input
        type="text"
        value={bug.title}
        onChange={e => {
          const value = e.target.value;
          setBug(prev => ({ ...prev, title: value }));
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const Wrapper = ({ children, props }) => {
  const store = useNewsStore();
  store.getNews(props.data);
;

  return <>{children}</>;
};

const Index = props => {
  console.log(typeof props.currentPage);
  const actualPage = props.currentPage || 1;
  return (
    <NewsProvider>
      <Wrapper props={props}>
        <Layout>
          <NewsList />
          <Paggination currentPage={actualPage}/>
        </Layout>
      </Wrapper>
    </NewsProvider>
  );
};

Index.getInitialProps = async context => {
  const query = "corona";
  const page = +context.query.page || 1;

  const res = await Fetch(
    `http://newsapi.org/v2/everything?apiKey=baf3b32ef95d4cd0803dcc5d7a5bf9b1&q=${query}&page=${page}&pageSize=10&from=2020-06-15&sortBy=publishedAt&language=en`,
  );
  const posts = await res.json();
  const postsCount = posts.totalResults;
  const pages = Math.ceil(posts.totalResults / 10);
  return {
    totalCount: postsCount,
    pageCount: pages,
    currentPage: +context.query.page,
    perPage: 10,
    data: posts.articles,
  };
};

export default Index;
