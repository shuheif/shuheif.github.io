import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "center",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "Summer 2023",
          institute: "Research Assistant @ Boston University",
          degree: "I prototyped a Federated Learning platform for driving decision-making models. I researched its potential risks of privacy leakage through Gradient Inversions.",
        },
        {
          id: 2,
          year: "2019 - 2022",
          institute: "Senior Operations Analyst @ Indeed Japan K.K.",
          degree: "I crafted strategies to enhance content quality on the job portal through in-depth data analysis. I boosted the team's operational efficiency by automating and outsourcing tasks, resulting in a 50% reduction in incoming inquiries.",
        },
        {
          id: 3,
          year: "Summer 2018",
          institute: "Cloud Programmer @ Toyota Tsusho Systems US, Inc.",
          degree: "I prototyped a chatbot AI to automate the company’s customer service operations by training ‘Seq2Seq’ models on various open-sourced datasets.",
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

export default Resume;
