export const NewsListItem = ({ item }) => {
  // const title = item.title.slice(21);
  return (
    <li className={"jumbotron"}>
      <img className="preview" src={item.urlToImage || "https://www.quentintarantinofanclub.com/gif/avengers_pulp.gif"}></img>
      <div className={"textWrapper"}>
        <h2>{item.title}</h2>
        <p className="muted"> By: {item.author && item.author.substring(1, 30) || "No info"}</p>
        <p>{item.content && item.content.split("[")[0] || "No content for this article"}</p>
      </div>
      <style jsx>{`
      .author{

      }
        .textWrapper {
          padding: 10px;
          width: 100%;
        }
        h2 {
          padding-top: 10px;
          font-size: 22px;
          width: 100%;
        }
        p {
          padding-top: 10px;
          width: 100%;
        }
        padding: 0;
        width: 47%;
        .preview {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        .container {
          margin: 50px;
        }
        h1 {
          font-size: 22px;
        }
      `}</style>
    </li>
  );
};
