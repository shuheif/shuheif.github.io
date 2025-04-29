import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Skills",
      content: [
        " Python, SQL, JavaScript, Java, PHP",
        " PyTorch, TensorFlow, Robot Operating System (ROS)",
        " React, Redux, HTML, CSS",
        " Git, Kubernetes, Google Cloud, Red Hat OpenShift, Linux",
        " Tableau, Atlassian Confluence, Jira"
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Self-Driving Cars",
        " Software Engineering",
        " Robotics",
        " Entrepreneurship",
        " Aviation",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
