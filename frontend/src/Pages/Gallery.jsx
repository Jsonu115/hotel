import React from 'react'
import Layout from '../Components/Layout'
import HeaderBanner from '../Components/HeaderBanner'

function Gallery() {
  return (
   <Layout>
    <HeaderBanner title="GALLERY" image="inner-banner.png"/>
    <section className="gallery-block">
                <div className="container">
                    <div className="row">
                        <div className="grid hover-effect">
                            <div className="grid-sizer"></div>
                            <div className="grid-item percent37 gallery-image">
                                <a className="example-image-link img-responsive" href="images/gallery1-1.jpg" data-lightbox="example-1"><img src="/images/gallery1.png" className="img-responsive" alt="gallery1"/></a>
                            </div>
                            <div className="grid-item percent25 gallery-image">
                                <a className="example-image-link img-responsive" href="images/gallery2-2.jpg" data-lightbox="example-1"><img src="/images/gallery2.png" className="img-responsive" alt="gallery1"/></a>
                            </div>
                            <div className="grid-item percent37 gallery-image">
                                <a className="example-image-link img-responsive" href="images/gallery3-3.jpg" data-lightbox="example-1"><img src="/images/gallery3.png" className="img-responsive" alt="gallery1"/></a>
                            </div>
                            <div className="grid-item percent25 gallery-image">
                                <a className="example-image-link img-responsive" href="images/gallery4-4.jpg" data-lightbox="example-1"><img src="/images/gallery4.png" className="img-responsive" alt="gallery1"/></a>
                            </div>
                            <div className="grid-item percent37 gallery-image">
                                <a className="example-image-link img-responsive" href="images/gallery5-5.jpg" data-lightbox="example-1"><img src="/images/gallery5.png" className="img-responsive" alt="gallery1"/></a>
                            </div>
                            <div className="grid-item percent20 gallery-image">
                                <a className="example-image-link img-responsive" href="images/gallery6-6.jpg" data-lightbox="example-1"><img src="/images/gallery6.png" className="img-responsive" alt="gallery1"/></a>
                            </div>
                            <div className="grid-item percent20 gallery-image">
                                <a className="example-image-link img-responsive" href="images/gallery7-7.jpg" data-lightbox="example-1"><img src="/images/gallery7.png" className="img-responsive" alt="gallery1"/></a>
                            </div>
                            <div className="grid-item percent20 gallery-image">
                                <a className="example-image-link img-responsive" href="images/gallery8-8.jpg" data-lightbox="example-1"><img src="/images/gallery8.png" className="img-responsive" alt="gallery1"/></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

   </Layout>
  )
}

export default Gallery