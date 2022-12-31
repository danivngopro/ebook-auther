import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import ReviewCard from "./ReviewCard";

type CarouselProps = {
  reviewCards: {
    quoteText: string;
    text: string;
    name: string;
    designation: string;
    image: string;
  }[];
};

export default function ReviewCardsCarousel({ reviewCards }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        {reviewCards.map((reviewCard, index) => (
          <div>
            <ReviewCard
              key={index}
              quoteText={reviewCard.quoteText}
              text={reviewCard.text}
              name={reviewCard.name}
              designation={reviewCard.designation}
              image={reviewCard.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
