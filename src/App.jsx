import logo from "./assets/images/logo1.jpg";
import { BlackBtn } from "./components/BlackBtn";

function App() {
  const getChars = (title) => {
    let chars = [];

    title.split("").forEach((char) => {
      chars.push(char);
    });
    return chars;
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="nav">
          <div className="nav_logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="nav_btn">
            <div className="btn_inner">become a sponsor</div>
            <span className="circle"></span>
          </div>
        </div>
        <div className="main">
          <h1>
            <span>milan</span>
            <span>renaissance</span>
            <span>comeback 8th edition</span>
          </h1>
        </div>
        <div className="footer">
          <div className="footer_privacy">
            <a href="/">
              <span>{getChars("privacy policy")}</span>
            </a>
          </div>
          <div className="footer_btn">
            <BlackBtn>join the waiting list</BlackBtn>
          </div>
          <div className="footer_privacy made">
            <a href="/">
              <span>{getChars("made by")}</span>
              <span className="copyright">AMANGOUA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
