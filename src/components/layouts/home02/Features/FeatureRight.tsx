import React from "react";

function FeatureRight() {
  const state = {
    collRight: [
      {
        id: 1,
        icon: "fa fa-check",
        title: "10 tips to improve yourself",
        text:
          "Well-written book is concerned with creating typography and is essential for professionals who regularly",
      },
      {
        id: 2,
        icon: "fa fa-check",
        title: "Powerful tips & tricks",
        text:
          "Well-written book is concerned with creating typography and is essential for professionals who regularly",
      },
      {
        id: 3,
        icon: "fa fa-check",
        title: "Grow your personality",
        text:
          "Well-written book is concerned with creating typography and is essential for professionals who regularly ",
      },
    ],
  };

  return (
    <div className="topic-items">
      {state.collRight.map((data) => (
        <div className="topic-item" key={data.id}>
          <div className="icon-box">
            <i className={data.icon}></i>
          </div>
          <div className="topic-content">
            <h4>{data.title}</h4>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureRight;
