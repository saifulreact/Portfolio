import React, { useEffect, useRef, useState } from "react";
import ProfileImg from "../assets/images/saifulLittle.jpg";
import EmailSvg from "../assets/images/svg/email-svg.svg";
import BehanceSvg from "../assets/images/facebook.png";
import DribleSvg from "../assets/images/github (1).png";
import MediumSvg from "../assets/images/linkedin (1).png";
import HomeSvg from "../assets/images/svg/home-svg.svg";
import AboutSvg from "../assets/images/svg/about-svg.svg";
import ResumeSvg from "../assets/images/svg/resume-svg.svg";
import ServicesSvg from "../assets/images/svg/services-svg.svg";
import PortfolioSvg from "../assets/images/svg/portfolio-svg.svg";
import PricingSvg from "../assets/images/svg/pricing-svg.svg";
import BlogSvg from "../assets/images/svg/blog-svg.svg";
import ContactSvg from "../assets/images/svg/contact-svg.svg";

import JessicaMainImg from "../assets/images/saiful.jpg";
import CircularImg from "../assets/images/circular-img.png";
import FlowerImg from "../assets/images/flower.png";

import AboutSection from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Contact from "./Contact";
import $ from "jquery";
import CV from "../assets/images/saiful resume .jpg";
import { Link } from "react-router-dom";
const Home = () => {
  //Text
  const firstTexts = ["Frontend Developer", "React Developer", "Freelancer"];
  const secondTexts = [
    "Freelancer",
    "Frontend-End Web Developer",
    "React Developer",
  ];
  const intervalTime = 600;

  const [firstTextIndex, setFirstTextIndex] = useState(0);
  const [secondTextIndex, setSecondTextIndex] = useState(0);

  useEffect(() => {
    const firstTextTimeout = setTimeout(() => {
      setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
    }, intervalTime * 3);

    return () => clearTimeout(firstTextTimeout);
  }, [firstTextIndex]);

  useEffect(() => {
    const secondTextTimeout = setTimeout(() => {
      setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
    }, intervalTime * 3);

    return () => clearTimeout(secondTextTimeout);
  }, [secondTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
      setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
    }, intervalTime * 7);

    return () => clearInterval(interval);
  }, []);

  // Logo marquee
  useEffect(() => {
    document.querySelectorAll(".logos").forEach(function (logosContainer) {
      const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
      logosContainer.appendChild(copy);
    });
  }, []);

  // Toggle Btn
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const menuItems = document.querySelectorAll(".menu-list-main li");

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
      menuToggle.classList.toggle("open");
      sideMenu.classList.toggle("show");
    };

    const handleMenuItemClick = (event) => {
      event.preventDefault();
      const linkElement = event.currentTarget.querySelector("a");
      if (linkElement) {
        const targetId = linkElement.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
        menuToggle.classList.remove("open");
        sideMenu.classList.remove("show");
      }
    };

    if (menuToggle && sideMenu && menuItems.length > 0) {
      menuToggle.addEventListener("click", handleMenuToggle);
      menuItems.forEach((item) => {
        item.addEventListener("click", handleMenuItemClick);
      });

      $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
      });

      return () => {
        menuToggle.removeEventListener("click", handleMenuToggle);
        menuItems.forEach((item) => {
          item.removeEventListener("click", handleMenuItemClick);
        });
      };
    }
  }, [menuOpen]);

  const [activeLink, setActiveLink] = useState("");

  const handleClick = (event, id) => {
    event.preventDefault();
    setActiveLink(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <button id="menu-toggle" className="menu-toggle-button">
        <span className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </button>
      {/* <!-- ====================================== Side Menu ===================================== --> */}
      <div className="side-menu">
        <div className="profile-img-main">
          <img className="zoom_in" src={ProfileImg} alt="profile-img" />
          <h1 className="fade_up">
            Saiful <span>Islam</span>
          </h1>
          <h2 className="designer fade_up">{firstTexts[firstTextIndex]}</h2>
          <div className="profile-media-icons-main fade_up">
            <Link to="saiful211204@gmail.com" className="profile-media-icons">
              <img src={EmailSvg} alt="email-svg" />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=61558055157649" className="profile-media-icons">
              <img src={BehanceSvg} alt="behance-svg" />
            </Link>
            <Link to="https://github.com/saifulreact" className="profile-media-icons">
              <img src={DribleSvg} alt="drribale-svg" />
            </Link>
            <Link to="https://www.linkedin.com/in/saiful-islam-96a877227/" className="profile-media-icons">
              <img src={MediumSvg} alt="medium-svg" />
            </Link>
          </div>
        </div>
        <div className="menu-list-main">
          <ul>
            <li
              className={`active-menu-action ${
                activeLink === "home" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#home"
                onClick={(e) => handleClick(e, "home")}
              >
                <img src={HomeSvg} alt="home-svg" />
                Home
              </a>
            </li>
            <li
              className={`active-menu-action ${
                activeLink === "about" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#about"
                onClick={(e) => handleClick(e, "about")}
              >
                <img src={AboutSvg} alt="home-svg" />
                About
              </a>
            </li>
            <li
              className={`active-menu-action ${
                activeLink === "resume" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#resume"
                onClick={(e) => handleClick(e, "resume")}
              >
                <img src={ResumeSvg} alt="home-svg" />
                Resume
              </a>
            </li>
            <li
              className={`active-menu-action ${
                activeLink === "services" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#services"
                onClick={(e) => handleClick(e, "services")}
              >
                <img src={ServicesSvg} alt="home-svg" />
                Services
              </a>
            </li>
            
            <li
              className={`active-menu-action ${
                activeLink === "pricing" ? "active" : ""
              }`}
            >
              <a
                className="fade_right"
                href="#pricing"
                onClick={(e) => handleClick(e, "pricing")}
              >
                <img src={PricingSvg} alt="home-svg" />
                Pricing
              </a>
            </li>
           
            <li
              className={`active-menu-action ${
                activeLink === "contact" ? "active" : ""
              }`}
              id="contact-line"
            >
              <a
                className="fade_right"
                href="#contact"
                onClick={(e) => handleClick(e, "contact")}
              >
                <img src={ContactSvg} alt="home-svg" />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div id="wrap">
            <Link
              to={CV}
              rel="noreferrer"
              target="_blank"
              className="btn-slide"
            >
              <span className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="download-svg"
                    d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="title">Download CV</span>
              <span className="title-hover">Click Here</span>
            </Link>{" "}
          </div>
        </div>
      </div>

      {/* <!-- ====================================== Side Menu End ===================================== --> */}
      <div className="main-containe" data-bs-spy="scroll">
        {/* <!-- ====================================== Section One ===================================== --> */}
        <section className="section-one overflow-hidden" id="home">
          <div className="row">
            <div className="col-xxl-6 col-lg-6">
              <h2 className="jessica-main-text zoom_in">
                Saiful <br />  <span>Islam</span>
              </h2>
              <h3 className="back-End-dev designer2">
                {secondTexts[secondTextIndex]}
              </h3>
              <p className="best fade_down">
                I appreciate your trust greatly our clients choose me & my
                products because they know , I try my  best.
              </p>
              <div className="section-one-btns-main fade_down">
               
                <div className="wrapper">
                  <a className="btn-hover btn-hover2" href="#contact">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-6 position-relative">
              <img className="flower" src={FlowerImg} alt="flower" />
              <img
                className="circular-img"
                src={CircularImg}
                alt="circular-img"
              />
              <img
                className="jessica-main-img zoom_in"
                src={JessicaMainImg}
                alt="jessica-main-img"
              />
             
            </div>
          </div>
        </section>
       
        {/* <!-- ====================================== Section Marquee End ===================================== --> */}
        {/* <!-- ====================================== Section About ===================================== --> */}
        <AboutSection />
        {/* <!-- ====================================== Section About End ===================================== --> */}
        {/* <!-- ====================================== Section Education Experience ===================================== --> */}
        <Resume />
        {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
        {/* <!-- ====================================== Section Services ===================================== --> */}
        <Services />
        {/* <!-- ====================================== Section Services ===================================== --> */}
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        {/* <Portfolio /> */}
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        {/* <!-- ====================================== Section Pricing ===================================== --> */}
        <Pricing />
        {/* <!-- ====================================== Section Pricing ===================================== --> */}
        {/* <!-- ====================================== Section Blogs ===================================== --> */}
        {/* <Blog /> */}
        {/* <!-- ====================================== Section Blogs ===================================== --> */}
        {/* <!-- ====================================== Section Contact ===================================== --> */}
        <Contact />
        {/* <!-- ====================================== Section Contact ===================================== --> */}
      </div>
    </>
  );
};
export default Home;
