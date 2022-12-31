import React from "react";
import ReviewCardsCarousel from "./review component/ReviewCardsCarousel";

export default function Review() {
  const reviewCards = [
    {
      quoteText: "This is the best product I've ever used!",
      text:
        "I've been using this product for a month now and I am extremely satisfied with it. It has completely transformed my skin and I am seeing visible results. Highly recommend!",
      name: "Jane Doe",
      designation: "Skincare enthusiast",
      image: "/images/jane-doe.jpg",
    },
    {
      quoteText: "I am in love with this product!",
      text:
        "I've been using this product for a few weeks now and I am amazed by the results. My hair is so much softer and healthier. I will definitely be repurchasing!",
      name: "John Doe",
      designation: "Haircare enthusiast",
      image: "/images/john-doe.jpg",
    },
    {
      quoteText: "This product has exceeded my expectations!",
      text:
        "I was a bit skeptical about trying this product, but I am so glad I did. It has exceeded all of my expectations and I can't wait to see the long term results. Highly recommend!",
      name: "Jessica Doe",
      designation: "Wellness enthusiast",
      image: "/images/jessica-doe.jpg",
    },{
      quoteText: "This is the best product I've ever used!",
      text:
        "I've been using this product for a month now and I am extremely satisfied with it. It has completely transformed my skin and I am seeing visible results. Highly recommend!",
      name: "Jane Doe",
      designation: "Skincare enthusiast",
      image: "/images/jane-doe.jpg",
    },
    {
      quoteText: "I am in love with this product!",
      text:
        "I've been using this product for a few weeks now and I am amazed by the results. My hair is so much softer and healthier. I will definitely be repurchasing!",
      name: "John Doe",
      designation: "Haircare enthusiast",
      image: "/images/john-doe.jpg",
    },
    {
      quoteText: "This product has exceeded my expectations!",
      text:
        "I was a bit skeptical about trying this product, but I am so glad I did. It has exceeded all of my expectations and I can't wait to see the long term results. Highly recommend!",
      name: "Jessica Doe",
      designation: "Wellness enthusiast",
      image: "/images/jessica-doe.jpg",
    },{
      quoteText: "This is the best product I've ever used!",
      text:
        "I've been using this product for a month now and I am extremely satisfied with it. It has completely transformed my skin and I am seeing visible results. Highly recommend!",
      name: "Jane Doe",
      designation: "Skincare enthusiast",
      image: "/images/jane-doe.jpg",
    },
    {
      quoteText: "I am in love with this product!",
      text:
        "I've been using this product for a few weeks now and I am amazed by the results. My hair is so much softer and healthier. I will definitely be repurchasing!",
      name: "John Doe",
      designation: "Haircare enthusiast",
      image: "/images/john-doe.jpg",
    },
    {
      quoteText: "This product has exceeded my expectations!",
      text:
        "I was a bit skeptical about trying this product, but I am so glad I did. It has exceeded all of my expectations and I can't wait to see the long term results. Highly recommend!",
      name: "Jessica Doe",
      designation: "Wellness enthusiast",
      image: "/images/jessica-doe.jpg",
    },{
      quoteText: "This is the best product I've ever used!",
      text:
        "I've been using this product for a month now and I am extremely satisfied with it. It has completely transformed my skin and I am seeing visible results. Highly recommend!",
      name: "Jane Doe",
      designation: "Skincare enthusiast",
      image: "/images/jane-doe.jpg",
    },
    {
      quoteText: "I am in love with this product!",
      text:
        "I've been using this product for a few weeks now and I am amazed by the results. My hair is so much softer and healthier. I will definitely be repurchasing!",
      name: "John Doe",
      designation: "Haircare enthusiast",
      image: "/images/john-doe.jpg",
    },
    {
      quoteText: "This product has exceeded my expectations!",
      text:
        "I was a bit skeptical about trying this product, but I am so glad I did. It has exceeded all of my expectations and I can't wait to see the long term results. Highly recommend!",
      name: "Jessica Doe",
      designation: "Wellness enthusiast",
      image: "/images/jessica-doe.jpg",
    },{
      quoteText: "This is the best product I've ever used!",
      text:
        "I've been using this product for a month now and I am extremely satisfied with it. It has completely transformed my skin and I am seeing visible results. Highly recommend!",
      name: "Jane Doe",
      designation: "Skincare enthusiast",
      image: "/images/jane-doe.jpg",
    },
    {
      quoteText: "I am in love with this product!",
      text:
        "I've been using this product for a few weeks now and I am amazed by the results. My hair is so much softer and healthier. I will definitely be repurchasing!",
      name: "John Doe",
      designation: "Haircare enthusiast",
      image: "/images/john-doe.jpg",
    },
    {
      quoteText: "This product has exceeded my expectations!",
      text:
        "I was a bit skeptical about trying this product, but I am so glad I did. It has exceeded all of my expectations and I can't wait to see the long term results. Highly recommend!",
      name: "Jessica Doe",
      designation: "Wellness enthusiast",
      image: "/images/jessica-doe.jpg",
    },{
      quoteText: "This is the best product I've ever used!",
      text:
        "I've been using this product for a month now and I am extremely satisfied with it. It has completely transformed my skin and I am seeing visible results. Highly recommend!",
      name: "Jane Doe",
      designation: "Skincare enthusiast",
      image: "/images/jane-doe.jpg",
    },
    {
      quoteText: "I am in love with this product!",
      text:
        "I've been using this product for a few weeks now and I am amazed by the results. My hair is so much softer and healthier. I will definitely be repurchasing!",
      name: "John Doe",
      designation: "Haircare enthusiast",
      image: "/images/john-doe.jpg",
    },
    {
      quoteText: "This product has exceeded my expectations!",
      text:
        "I was a bit skeptical about trying this product, but I am so glad I did. It has exceeded all of my expectations and I can't wait to see the long term results. Highly recommend!",
      name: "Jessica Doe",
      designation: "Wellness enthusiast",
      image: "/images/jessica-doe.jpg",
    },{
      quoteText: "This is the best product I've ever used!",
      text:
        "I've been using this product for a month now and I am extremely satisfied with it. It has completely transformed my skin and I am seeing visible results. Highly recommend!",
      name: "Jane Doe",
      designation: "Skincare enthusiast",
      image: "/images/jane-doe.jpg",
    },
    {
      quoteText: "I am in love with this product!",
      text:
        "I've been using this product for a few weeks now and I am amazed by the results. My hair is so much softer and healthier. I will definitely be repurchasing!",
      name: "John Doe",
      designation: "Haircare enthusiast",
      image: "/images/john-doe.jpg",
    },
    {
      quoteText: "This product has exceeded my expectations!",
      text:
        "I was a bit skeptical about trying this product, but I am so glad I did. It has exceeded all of my expectations and I can't wait to see the long term results. Highly recommend!",
      name: "Jessica Doe",
      designation: "Wellness enthusiast",
      image: "/images/jessica-doe.jpg",
    },{
      quoteText: "This is the best product I've ever used!",
      text:
        "I've been using this product for a month now and I am extremely satisfied with it. It has completely transformed my skin and I am seeing visible results. Highly recommend!",
      name: "Jane Doe",
      designation: "Skincare enthusiast",
      image: "/images/jane-doe.jpg",
    },
    {
      quoteText: "I am in love with this product!",
      text:
        "I've been using this product for a few weeks now and I am amazed by the results. My hair is so much softer and healthier. I will definitely be repurchasing!",
      name: "John Doe",
      designation: "Haircare enthusiast",
      image: "/images/john-doe.jpg",
    },
    {
      quoteText: "This product has exceeded my expectations!",
      text:
        "I was a bit skeptical about trying this product, but I am so glad I did. It has exceeded all of my expectations and I can't wait to see the long term results. Highly recommend!",
      name: "Jessica Doe",
      designation: "Wellness enthusiast",
      image: "/images/jessica-doe.jpg",
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
              <ReviewCardsCarousel reviewCards={reviewCards} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
