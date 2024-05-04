
import "./App.css";
import { Outlet } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Root() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <div className="container-fluid">
            <a className="navbar-brand text-primary" href="#">
              Info360
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  gap-4 mb-2 mb-lg-0 w-100 d-flex justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Entertainment
                  </a>
                </li>
              </ul>
              <form className="d-flex w-25" role="search">
                <input
                  className="form-control w-75 me-2"
                  type="search"
                  placeholder="Search News"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      
      <Outlet />
      
      <footer>
        <nav className="navbar  navbar-light bg-light">
          <div className="container-fluid d-flex justify-content-center">
            <a className="navbar-brand" href="#">
              Info360
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Root;
