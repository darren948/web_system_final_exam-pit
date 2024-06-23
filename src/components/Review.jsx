import React, { useState } from "react";
import Rating from "./Sidebar/rating";

const reviwtitle = "Add a Review";
let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Eren Yeager",
    date: "Posted on June 10, 2024 at 6:12 am",
    desc: "Good quality product and affordable price.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Kaneki Ken",
    date: "Posted on Jun 15, 2024 at 6:57 am",
    desc: "Good quality product and affordable price.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Asta Staria",
    date: "Posted on Jun 16, 2024 at 7:57 am",
    desc: "Good quality product and affordable price.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Thorfinn",
    date: "Posted on Jun 22, 2024 at 10:57 pm",
    desc: "Good quality product and affordable price.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      {" "}
      <ul
        className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"
          }`}
      >
        <li onClick={() => setReviewShow(!reviewShow)} className="desc">
          Description
        </li>
        <li onClick={() => setReviewShow(!reviewShow)} className="rev">
          Reviews 4
        </li>
      </ul>

      <div
        className={`review-content ${reviewShow ? "review-content-show" : "description-show"
          }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={`${review.imgUrl}`} alt={`${review.imgAlt}`} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                    <Rating />
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input type="text" name="name" placeholder="Full Name *" />
                </div>
                <div className="col-md-4 col-12">
                  <input type="text" name="email" placeholder="Your Email *" />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="rating-title">Your Rating : </span>
                    <Rating />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    rows="8"
                    type="text"
                    name="message"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="default-button" type="submit">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
          Adidas caters to athletes, fitness enthusiasts, 
          and anyone who wants to embrace sport as part of their lifestyle. 
          Explore their collections and find your perfect fit!
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
