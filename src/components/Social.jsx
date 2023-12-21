import React from "react";

const SocialShare = [
  {
    iconName: "github",
    link: "https://github.com/shuheif",
  },
  { 
    iconName: "linkedin", 
    link: "https://www.linkedin.com/in/shuheifujita/" 
  },
  { 
    iconName: "twitter", 
    link: "https://twitter.com/shuheyfujita" 
  },
  {
    iconName: "spotify",
    link: "https://podcasters.spotify.com/pod/show/samuraiz",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
