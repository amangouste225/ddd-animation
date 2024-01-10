import { useEffect, useRef, useState } from "react";
import logo from "./assets/images/logo1.jpg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function App() {
  var tl = useRef();
  const time = gsap.timeline();

  // mouse animations
  const xTo = useRef();
  const yTo = useRef();
  const container = useRef();

  // Timeline

  // title
  const getChars = (title) => {
    let chars = [];

    title.split("").forEach((char) => {
      chars.push(char);
    });
    return chars;
  };

  const { contextSafe } = useGSAP(
    () => {
      (xTo.current = gsap.quickTo(".cursor", "x", {
        duration: 0.5,
        ease: "power3",
      })),
        (yTo.current = gsap.quickTo(".cursor", "y", {
          duration: 0.5,
          ease: "power3",
        })),
        (tl.current = time
          .to(
            ".lgo",
            {
              y: "100%",
              ease: "back.in",
            },
            "<"
          )
          .to(".inner_text span", {
            top: "0%",
            ease: "back.inOut",
          }));
    },
    { scope: container }
  );

  useEffect(() => {}, [container]);

  const moveShape = contextSafe((e) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  });

  const onClicked = contextSafe(() => {
    tl.current.reversed();
  });

  return (
    <div
      className="container"
      ref={container}
      onMouseMove={(e) => moveShape(e)}
    >
      <div></div>
      <div className="cursor"></div>
      <div className="wrapper">
        <div className="nav">
          <div className="nav_logo">
            <div className="inner_logo">
              <img src={logo} alt="logo" className="lgo" />
            </div>
            <div className="inner_text">
              <span className="logo">digital design days</span>
              <span className="text">
                Global meeting point of digital design industry
              </span>
            </div>
          </div>
          <div className="nav_btn">
            <div className="btn_inner">
              <a href="/">become a sponsor</a>
            </div>
            <span className="circle"></span>
          </div>
        </div>
        <div className="main">
          <h1>
            <span>
              <div>{getChars("milan")}</div>
            </span>
            <span> {getChars("renaissance")} </span>
            <span> {getChars("comeback 8th edition")} </span>
          </h1>

          <div className="btn_wrapper" onClick={onClicked}>
            <div className="btn_black">
              <span>{getChars("join the waiting list")}</span>
            </div>
          </div>

          <div className="digital">
            <div>Digital </div>
            <div>design</div>
            <div>days</div>
            <div>
              <span>fall 2024</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer_privacy">
            <a href="/">
              <span>{getChars("privacy policy")}</span>
            </a>
          </div>
          <div className="footer_btn"></div>
          <div className="footer_privacy made">
            <a
              href="https://www.linkedin.com/in/angethierry/"
              target="_blank"
              rel="noreferrer"
            >
              <span>{getChars("made by")}</span>
              <span className="copyright">AMANGOUA ANGE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
