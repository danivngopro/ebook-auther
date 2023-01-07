import React from "react";

type ReviewCardProps = {
  quoteText: string;
  text: string;
  name: string;
  designation: string;
  image: string;
};

const ReviewCard = ({
  quoteText,
  text,
  name,
  designation,
  image,
}: ReviewCardProps) => {
  return (
    <div
      className="card"
      style={{
        width: "360px",
        height: "500px",
        border: "thin solid blue",
        borderRadius: "9px",
        boxShadow: "0 0 5px #ddd",
      }}
    >
      <div className="card-body" style={{marginLeft: '1rem', marginTop: '5px'}}>
        <div className="mr-3">
          <i className="fas fa-star" style={{ color: "gold" }} />
          <i className="fas fa-star" style={{ color: "gold" }} />
          <i className="fas fa-star" style={{ color: "gold" }} />
          <i className="fas fa-star" style={{ color: "gold" }} />
          <i className="fas fa-star" style={{ color: "gold" }} />
        </div>
        <div className="d-flex align-items-center mb-3">
          <div>
            <blockquote
              className="blockquote mb-0"
              style={{ margin: "10px 0" }}
            >
              <h3 style={{ fontWeight: "bold" }}>{quoteText}</h3>
              <footer style={{ marginBottom: "40px", marginTop: '1rem' }}>
                <span>{text}</span>
              </footer>
            </blockquote>
            <div className="card-title mt-3 d-flex align-items-center">
              <img
                src={image}
                alt={name}
                className="mr-3 rounded-circle"
                style={{ width: "80px", height: "80px" }}
              />
              <div>
                <h5 className="mb-0" style={{ fontSize: "1.2em" }}>
                  {name}
                </h5>
                <small className="text-muted" style={{ fontSize: "1.2em" }}>
                  {designation}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
