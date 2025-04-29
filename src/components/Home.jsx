import React from "react";
import Typed from "react-typed";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/profile_image.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Shuhei Fujita</h3>
            <h4 className="typer">
              <Typed
                strings={[
                  "Software Engineer",
                  "Roboticist",
                  "Data Analyst",
                  "Podcast CoHost",
                  "Entrepreneur",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>
            <p className="job">
              Dedicated software engineer in the research and development of autonomous vehicles
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
