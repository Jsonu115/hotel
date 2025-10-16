import React from 'react'

function Services() {
  return (
    <>
     <section className="service-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-6 width-50">
                            <div className="service-details text-center">
                                <div className="service-image">
                                    <img alt="image" className="img-responsive" src="/images/icons/wifi.png"/>
                                </div>
                                <h4><a>free wifi</a></h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 width-50">
                            <div className="service-details text-center">
                                <div className="service-image">
                                    <img alt="image" className="img-responsive" src="/images/icons/key.png"/>
                                </div>
                                <h4><a>room service</a></h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
                            <div className="service-details text-center">
                                <div className="service-image">
                                    <img alt="image" className="img-responsive" src="/images/icons/car.png"/>
                                </div>
                                <h4><a>free parking</a></h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-6 mt-25">
                            <div className="service-details text-center">
                                <div className="service-image">
                                    <img alt="image" className="img-responsive" src="/images/icons/user.png"/>
                                </div>
                                <h4><a>customer support</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Services