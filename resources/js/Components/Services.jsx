import React from 'react'

const Services = () => {

    const services = [
        {
          img: "/frontend_assets/assets/img/services/1.png",
          title: "Free Shipping",
          desc: "Free shipping on all Us order or above $200",
          delay: "200",
        },
        {
          img: "/frontend_assets/assets/img/services/2.png",
          title: "24x7 Support",
          desc: "Contact us 24 hours a day, 7 days a week",
          delay: "400",
        },
        {
          img: "/frontend_assets/assets/img/services/3.png",
          title: "30 Days Return",
          desc: "Simply return it within 30 days for an exchange",
          delay: "600",
        },
        {
          img: "/frontend_assets/assets/img/services/4.png",
          title: "Payment Secure",
          desc: "Contact us 24 hours a day, 7 days a week",
          delay: "800",
        },
      ];


  return (
    <section className="section-services padding-tb-50">
    <div className="container">
      <div className="row mb-minus-24">
        {services?.map((service, index) => (
          <div
            className="col-lg-3 col-md-6 col-12 mb-24"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-delay={service?.delay}
            key={index}
          >
            <div className="bb-services-box">
              <div className="services-img">
                <img src={service?.img} alt={service?.title} />
              </div>
              <div className="services-contact">
                <h4>{service?.title}</h4>
                <p>{service?.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Services