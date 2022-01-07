import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="img/logo.png" alt=""/></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#slider">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                      
                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link "
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Blog
                                <span className="fa fa-angle-down"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="../blog/index.html">Blog List</a>
                                <a className="dropdown-item" href="../single-post/index.html">Single Post</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav> 
    </div>
  );
}

export default App;
