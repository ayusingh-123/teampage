import React from "react";
import "../styles/college.css";
import data from "../assets/data.json";

function Institutes() {
  return (
    <>
      <h2 className="Heading1">Team Page</h2>
      <h2 className="Heading2">
        Learn from scientists and Research scholars from the top Institutes in
        the world
      </h2>
      <div className="inst">
        {data.university.map((i) => (
          <article class="card">
            <img class="card__background" src={i.imgSrc} alt="#" />
            <div class="card__content | flow">
              <div class="card__content--container | flow">
                <h3 class="card__title">{i.title}</h3>
                <p class="card__description">{i.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Institutes;
