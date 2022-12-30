import React from "react";
export default function Review() {
  const state = {
    testimonial: [
      {
        id: 1,
        img: "./assets/images/clients/test-1.jpg",
        alt: "images",
        quoteText: "Very Effective!",
        text:
          "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe",
        desigantion: "Developer",
        classname: "review-item",
      },
      {
        id: 2,
        img: "./assets/images/clients/test-2.jpg",
        alt: "images",
        quoteText: "Very Effective!",
        text:
          "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe2",
        desigantion: "Developer",
        classname: "review-item",
      },
      {
        id: 3,
        img: "./assets/images/clients/test-3.jpg",
        alt: "images",
        quoteText: "Very Effective!",
        text:
          "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe3",
        desigantion: "Developer",
        classname: "review-item",
      },
      {
        id: 4,
        img: "./assets/images/clients/test-2.jpg",
        alt: "images",
        quoteText: "Very Effective!",
        text:
          "They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        name: "John Doe2",
        desigantion: "Developer",
        classname: "review-item",
      },
    ],
  };

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
              {state.testimonial.map((data) => (
                <div className={data.classname} key={data.id}>
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
                      <span className="designation">{data.desigantion}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
