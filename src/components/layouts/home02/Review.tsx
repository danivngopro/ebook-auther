import React from "react";
import ReviewCarousel from "./ReviewCarousel";

export default function Review() {
  const state = [
    {
      image: "./assets/images/clients/test-1.jpg",
      quoteText: "Very Effective!",
      text:
        "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
      designation: "Developer",
    },
    {
      image: "./assets/images/clients/test-2.jpg",
      quoteText: "Very Effective!",
      text:
        "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe2",
      designation: "Developer",
    },
    {
      image: "./assets/images/clients/test-1.jpg",
      quoteText: "Very Effective!",
      text:
        "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
      designation: "Developer",
    },
    {
      image: "./assets/images/clients/test-2.jpg",
      quoteText: "Very Effective!",
      text:
        "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe2",
      designation: "Developer",
    },
    {
      image: "./assets/images/clients/test-1.jpg",
      quoteText: "Very Effective!",
      text:
        "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe",
      designation: "Developer",
    },
    {
      image: "./assets/images/clients/test-2.jpg",
      quoteText: "Very Effective!",
      text:
        "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "John Doe2",
      designation: "Developer",
    },
  ];

  // const options = {
  //   loop: true,
  //   nav: false,
  //   dots: true,
  //   margin: 10,
  //   center: true,
  //   autoplayHoverPause: true,
  //   autoplay: true,
  //   autoplayTimeout: 6000,
  //   responsiveclassName: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     576: {
  //       items: 1,
  //     },
  //     768: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     },
  //     1200: {
  //       items: 3,
  //     },
  //   },
  // };

  return (
    <section
      className="testimonial section-padding bg-grey pb-0"
      id="testimonial"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-heading center-heading text-center mb-60">
              <h3 className="heading-title">Reviews from happy readers</h3>
              <p>
                This book is concerned with creating typography and is essential
                for professionals who regularly work for clients.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonials-slides">
              <ReviewCarousel items={state} />
              <h1>asdf</h1>
              {/* <Carousel>
                {state.testimonial.map((data) => (
                  <div className={data.className} key={data.id}>
                    <div className="client-info">
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <h4>{data.quoteText}</h4>
                      <p>{data.text}</p>
                    </div>

                    <div className="client-desc d-flex align-items-center">
                      <div className="client-img">
                        <img
                          src={data.img}
                          alt={data.alt}
                          className="img-fluid"
                        />
                      </div>
                      <div className="client-text">
                        <h5>{data.name}</h5>
                        <span className="designation">{data.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
