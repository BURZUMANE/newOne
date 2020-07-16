import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a href="#">
        NewstesT
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">HOME</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/stocks">
              <a className="nav-link">STOCK MARKET</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/corona">
              <a className="nav-link">CORONA</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
        display:flex;
      .container {
        display:flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 80%;
      }
      p {
        color: blue;
      }
    `}</style>
  </nav>
);

export default Navbar;
