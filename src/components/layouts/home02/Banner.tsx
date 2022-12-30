import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  const state = {
    listItem: [
      {
        id: 1,
        icon: "fa fa-check",
        title: "Learn From Expert in details",
      },
      {
        id: 2,
        icon: "fa fa-check",
        title: "16 Chapters included",
      },
      {
        id: 3,
        icon: "fa fa-check",
        title: "eBook includes iBooks, PDF & ePub versions",
      },
      {
        id: 4,
        icon: "fa fa-check",
        title: "Audio book with every purchase",
      },
    ],
  };
  return (
    <section className="banner pb-80">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="banner-img pr-3">
              <img
                src="assets/images/banner/book-2.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="banner-content  mt-4 mt-lg-0">
              <span className="subheading">50% discount on early purchase</span>
              <h1>Solve your daily life problem in 1 minute</h1>
              <ul>
                {state.listItem.map((data) => (
                  <li key={data.id}>
                    <i className={data.icon}></i> {data.title}
                  </li>
                ))}
              </ul>
              <Link to="#" className="btn btn-main">
                Get this book at 29$
              </Link>
              <p>
                Interested in free chapter? <Link to="#">Get it now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
