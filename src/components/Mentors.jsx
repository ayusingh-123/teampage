import React from "react";
import mentor from "../assets/mentor.json";
import "../styles/mentors.css";

function Mentors() {
  return (
    <>
      <h2 className="Heading">Meet Your Mentors</h2>
      <div class="container">
        {mentor.person.map((i) => (
          <div>
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src={i.imgSrc} alt="#" />
              </div>
              <div class="team-content">
                <h3 class="name">{i.title}</h3>
                <h4 class="title">{i.university}</h4>
              </div>
              <ul class="social">
                <li></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Mentors;
