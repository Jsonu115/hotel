import React from 'react'
import { Link, useLocation} from 'react-router-dom'

function Footer() {
    const location = useLocation();
  return (
    <>
      <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 width-set-50">
                            <div className="footer-details">
                                <h4>Get in touch</h4>
                                <ul className="list-unstyled footer-contact-list">
                                    <li>
                                        <i className="fa fa-map-marker fa-lg"></i>
                                        <p>701 Old York Drive Richmond USA.</p>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone fa-lg"></i>
                                        <p><a href="tel:+1-202-555-0100"> +1-202-555-0100</a></p>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope-o fa-lg"></i>
                                        <p><a href="mailto:demo@info.com"> demo@info.com</a></p>
                                    </li>
                                </ul>
                                <div className="footer-social-icon">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>                           
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                </div>
                                <div className="input-group" id="subscribe">
                                    <input type="text" className="form-control subscribe-box" value="" name="subscribe" placeholder="EMAIL ID"/>
                                    <span className="input-group-btn">
                                        <button type="button" className="btn subscribe-button"><i className="fa fa-paper-plane fa-lg"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 width-50 width-set-50">
                            <div className="footer-details">
                                <h4>explore</h4>
                                <ul className="list-unstyled footer-links">
                                    <li><Link  to="/" className= {location.pathname === "/" ? "active" : ""}>Home</Link></li>
                                    <li><Link  to="/about" className= {location.pathname === "/about" ? "active" : ""}>About</Link></li> 
                                    <li><Link  to="/rooms" className= {location.pathname === "/rooms" ? "active" : ""}>Rooms</Link></li>
                                    <li><Link  to="/gallery" className= {location.pathname === "/gallery" ? "active" : ""}>Gallery</Link></li>
                                    <li><Link  to="/dinning" className= {location.pathname === "/dinning" ? "active" : ""}>Dinning</Link></li>
                                    <li> <Link  to="/news" className= {location.pathname === "/news" ? "active" : ""}>News</Link></li>
                                    <li> <Link  to="/contact" className= {location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="footer-details">
                                <h4>Now On Instagram</h4>
                                <div className="row">
                                    <div className="instagram-images">
                                        <div id="instafeed"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        &copy; {new Date().getFullYear()} <a href="http://www.themevault.net/" target="_blank">All Right Reserved</a>
                    </div>

                </div>
            </footer>

            {/* Back to top */}
            <a
  style={{ display: "none" }}
  href="#"
  className="scrollTop back-to-top"
  id="back-to-top"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  <span>
    <i aria-hidden="true" className="fa fa-angle-up fa-lg"></i>
  </span>
  <span>Top</span>
</a>

    </>
  )
}

export default Footer