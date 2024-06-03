import { useRef } from "react";
import logo from "./assets/images/logo1.jpg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { RxCross1 } from "react-icons/rx";

function App() {
  var tl = useRef();
  // mouse animations
  const xTo = useRef();
  const yTo = useRef();
  const container = useRef();

  // title
  const getChars = (title) => {
    let chars = [];
    title.split("").forEach((char, index) => {
      chars.push(
        <span key={index} className="chars">
          {char}
        </span>
      );
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
        }));
    },
    { scope: container }
  );

  const moveShape = contextSafe((e) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  });

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(
          ".btn_wrapper",
          {
            ease: "back.in",
            y: "300px",
          },
          "start"
        )
        .to(
          ".heading_inner",
          {
            ease: "back.in",
            y: "100px",
          },
          "start"
        )
        .to(
          ".content",
          {
            css: { opacity: 1 },
          },
          "open"
        )

        .from(
          ".form",
          {
            y: "200px",
            ease: "expo.inOut",
            stagger: 0.05,
          },
          "<"
        )
        .to(
          ".form",
          {
            width: "500px",
            ease: "back(3)",
          },
          ">"
        )
        .to(
          ".content2",
          {
            css: { filter: "blur(10px)", opacity: 1 },
          },
          "<"
        )
        .to(
          ".input",
          {
            css: { display: "block" },
            ease: "back.out",
          },
          "<"
        )
        .from(
          ".content_title",
          {
            y: "540px",
            stagger: 0.05,
            ease: "back",
            rotation: 20,
          },
          "<"
        )
        .from(
          ".content_para",
          {
            stagger: 0.05,
            ease: "back",
            y: "550px",
            rotation: -10,
          },
          "<"
        )
        .from(
          ".btn_spam",
          {
            stagger: 0.05,
            ease: "back",
            y: "550px",
            rotation: -10,
          },
          "<"
        )
        .from(".btn_close", {
          scale: 0,
          ease: "back",
        })
        .to(
          ".lgo",
          {
            y: "300px",
            stagger: 0.05,
            ease: "back.in",
          },
          "<"
        )
        .to(".inner_text span", {
          top: "0%",
          ease: "back",
        })
        .to(
          ".blue1",
          {
            css: {
              zIndex: "9999",
              backgroundColor: "#382968",
              opacity: 0.9,
            },
            duration: 1,
          },
          "-=2"
        )
        .reverse();
    },
    { scope: container }
  );

  const onClicked = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  return (
    <section
      className="container"
      ref={container}
      onMouseMove={(e) => moveShape(e)}
    >
      <div className="blue1">
        <div className="content">
          <div className="content-wrapper">
            <h1 className="content_title"> {getChars("join the")}</h1>
            <h1 className="content_title"> {getChars("waitlist")}</h1>
          </div>

          <p className="content_para">
            Subscribe now to get 50% off tickets deal and latest news on the 8th
            edition
          </p>
          <div className="btn_spam">
            <button>no spam</button>
            <button>unscribe anytime</button>
          </div>
          <form
            className="form"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="insert your email"
              className="input"
              required
            />
            <button>subscribe</button>
          </form>
        </div>
      </div>
      <div className="content2">
        <h1>
          Website <br /> content
        </h1>
      </div>
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
          <div className="btn_close" onClick={onClicked}>
            <RxCross1 size="25" />
          </div>
          <div className="nav_btn">
            <div className="btn_inner">
              <a href="/">become a sponsor</a>
            </div>
            <span className="circle"></span>
          </div>
        </div>
        <div className="main">
          <h1 className="heading">
            <div className="heading_inner">
              <span>milan</span>
            </div>
            <div className="heading_inner">
              <span>renaissance</span>
            </div>
            <div className="heading_inner">
              <span>{getChars("comeback 8th edition")}</span>
            </div>
          </h1>
          <div className="btn_wrapper" onClick={onClicked}>
            <div className="btn_black">
              <span>join the waiting list</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer_privacy">
            <a href="/">
              <div>{getChars("privacy policy")}</div>
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
    </section>
  );
}

export default App;
