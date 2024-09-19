import React, { useEffect, useRef } from "react";
import FigmaImg from "../assets/images/figma-img.png";
import PhotoShopImg from "../assets/images/photoshop-img.png";
import AdobeImg from "../assets/images/adobe-xd-img.png";
import SketchImg from "../assets/images/sktech-img.png";
import InvisionImg from "../assets/images/invision-img.png";
import WinnerAward from "../assets/images/winner-award.png";
import WinnerAward2 from "../assets/images/winner-award2.png";
import WinnerAward3 from "../assets/images/winner-award3.png";
import WinnerAward4 from "../assets/images/winner-award4.png";

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">Doing BBA At IUBAT University</p>
                <p className="cursus university">
                IUBAT UNIVERSITY
                </p>
                <p className="cursus">
                I am react developer . I love do coding . I enjoy by this . 
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
          <div data-num="79" className="progress-item fade_up">
            sd
          </div>
          <div data-num="92" className="progress-item fade_up">
            sd
          </div>
          <div data-num="85" className="progress-item fade_up">
            sd
          </div>
          <div data-num="70" className="progress-item fade_up">
            sd
          </div>
          <div data-num="76" className="progress-item fade_up">
            ds
          </div>
          <div data-num="83" className="progress-item fade_up">
            ds
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Design Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main flip_up">
            <img src={FigmaImg} alt="figma-img" />
            <div className="skill-counter-main">
              <p>94%</p>
              <p>HTML, CSS</p>
            </div>
          </div>
          <div className="design-skills-img-main photoshop flip_up">
            <img src={PhotoShopImg} alt="photoshop-img" />
            <div className="skill-counter-main photoshop-text">
              <p>98%</p>
              <p>Figma</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd flip_up">
            <img src={AdobeImg} alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p>88%</p>
              <p>Boastrap</p>
            </div>
          </div>

          <div className="design-skills-img-main sketch flip_up">
            <img src={SketchImg} alt="sktech-img" />
            <div className="skill-counter-main sketch-text">
              <p>85%</p>
              <p>React</p>
            </div>
          </div>
          <div className="design-skills-img-main invision flip_up">
            <img src={InvisionImg} alt="invision-img" />
            <div className="skill-counter-main invision-text">
              <p>89%</p>
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
     
    </>
  );
};
export default Resume;
