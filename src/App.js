import logo from './logo-1.PNG';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* header */}

      <header style={{ alignItems: "center" }}>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" >
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="">
              <img src={logo} className="App-logo " alt="logo" /> <span className='mt-2 logo-text'>Orchid Printing and Packaging</span>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mr-2 d-lg-block">
              <li className="nav-item active">
                <a className="nav-link nav-text" href="#HomeSection">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#AboutUsSection">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#ProductSection">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="#ContactUsSection">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/*/ header */}

      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <h5>THE<strong> EPITOME</strong> OF
              <br/>PRINTING &amp; PACKAGING</h5>
          </div>
          <div className="intro-info">
            <h3 className="btn-get-started2">Perfection to the last impression</h3>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
