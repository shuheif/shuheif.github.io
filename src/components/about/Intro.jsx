import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/profile_color_wide.jpeg",
    name: "Shuhei Fujita",
    designation: "Software Engineer",
    text: (
      <>
        <p>
          Hello and welcome! My name is Shuhei Fujita. I’m passionate about 
          the intersection of technology and transportation, particularly within the realm of self-driving cars.
        </p>
        <p>
          Over the past decade, I’ve immersed myself in software engineering. 
          My journey into coding began during my freshman year of college as a quest to develop an iOS app that catered to my needs. 
          Since then, I’ve consistently expanded my coding skills through a blend of professional, academic, and personal projects.
        </p>
        <p>
          Transportation in all its forms has been my guiding passion. 
          From navigating landscapes behind the wheel to soaring through the skies in a glider, 
          the dynamics of vehicles and aircraft have always captivated me. 
          This fascination is amplified by my belief in the urgent need for advancements in autonomous vehicles, 
          particularly in Japan, where rural depopulation and an increasingly ageing society present critical challenges.
        </p>
        <p>
          Driven by my passion for transportation, I’m actively seeking a full-time role that bridges the automotive and robotics sectors. 
          My ambition is to leverage my skills, knowledge, and enthusiasm to advance transportation systems, 
          making them more accessible for everyone.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
