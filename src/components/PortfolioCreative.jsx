import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import ReactTooltip from "react-tooltip";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
  // for popup video for youtube
  const [isOpen, setOpen] = useState(false);

  // popup video for vimeo
  const [isOpen2, setOpen2] = useState(false);

  // for modal details
  const [isModalOpenTagBots, setIsOpenTagBots] = useState(false);
  const [isModalOpenCoOps, setIsOpenCoOps] = useState(false);
  const [isModalOpenOED, setIsOpenOED] = useState(false);
  const [isModalOpenTimeTable, setIsTimeTable] = useState(false);
  const [isModalOpenLittrex, setIsLittrex] = useState(false);
  const [isModalOpenSamuraiZ, setIsSamuraiZ] = useState(false);

  // for modal details method
  function toggleModalTagBots() {
    setIsOpenTagBots(!isModalOpenTagBots);
  }
  function toggleModalCoOps() {
    setIsOpenCoOps(!isModalOpenCoOps);
  }
  function toggleModalOED() {
    setIsOpenOED(!isModalOpenOED);
  }
  function toggleModalTimeTable() {
    setIsTimeTable(!isModalOpenTimeTable);
  }
  function toggleModalLittrex() {
    setIsLittrex(!isModalOpenLittrex);
  }
  function toggleModalSamuraiZ() {
    setIsSamuraiZ(!isModalOpenSamuraiZ);
  }

  return (
    <>
      <Gallery>
        <div className="container">
          <div className="tokyo_tm_portfolio">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Portfolio</h3>
                </div>
              </div>
            </div>
            {/* END TOKYO_TM_TITLE */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>Academic</Tab>
                  <Tab>Personal</Tab>
                  <Tab>Collaboration</Tab>
                </TabList>
                {/* END TABLIST */}
                <div className="list_wrapper">
                  <TabPanel>                    
                    <ul className="portfolio_list">
                      {/* START TagBots */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/tagbots_image.png"
                              alt="TagBots"
                              data-tip
                              data-for="tagbots"
                              onClick={toggleModalTagBots}
                            />
                            <ReactTooltip
                              id="tagbots"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>TagBots</h5>
                                <span>Mobile Robot Development</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END TagBots */}
                      {/* START Co-Ops */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/coops.jpeg"
                              alt="Details"
                              data-tip
                              data-for="coops"
                              onClick={toggleModalCoOps}
                            />
                            <ReactTooltip
                              id="coops"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Co-Ops: Collaborative Open Source and Privacy-Preserving Training for Learning to Drive</h5>
                                <span>Academic Research Project</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END Co-Ops */}
                      {/* START TimeTable */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/timetable.jpg"
                              alt="Details"
                              data-tip
                              data-for="timetable"
                              onClick={toggleModalTimeTable}
                            />
                            <ReactTooltip
                              id="timetable"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>TimeTable - Class Scheduler</h5>
                                <span>iOS Application Development</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END TimeTable */}
                      {/* START OED */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/oed.jpg"
                              alt="OED"
                              data-tip
                              data-for="oed"
                              onClick={toggleModalOED}
                            />
                            <ReactTooltip
                              id="oed"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Open Energy Dashboard</h5>
                                <span>Web Application Development</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END OED */}
                      {/* START Samurai Z */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/samuraiz.png"
                              alt="Details"
                              data-tip
                              data-for="samuraiz"
                              onClick={toggleModalSamuraiZ}
                            />
                            <ReactTooltip
                              id="samuraiz"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Samurai Z</h5>
                                <span>Podcast Co-Host</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END Samurai Z */}
                      {/* START Littrex */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/littrex_top.png"
                              alt="Details"
                              data-tip
                              data-for="littrex"
                              onClick={toggleModalLittrex}
                            />
                            <ReactTooltip
                              id="littrex"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Littrex</h5>
                                <span>Web Application Development</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END Littrex */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  {/* START ACADEMIC */}
                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* START TagBots */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/tagbots_image.png"
                              alt="TagBots"
                              data-tip
                              data-for="tagbots"
                              onClick={toggleModalTagBots}
                            />
                            <ReactTooltip
                              id="tagbots"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>TagBots</h5>
                                <span>Mobile Robot Development</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END TagBots */}
                      {/* START Co-Ops */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/coops.jpeg"
                              alt="Details"
                              data-tip
                              data-for="coops"
                              onClick={toggleModalCoOps}
                            />
                            <ReactTooltip
                              id="coops"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Co-Ops: Collaborative Open Source and Privacy-Preserving Training for Learning to Drive</h5>
                                <span>Academic Research Project</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END Co-Ops */}
                      {/* START OED */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/oed.jpg"
                              alt="Details"
                              data-tip
                              data-for="oed"
                              onClick={toggleModalOED}
                            />
                            <ReactTooltip
                              id="oed"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Open Energy Dashboard</h5>
                                <span>Web Application Development</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END OED */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ACADEMIC */}

                  {/* START PERSONAL */}
                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* START TimeTable */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/timetable.jpg"
                              alt="Details"
                              data-tip
                              data-for="timetable"
                              onClick={toggleModalTimeTable}
                            />
                            <ReactTooltip
                              id="timetable"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>TimeTable - Class Scheduler</h5>
                                <span>iOS Application Development</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END TimeTable */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END PERSONAL */}

                  {/* START TEAM */}
                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* START Samurai Z */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/samuraiz.png"
                              alt="Details"
                              data-tip
                              data-for="samuraiz"
                              onClick={toggleModalSamuraiZ}
                            />
                            <ReactTooltip
                              id="samuraiz"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Samurai Z</h5>
                                <span>Podcast Co-Host</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END Samurai Z */}
                      {/* START Littrex */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/littrex_top.png"
                              alt="Details"
                              data-tip
                              data-for="littrex"
                              onClick={toggleModalLittrex}
                            />
                            <ReactTooltip
                              id="littrex"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Littrex</h5>
                                <span>Web Application Development</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END Littrex */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END TEAM */}
                </div>
                {/* END LIST WRAPPER */}
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>

      {/* START MODAL FOR TagBots */}
      <Modal
        isOpen={isModalOpenTagBots}
        onRequestClose={toggleModalTagBots}
        contentLabel="TagBots"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTagBots}>
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
                    backgroundImage: "url(assets/img/portfolio/robotics_for_kids.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>TagBots</h3>
                <span>Mobile Robot Development</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    TagBots is a class project from EC545 Cyber-Physical Systems at Boston University. 
                    We demonstrated surveillance with mobile robots using Robot Operating System (ROS), Python, and OpenCV.
                    We programmed the robots to autonomously search and chase red objects, engaging in a game of tag with human participants.
                    We implemented our own target detection and object avoidance features utilizing a depth camera and LiDAR sensor.
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
                      <span>Robot Operating System (ROS), Python, OpenCV</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>September - December 2023</span>
                    </li>
                    <li>
                      <span className="first">Reference</span>
                      <span><a href="https://github.com/AidanNowa/EC545_TAGBOT">GitHub Repository</a></span>
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
                            backgroundImage: "url(assets/img/portfolio/demoplay.gif)",
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
                            backgroundImage: "url(assets/img/portfolio/rosmaster.jpeg)",
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
                            backgroundImage: "url(assets/img/portfolio/high_level_diagram.jpg)",
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
      {/* END MODAL FOR TagBots */}

      {/* START MODAL FOR CoOps */}
      <Modal
        isOpen={isModalOpenCoOps}
        onRequestClose={toggleModalCoOps}
        contentLabel="CoOps"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalCoOps}>
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
                    backgroundImage: "url(assets/img/portfolio/coops.jpeg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Co-Ops: Collaborative Open Source and Privacy-Preserving Training for Learning to Drive</h3>
                <span>Academic Research Project</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    At Boston University H2X Lab, under the guidance of Dr. Ohn-Bar, I participate in a series of research project focused on Federated Learning (FL) technology for end-to-end driving models. 
                    My primary objective is to develop a FL platform capable of enriching training datasets within the domain of autonomous driving.
                    I successfully created and demonstrated a prototype of this platform, showcasing its potential to the Red Hat researcher group.
                  </p>
                  <p>
                    Another aspect of the project is leading research on the risks of privacy leakage through gradient inversions within the FL platform.
                    Utilizing Python and PyTorch, our team is actively working towards a publication to address insights into the intersection of FL and privacy concerns.
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
                      <span>Python, PyTorch, Red Hat OpenShift</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 2023 - Present</span>
                    </li>
                    <li>
                      <span className="first">Reference</span>
                      <p><span><a href="https://research.redhat.com/blog/research_project/co-ops-collaborative-open-source-and-privacy-preserving-training-for-learning-to-drive/">Red Hat Research article</a></span></p>
                      <p><span><a href="https://github.com/shuheif/co-ops-server">GitHub repository</a></span></p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR CoOps */}

      {/* START MODAL FOR OED */}
      <Modal
        isOpen={isModalOpenOED}
        onRequestClose={toggleModalOED}
        contentLabel="Open Energy Dashboard"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOED}>
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
                    backgroundImage: "url(assets/img/portfolio/oed.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Open Energy Dashboard</h3>
                <span>Web Application Development</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Open Energy Dashboard (OED) is an open-sourced web application that visualizes energy information on college campuses. 
                    As one of the first members in the project, I developed its comparison graph functionalities, 
                    enabling data sorting based on time periods and specific areas. In Fall 2018, I was awarded an Honor's Term for leading the project during the semester.
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
                      <p><span><a href="https://openenergydashboard.github.io/">OED official website</a></span></p>
                      <p><span><a href="https://github.com/OpenEnergyDashboard/OED">OED GitHub repository</a></span></p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR OED */}

      {/* START MODAL FOR TimeTable */}
      <Modal
        isOpen={isModalOpenTimeTable}
        onRequestClose={toggleModalTimeTable}
        contentLabel="TimeTable"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTimeTable}>
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
                    backgroundImage: "url(assets/img/portfolio/timetable.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>TimeTable - Class Scheduler</h3>
                <span>iOS Application Development</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    TimeTable is an iOS app for college students to keep track of their academic schedule and progress. 
                    It achieved more than 53,000 downloads over its six-year presence on App Store. 
                    The app is no longer available on App Store.
                  </p>
                  <p>
                    The core features include a table view of academic schedule, 
                    real-time data sync across iOS devices, and schedule sync with iOS Calendar app.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Category</span>
                      <span>Personal project</span>
                    </li>
                    <li>
                      <span className="first">Technologies</span>
                      <span>Swift, Xcode</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2014 - 2021</span>
                    </li>
                    <li>
                      <span className="first">Reference</span>
                      <p><span><a href="https://timetable.mystrikingly.com/">App homepage</a></span></p>
                      <p><span><a href="https://medium.com/@shuheifujita/ios%E3%82%A2%E3%83%97%E3%83%AA-6%E5%B9%B4%E9%96%93%E3%81%AE%E9%96%8B%E7%99%BA%E3%81%BE%E3%81%A8%E3%82%81-fcddd98347c8">Blog article</a></span></p>
                      {/* END SOCIAL SHARE */}
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
                            backgroundImage: "url(assets/img/portfolio/timetable_class.jpeg)",
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
                            backgroundImage: "url(assets/img/portfolio/timetable_calendar.jpeg)",
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
                            backgroundImage: "url(assets/img/portfolio/timetable_sync.jpeg)",
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
      {/* END MODAL FOR TimeTable */}

      {/* START MODAL FOR Littrex */}
      <Modal
        isOpen={isModalOpenLittrex}
        onRequestClose={toggleModalLittrex}
        contentLabel="Littrex"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalLittrex}>
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
                    backgroundImage: "url(assets/img/portfolio/littrex_top.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Littrex</h3>
                <span>Web-based Learning Management System Development</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We developed a web-based Learning Management System (LMS) using PHP and MySQL.
                    We received pre-seed funding from the gBETA' startup accelerator program by gener8tor'.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Category</span>
                      <span>Collaboration Project</span>
                    </li>
                    <li>
                      <span className="first">Technologies</span>
                      <span>PHP, CakePHP, MySQL</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2017</span>
                    </li>
                    <li>
                      <span className="first">Reference</span>
                      <span><a href="https://github.com/shuheif/Littrex">GitHub repository</a></span>
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
                            backgroundImage: "url(assets/img/portfolio/littrex_grades.png)",
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
                            backgroundImage: "url(assets/img/portfolio/littrex_user.png)",
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
                            backgroundImage: "url(assets/img/portfolio/littrex_course.png)",
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
      {/* END MODAL FOR Littrex */}

      {/* START MODAL FOR SamuraiZ */}
      <Modal
        isOpen={isModalOpenSamuraiZ}
        onRequestClose={toggleModalSamuraiZ}
        contentLabel="SamuraiZ"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSamuraiZ}>
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
                    backgroundImage: "url(assets/img/portfolio/samuraiz.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Samurai Z - The World in 2035</h3>
                <span>Podcast Co-Host</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    As a co-host of a podcast channel tailored for the Gen Z audience, I explore the intersection of technologies and businesses, envisioning the world in 2035.
                    Over the past three years, our podcast has become a dynamic platform where we delve into new technologies, emerging trends, and innovative concepts that could shape the future landscape.
                    With over 70 episodes uploaded, our discusssions cover a diverse range of topics, offering our audience insightful perspectives and thought-provoking conversations.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Category</span>
                      <span>Collaboration Project</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>2022 - Present</span>
                    </li>
                    <li>
                      <span className="first">Reference</span>
                      <span><a href="https://podcasters.spotify.com/pod/show/samuraiz">Samurai Z Homepage</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR SamuraiZ */}
    </>
  );
};

export default Portfolio;
