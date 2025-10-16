import React from 'react'

function RoomsCPNT() {
  return (
   <>
     <section className="gallery-block gallery-front">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="gallery-image">
                                <img className="img-responsive" src="/images/room1.png"/>
                                <div className="overlay">
                                    <a className="info pop example-image-link img-responsive" href="images/room1.png" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true"></i></a>
                                    <p><a>delux room</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="gallery-image">
                                <img className="img-responsive" src="/images/room2.png"/>
                                <div className="overlay">
                                    <a className="info pop example-image-link img-responsive" href="images/room2.png" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true"></i></a>
                                    <p><a>super room</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="gallery-image">
                                <img className="img-responsive" src="/images/room3.png"/>
                                <div className="overlay">
                                    <a className="info pop example-image-link img-responsive" href="images/room3.png" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true"></i></a>
                                    <p><a>single room</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="gallery-image">
                                <img className="img-responsive" src="/images/room4.png"/>
                                <div className="overlay">
                                    <a className="info pop example-image-link img-responsive" href="images/room4.png" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true"></i></a>
                                    <p><a>double room</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  )
}

export default RoomsCPNT