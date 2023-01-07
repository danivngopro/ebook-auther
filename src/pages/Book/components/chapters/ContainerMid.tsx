import React from "react";

function ContainerMid() {
  const state = {
    collMid: [
      {
        id: 1,
        subtitle: "Chapter 4",
        title: "The rise of trend Design",
        text:
          "Well-written book is concerned with creating typography and is essential for professionals who regularly",
      },
      {
        id: 2,
        subtitle: "Chapter 5",
        title: "Data Science Process",
        text:
          "Well-written book is concerned with creating typography and is essential for professionals who regularly",
      },
      {
        id: 3,
        subtitle: "Chapter 6",
        title: "The rise of trend Design",
        text:
          "Well-written book is concerned with creating typography and is essential for professionals who regularly ",
      },
    ],
  };
  return (
    <div className="chapter-list border-right-0">
      {state.collMid.map((data) => (
        <div className="chapter-item" key={data.id}>
          <h4>
            <span>{data.subtitle} </span> {data.title}
          </h4>
          <p>{data.text} </p>
        </div>
      ))}
    </div>
  );
}

export default ContainerMid;
