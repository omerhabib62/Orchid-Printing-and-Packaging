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

      {/* Intro Section */}
      <section id="intro" className="clearfix">
        <div className="container">
          {/* Top Right Text */}
          <div className="intro-img">
            <h5>THE<strong> EPITOME</strong> OF
              <br />PRINTING &amp; PACKAGING</h5>
          </div>
          
          <div className="intro-info">
            <h3 className="btn-get-started2">Perfection to the last impression</h3>
          </div>
        </div>
      </section>
      {/* Intro Section */}

      <main id="main">
        {/* About Us Section*/}
        <section id="about">
          <div className="container">

            <header className="section-header">
              <h3>About Us</h3>
              <p>Allied Trading &amp; Packaging Company is a leading venture dealing with the Pharmaceutical packaging and
                printing sector in Pakistan.</p>
            </header>

            <div className="row about-container">

              <div className="col-lg-6 content order-lg-1 order-2">
                <p className='description'>
                  ATPAC started operations in 1973 as Allied Chemical Corporation and later converted into Allied Impex
                  Corporation Ltd. in 1975.
                </p>
                <p className='description'>
                  In 1994, Allpack Gravure Printer was introduced for specialized aluminum foil printing. After the merger
                  of the trading and packaging business, Allied Trading and Packaging Company was founded in 2001. Then in
                  2019 ATPAC moved to a new location with extended facilities.

                </p>

                <div className="icon-box wow fadeInUp" style={{visibility: "visible", animationName: 'fadeInUp'}}>
                  <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                  <h4 className="title"><a href="">Business Area</a></h4>
                  <p className="description">ATPAC mainly deals with pharmaceutical industry, food processing industry,
                    beverages, general trades, packaging industry, and other services.</p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationName: 'fadeInUp', animationDelay: '0.2s'}}>
                  <div className="icon"><i className="fa fa-photo"></i></div>
                  <h4 className="title"><a href="">Quality Management</a></h4>
                  <p className="description">ATPAC provides progressive mechanism to achive customer satisfaction by
                    implementing ISO 900 I: 2015
                    Quality Management System ever since 2005 .</p>
                </div>

                {/* <!-- <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon"><i className="fa fa-bar-chart"></i></div>
                  <h4 className="title"><a href="">Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat tarad limino ata</p>
                </div> --> */}

              </div>

              <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp" style={{visibility: "visible", animationName: 'fadeInUp'}}>
                <img src="img/1.PNG" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="products">
          <div className="container">

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp" style={{visibility: "visible", animationName: 'fadeInUp'}}>
                <img src="img/2.PNG" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0" style={{visibility: "visible", animationName: 'fadeInUp'}}>
                <h4>Our Product Range </h4>
                <ul>
                  <li><span>Aluminum Foil for Blister Packing, Hard Tempered (Alu 20 micron with
                    6-8 gms, heat seal lacquer)</span></li>
                  <li><span>Aluminum Foil for Strip Packing, Soft Tempered (Alu 30 micron with 30
                    micron PE Lamination)</span></li>
                  <li><span>Aluminum Foil Sachet / Triplex Foil. (PET 12 +</span><span>Alu 7 + PE 75 micron)</span></li>
                  <li><span>Alu Alu cold Formable Foil. (OPA 25, ALU 60, PVC 60 micron)</span>
                  </li>
                  <li><span>Paper Foil Sachet Packing. (Paper 60gsm + PE 15 gsm + Alu-Foil 7 MIC +
                    PE 20 gsm )</span></li>
                  <li><span>Rigid PVC Film for Blister packing. (0.02mm 0.044mm)</span></li>
                  <li><span>PVDC Film for Blister Packing. (PVC 250micron + 40gms PVDC
                    Coated)</span></li>
                  <li><span>Poly Coated Paper. (40gms Paper with 12gms PE)</span></li>
                  <li><span>POUCHES: Aluminium Pouches for Blister. Paper pouch for
                    Ampoules.</span></li>
                  <li><span>Packaging &amp; Processing Machinery. (For Pharmaceutical. Foods and
                    other Industries)</span></li>
                </ul>
              </div>
            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp order-1 order-lg-2" style={{visibility: "visible", animationName: 'fadeInUp'}}>
                <img src="img/3.jpg" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1" style={{visibility: "visible", animationName: 'fadeInUp'}}>
                <h4>ALLIED PVC</h4>
                <p>
                  A broad range of non-toxic rigid PVC film available in a thickness range from 120 microns to 800 microns
                  that is clear, transparent and standard translucent &amp; with opaque color.
                </p>
                <p>
                  PVC is generated at a controlled thickness and shrinking for higher yield. It is also developed for
                  customized products.
                </p>
                <p>
                  Comprehensive range of non-toxic rigid PVC
                  film available in thickness range from 120 micron
                  to 800 micron.
                </p>
                <p>
                  Clear transparent and standard translucent
                  and opaque color available.
                </p>
                <p>
                  Controlled thickness and shrinking for higher yield.
                  Development of customized products.
                </p>
              </div>

            </div>

            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp" style={{visibility: "visible", animationName: 'none'}}>
                <img src="img/4.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0" style={{visibility: "visible", animationName: 'none'}}>
                <h4>Blister &amp; Strip Foil </h4>
                <p>
                  Blister Strip are made with materials from ORI to ensure that they meet all the requirements set for
                  blister
                  packs and optimal product protection for pharmaceutical applications.
                </p>
                <p>
                  Close cooperation between ORI and the pharmaceutical industry and machine manufacturing has allowed ORI to
                  stay ahead of the increasing demands set by the industry.
                </p>
                <p>
                  ORI packaging continuously improves its blister lidding offering to meet the challenges of higher product
                  demands and quality expectations of the pharmaceutical industry.
                  As the market leader, Our Research and Development teams offer a tailored solution to clients or for new
                  therapies and new processes for your special application in the pharmaceutical industry.
                </p>
              </div>
            </div>

          </div>
        </section>
        {/* About Us  */}

        {/* Services Section */}
        <section id="services" className="section-bg">
          <div className="container">

            <header className="section-header">
              <h3>ALU ALU Foil/Cold Formable Foil</h3>
              <p>We are the stockist of Alu Alu Foil in Pakistan and can supply plain and printed Alu Alu Foil From our
                stock.</p>
            </header>

            <div className="row">

              <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s" style={{visibility: "visible", animationName: 'fadeInUp', animationDuration: '1.4s'}}>
                <div className="box">
                  <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}}></i></div>
                  <h4 className="title"><a href="">Specification</a></h4>
                  <p className="description">Standard structure : OPA25/ AL45/PVC60</p>
                  <p className="description">Material weight per square : 240g</p>
                  <p className="description">Application : Small &amp; medium size blister</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s" style={{visibility: "hidden", animationName: 'none', animationDuration: '1.4s'}}>
                <div className="box">
                  <div className="icon"><i className="ion-ios-bookmarks-outline" style={{color: '#e9bf06'}}></i></div>
                  <h4 className="title"><a href="">Structure</a></h4>
                  <p className="description">PA/AL/PVC, ordinary thickness 0.14-0. I 55mm, 240-280g per squre meter. </p>
                  <p></p>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style={{visibility: "hidden", animationName: 'none', animationDuration: '1.4s', animationDelay: '0.1s'}}>
                <div className="box">
                  <div className="icon"><i className="ion-ios-paper-outline" style={{color: '#3fcdc7'}}></i></div>
                  <h4 className="title"><a href="">Application</a></h4>
                  <p className="description">For tablet, capsule, suppositories, and other solid. And also this is applicable in
                    pharmaceutical packaging</p>
                  <p> </p>
                  <p> </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s" style={{visibility: "hidden", animationName: 'none', animationDuration: '1.4s', animationDelay: '0.1s'}}>
                <div className="box">
                  <div className="icon"><i className="ion-ios-speedometer-outline" style={{color: '#41cf2e'}}></i></div>
                  <h4 className="title"><a href="">Advantage</a></h4>
                  <p className="description">100% barrier against water vapor, gases, light, etc with excellent formability and
                    thermal stability. It provides high aesthetic appeal and is sealable with standard aluminum foil.</p>
                </div>
              </div>

              {/* <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-world-outline" style="color: #d6ff22;"></i></div>
                  <h4 className="title"><a href="">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon"><i className="ion-ios-clock-outline" style="color: #4680ff;"></i></div>
                  <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                  <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                    soluta nobis est eligendi</p>
                </div>
              </div>  */}

            </div>

          </div>
        </section>
        {/* Services Section */}

        {/* Why Us Section */}
        {/* <section id="why-us" className="wow fadeIn">
          <div className="container">
            <header className="section-header">
              <h3>Why choose us?</h3>
              <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
            </header>

            <div className="row row-eq-height justify-content-center">

              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-diamond"></i>
                  <div className="card-body">
                    <h5 className="card-title">Corporis dolorem</h5>
                    <p className="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab
                      inventore officiis aut voluptatibus.</p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-language"></i>
                  <div className="card-body">
                    <h5 className="card-title">Voluptates dolores</h5>
                    <p className="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.
                    </p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card wow bounceInUp">
                  <i className="fa fa-object-group"></i>
                  <div className="card-body">
                    <h5 className="card-title">Eum ut aspernatur</h5>
                    <p className="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex.
                    </p>
                    <a href="#" className="readmore">Read more </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="row counters">

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">274</span>
                <p>Clients</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">421</span>
                <p>Projects</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1,364</span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">18</span>
                <p>Hard Workers</p>
              </div>

            </div>

          </div>
        </section> */}
        {/* Portfolio Section */}
        {/* <section id="portfolio" className="clearfix">
          <div className="container">

            <header className="section-header">
              <h3 className="section-title">Our Portfolio</h3>
            </header>

            <div className="row">
              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/app1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">App 1</a></h4>
                    <p>App</p>
                    <div>
                      <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/web3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Web 3</a></h4>
                    <p>Web</p>
                    <div>
                      <a href="img/portfolio/web3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/app2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">App 2</a></h4>
                    <p>App</p>
                    <div>
                      <a href="img/portfolio/app2.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 2"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/card2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Card 2</a></h4>
                    <p>Card</p>
                    <div>
                      <a href="img/portfolio/card2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 2"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/web2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Web 2</a></h4>
                    <p>Web</p>
                    <div>
                      <a href="img/portfolio/web2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 2"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/app3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">App 3</a></h4>
                    <p>App</p>
                    <div>
                      <a href="img/portfolio/app3.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 3"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/card1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Card 1</a></h4>
                    <p>Card</p>
                    <div>
                      <a href="img/portfolio/card1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 1"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/card3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Card 3</a></h4>
                    <p>Card</p>
                    <div>
                      <a href="img/portfolio/card3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 3"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <img src="img/portfolio/web1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Web 1</a></h4>
                    <p>Web</p>
                    <div>
                      <a href="img/portfolio/web1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 1"
                        title="Preview"><i className="ion ion-eye"></i></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>#portfolio */}

        {/* Clients Section/ Testimonials */}
        {/* <section id="testimonials" className="section-bg">
          <div className="container">

            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">

                <div className="owl-carousel testimonials-carousel wow fadeInUp">

                  <div className="testimonial-item">
                    <img src="img/testimonial-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                      quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img src="img/testimonial-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                      quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img src="img/testimonial-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                      tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img src="img/testimonial-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                      minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img src="img/testimonial-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                      labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    </p>
                  </div>

                </div>

              </div>
            </div>


          </div>
        </section> */}
        {/* /Clients Section/ Testimonials */}

        {/* Team Section */}
        {/* <section id="team">
          <div className="container">
            <div className="section-header">
              <h3>Team</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>

            <div className="row">

              <div className="col-lg-3 col-md-6 wow fadeInUp">
                <div className="member">
                  <img src="img/team-1.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="member">
                  <img src="img/team-2.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="member">
                  <img src="img/team-3.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="member">
                  <img src="img/team-4.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section> */}
        {/* Team Section */}

        {/* Clients Section */}
        <section id="clients" className="section-bg">

          <div className="container">

            <div className="section-header">
              <h3>Our Clients</h3>
              <p>National &amp; International Clients.
              </p>
            </div>

            <div className="row no-gutters clients-wrap clearfix wow fadeInUp" style={{visibility: "hidden", animationName: 'none'}}>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src="img/clients/client-1.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src="img/clients/client-2.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src="img/clients/client-3.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src="img/clients/client-4.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src="img/clients/client-5.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src="img/clients/client-6.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src="img/clients/client-7.png" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                  <img src="img/clients/client-8.png" className="img-fluid" alt="" />
                </div>
              </div>

            </div>

          </div>

        </section>
        {/* Clients Section */}

        {/* Contact Section */}
        <section id="contact">
          <div className="container-fluid">

            <div className="section-header">
              <h3>Contact Us</h3>
            </div>

            <div className="row wow fadeInUp" style={{visibility: "hidden", animationName: 'none'}}>

              <div className="col-lg-6">
                <div className="map mb-4 mb-lg-0">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.423620409016!2d67.11008031459967!3d25.01969398397907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347348a79a87d%3A0x3bf500e5b283d47a!2sAllied%20Trading%20%26%20Packaging%20Company!5e0!3m2!1sen!2s!4v1627510269175!5m2!1sen!2s" frameborder="0" style={{visibility: "hidden", animationName: 'none', border:'0', width: '100%', height: '312px'}} allowfullscreen=""></iframe>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-5 info">
                    <i className="ion-ios-location-outline"></i>
                    <p>H-20/A S.I.T.E 2 Phase 2 SuperHighway Karachi.</p>
                  </div>
                  <div className="col-md-4 info">
                    <i className="ion-ios-email-outline"></i>
                    <p>info.allied@atpac.pk</p>
                  </div>
                  <div className="col-md-3 info">
                    <i className="ion-ios-telephone-outline"></i>
                    <p>+92 301 8206801</p>
                  </div>
                </div>

                <div className="form">
                  <div id="sendmessage">Your message has been sent. Thank you!</div>
                  <div id="errormessage"></div>
                  <form action="" method="post" role="form" className="contactForm">
                    <div className="form-row">
                      <div className="form-group col-lg-6">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                          <div className="validation"></div>
                      </div>
                      <div className="form-group col-lg-6">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                          <div className="validation"></div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div className="validation"></div>
                    </div>
                    <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* Contact Section */}
      </main>
    </div>
  );
}

export default App;
