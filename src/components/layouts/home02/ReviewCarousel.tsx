import React, { useState, useRef } from "react";

interface Props {
  items: {
    image: string;
    quoteText: string;
    text: string;
    name: string;
    designation: string;
  }[];
}

const ReviewCarousel: React.FC<Props> = ({ items }) => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setStartX(e.clientX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.clientX - carouselRef.current!.offsetLeft;
    const walk = x - startX;
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <p>{items[0].text}</p>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <blockquote>{item.quoteText}</blockquote>
            <p>{item.text}</p>
            <div className="item-info">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewCarousel;
