import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Another app for testT</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/journal/bootstrap.min.css"></link>
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          width: 80%;
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
};

export default Layout;
