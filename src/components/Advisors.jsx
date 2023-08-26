import React from "react";
import "../styles/mentors.css";

function Advisors() {
  return (
    <div>
      <h2 className="Heading">Mentors & Advisors</h2>
      <div class="advisor">
        <div class="our-advisor our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="https://media.licdn.com/dms/image/D5603AQEczf-MkvIFCA/profile-displayphoto-shrink_400_400/0/1682872642429?e=1698278400&v=beta&t=5rCNtSVdx8LcPr8PbIVuZKAFjISFFuCl8_sU-LM3TZc"
              alt="#"
            />
          </div>
          <div class="team-content">
            <h3 class="name">Dr. OMKAR KUSHWAHA</h3>
            <h4 class="title">
              Principal Project Scientist at Indian Institute of Technology,
              Madras
            </h4>
          </div>
          <ul class="social">
            <a href="mailto:official.Omkar@gmail.com" className="message">
              <button>Message</button>
            </a>
          </ul>
        </div>

        <div class="our-advisor our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="https://media.licdn.com/dms/image/C4D03AQFYazUb8ZrNBQ/profile-displayphoto-shrink_800_800/0/1661492463363?e=1698278400&v=beta&t=4MSzBgMGvkmPAfgxwLs2t0LUDpdQwCPlhBgrxd-Trzo"
              alt="#"
            />
          </div>
          <div class="team-content">
            <h3 class="name">Akhil Tripathi</h3>
            <h4 class="title">
              Cofounder SciAstra, Mentor, Qualified NEST, Master's Student at
              NISER
            </h4>
          </div>
          <ul class="social">
            <a href="mailto:official.Akhil@gmail.com" className="message">
              <button>Message</button>
            </a>
          </ul>
        </div>

        <div class="our-advisor our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="https://media.licdn.com/dms/image/D4D03AQEQuY0lkYhV-w/profile-displayphoto-shrink_400_400/0/1673874765972?e=1698278400&v=beta&t=ikYv47pzcJsBb21h7He_ER02xgQVhAXK3glQMAEqtEI"
              alt="#"
            />
          </div>
          <div class="team-content">
            <h3 class="name">Vivek Dwivedi</h3>
            <h4 class="title">
              Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains,
              Master's Student at NISER
            </h4>
          </div>
          <ul class="social">
            <a href="mailto:official.Vivek@gmail.com" className="message">
              <button>Message</button>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Advisors;
