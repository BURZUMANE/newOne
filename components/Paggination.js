import { useRouter } from "next/router";
const classNames = require('classnames');

export const Paggination = ({ currentPage, pageCount }) => {
  const router = useRouter();
  const handleClick = e => {
    e.preventDefault();
    let nextPage = 0;
    if (e.target.name === "prev") {
      if(pageCount === 1){
        return;
      }
      nextPage = -1;
    } else if (e.target.name === "next") {
      if(pageCount === currentPage){
        return;
      }
      nextPage = 1;
    }
    router.push(`${router.pathname}?page=${currentPage + nextPage}`);
  };

  return (
    <ul>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className={classNames("btn","btn-secondary")}
          name="prev"
          onClick={handleClick}>
          {"<<"}
        </button>
        <button type="button" className={classNames("btn","btn-secondary")}>
          {currentPage}
        </button>
        <button
          type="button"
          className={classNames("btn","btn-secondary")}
          name="next"
          onClick={handleClick}>
          {">>"}
        </button>
      </div>

      <style jsx>{`
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        padding-bottom: 20px;
      `}</style>
    </ul>
  );
};
