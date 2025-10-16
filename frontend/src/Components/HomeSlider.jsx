import React from 'react'

function HomeSlider() {
  return (
    <>
      <div id="myCarousel1" className="carousel slide" data-ride="carousel"> 

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel1" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel1" data-slide-to="1"></li>
                    <li data-target="#myCarousel1" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active"> <img src="/images/banner.png" style={{width:"100%", height: "500px"}} alt="First slide"/>
                        <div className="carousel-caption">
                            <h1>vacayhome<br/> spa & Resort</h1>
                        </div>
                    </div>
                    <div className="item"> <img src="/images/banner2.png" style={{width:"100%", height: "500px" }}alt="Second slide"/>
                        <div className="carousel-caption">
                            <h1>vacayhome<br/> spa & Resort</h1>
                        </div>
                    </div>
                    <div className="item"> <img src="/images/banner3.png" style={{ width: "100%", height: "500px" }}
 alt="Third slide"/>
                        <div className="carousel-caption">
                            <h1>vacayhome<br/> spa & Resort</h1>
                        </div>
                    </div>

                </div>
                <a className="left carousel-control" href="#myCarousel1" data-slide="prev"> <img src="/images/icons/left-arrow.png" onmouseover="this.src = 'images/icons/left-arrow-hover.png'" onmouseout="this.src = 'images/icons/left-arrow.png'" alt="left"/></a>
                <a className="right carousel-control" href="#myCarousel1" data-slide="next"><img src="/images/icons/right-arrow.png" onmouseover="this.src = 'images/icons/right-arrow-hover.png'" onmouseout="this.src = 'images/icons/right-arrow.png'" alt="left"/></a>

            </div>
            <div className="clearfix"></div>
    </>
  )
}

export default HomeSlider