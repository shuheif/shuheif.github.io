import React from "react";

const Education = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "center",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2022 - 2024",
          institute: "Boston University",
          degree: "M.S. in Robotics and Autonomous Systems",
        },
        {
          id: 2,
          year: "2016 - 2018",
          institute: "Beloit College",
          degree: "B.S. in Physics, Computer Science minor",
        },
        {
          id: 3,
          year: "2014 - 2016",
          institute: "Hokkaido University",
          degree: "B.S. in Computer Engineering",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Education;
