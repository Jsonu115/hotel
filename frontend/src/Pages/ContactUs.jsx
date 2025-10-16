import React, { useState } from 'react'
import Layout from '../Components/Layout'
import HeaderBanner from '../Components/HeaderBanner'

function ContactUs() {
    
   const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      Subject: '',
      Message: '',
   });


const handleSubmit = async (e) => {
   e.preventDefault();
   const response = await fetch("http://localhost:8080/api/mail", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
   })
   const data = await response.json();
   if (data.success) {
      alert("Message sent successfully");
      setFormData({
         Name: '',
         Email: '',
        Subject: '',
         Message: '',
      })
   }
   
};

const handleChange = (e) => {
   setFormData({
      ...formData,
      [e.target.name]: e.target.value
   });
}

  return (
   <Layout>
    <HeaderBanner title="Contact Us" image="banner4.jpg"/>

<section className="contact-block">
                <div className="container">
                    <div className="col-md-6 contact-left-block">
                        <h3><span>Contact </span>Us</h3>
                        <p className="text-left">Nulla pharetra eleifend tellus in molestie. In vel neque sit amet urna gravida blandit nec id massa. Phasellus eu aliquet augue. Quisque fringilla urna quam.</p>
                        <p className="text-right">701 Old York Drive Richmond USA. <i className="fa fa-map-marker fa-lg"></i></p>
                        <p className="text-right"><a href="tel:+1-202-555-0100"> +1-202-555-0100 <i className="fa fa-phone fa-lg"></i></a></p>
                        <p className="text-right"><a href="mailto:demo@info.com"> demo@info.com <i className="fa fa-envelope"></i></a></p>
                    </div>
                    <div className="col-md-6 contact-form">
                        <h3>Send a <span>Message</span></h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="form-control" name="Name" placeholder="Name" value={formData.Name}  required onChange={handleChange}/>
                            <input type="email" className="form-control" name="Email" placeholder="Email" value={formData.Email} required onChange={handleChange}/>
                            <input type="text" className="form-control" name="Subject" placeholder="Subject" value={formData.Subject} required onChange={handleChange}/>
                            <textarea className="form-control" name="Message" placeholder="Message Here...." value={formData.Message} required onChange={handleChange}></textarea>
                            <input type="submit" className="submit-btn" value="Submit"/>
                        </form>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </section>

            {/*map*/}

             <section className="offspace-70">
                <div className="map">
                    <div className="container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101257.12284776446!2d-77.56330202084071!3d37.52477641775529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111095799c9ed%3A0xbfd83e6de2423cc5!2sRichmond%2C+VA%2C+USA!5e0!3m2!1sen!2sin!4v1488891294599"  frameborder="0" style={{border:"0", width: "100%", height: "400px"}} allowfullscreen></iframe>
                    </div>
                </div>
            </section>

   </Layout>
  )
}

export default ContactUs