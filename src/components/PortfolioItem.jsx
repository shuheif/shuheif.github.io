import Modal from "react-modal";

const PortfolioItem = () -> {
    return (
        <>
        {/* START MODAL FOR PORTFOLIO DETAILS */}
        <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        >
      <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
        <button className="close-modal" onClick={toggleModalThree}>
          <img src="assets/img/svg/cancel.svg" alt="close icon" />
        </button>
        {/* END CLOSE ICON */}
        <div className="box_inner">
          <div className="description_wrap scrollable">
            <div className="image">
              <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
              <div
                className="main"
                style={{
                  backgroundImage: "url(assets/img/portfolio/6.jpg)",
                }}
              ></div>
            </div>
            {/* END IMAGE */}
            <div className="portfolio_main_title">
              <h3>Open Energy Dashboard</h3>
              <span>Academic project</span>
            </div>
            {/* END portfolio_main_title */}
            <div className="main_details">
              <div className="textbox">
                <p>
                  Open Energy Dashboard (OED) is an open-sourced web application that visualizes energy information on college campuses. 
                  As one of the first members in the project, I developed its comparison graph functionalities, 
                  enabling data sorting based on time periods and specific areas. 
                  Today, OED is actively used by a number of colleges across the United States.
                </p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Category</span>
                    <span>Academic project</span>
                  </li>
                  <li>
                    <span className="first">Technologies</span>
                    <span>TypeScript, Node.js, React, Redux, PostgreSQL, Docker</span>
                  </li>
                  <li>
                    <span className="first">Date</span>
                    <span>January - December 2018</span>
                  </li>
                  <li>
                    <span className="first">Reference</span>
                    <span><a href="https://openenergydashboard.github.io/">OED official website</a></span>
                    <span><a href="https://github.com/OpenEnergyDashboard/OED">OED GitHub repository</a></span>
                  </li>
                </ul>
              </div>
            </div>
            {/* main_details */}

            <div className="additional_images">
              <ul className="gallery_zoom">
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="thumb" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: "url(assets/img/portfolio/6.jpg)",
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="thumb" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: "url(assets/img/portfolio/2.jpg)",
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="thumb" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: "url(assets/img/portfolio/3.jpg)",
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
              </ul>
            </div>
          </div>
        </div>
        {/* END BOX INNER */}
      </div>
      {/* END MODALBOX NEWS */}
    </Modal>
    {/* END MODAL FOR PORTFOLIO DETAILS */}
        </>

    );
};

export default Portfolio;