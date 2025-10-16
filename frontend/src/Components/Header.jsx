import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation();
  return (
    <>
    <div id="page">
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                                                       {/* <a href="#"> </a>
                                                        <div className="info-block"><i className="fa fa-map"></i>701 Old York Drive Richmond USA.</div> */}
                        </div>
                        <div className="col-md-6">
                            <div className="social-grid">
                                <ul className="list-unstyled text-right">
                                    <li><a><i className="fa fa-facebook"></i></a></li>
                                    <li><a><i className="fa fa-twitter"></i></a></li>
                                    <li><a><i className="fa fa-linkedin"></i></a></li>
                                    <li><a><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <header className="header-container">
                <div className="container">
                    <div className="top-row">
                        <div className="row">
                            <div className="col-md-2 col-sm-6 col-xs-6">
                                <div id="logo">
                                    {/* <a href="index.html"><img src="images/logo.png" alt="logo"></a> */}
                                    <a href="index.html"><span>vacay</span>home</a>
                                </div>                       
                            </div>
                            <div className="col-sm-6 visible-sm">
                                <div className="text-right"><button type="button" className="book-now-btn">Book Now</button></div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12 remove-padd">
                                <nav className="navbar navbar-default">
                                    <div className="navbar-header page-scroll">
                                        <button data-target=".navbar-ex1-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>

                                    </div>
                                    <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                                        <ul className="list-unstyled nav1 cl-effect-10">
                                            <li><Link to="/"  data-hover="Home" className={location.pathname === "/" ? "active" : ""}><span>Home</span></Link></li>
                                            <li><Link data-hover="About"  to="/about" className= {location.pathname === "/about" ? "active" : ""} ><span>About</span></Link></li>
                                            <li><Link data-hover="Rooms"  to="/rooms" className= {location.pathname === "/rooms" ? "active" : ""}><span>Rooms</span></Link></li>
                                            <li><Link data-hover="Gallery"  to="/gallery" className= {location.pathname === "/gallery" ? "active" : ""}><span>Gallery</span></Link></li>
                                            <li><Link data-hover="Dinning" to="/dinning" className= {location.pathname === "/dinning" ? "active" : ""}><span>Dinning</span></Link></li>
                                            <li><Link data-hover="News" to="/news" className= {location.pathname === "/news" ? "active" : ""}><span>News</span></Link></li>
                                            <li><Link data-hover="Contact Us" to="/contact" className= {location.pathname === "/contact" ? "active" : ""}><span>contact Us</span></Link></li>
                                        </ul>

                                    </div>
                                </nav>
                            </div>
                            <div className="col-md-2  col-sm-4 col-xs-12 hidden-sm">
                                <div className="text-right"><button type="button" className="book-now-btn">Book Now</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </>
  )
}

export default Header