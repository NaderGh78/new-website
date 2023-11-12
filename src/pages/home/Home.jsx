import "./home.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaCodepen, FaGithub } from "react-icons/fa6";
import Typed from "typed.js";
import { GetTitlePage } from "../../allPagesPaths";
import Resume from "../../assets/Nader Resume.pdf";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Home = () => {

  GetTitlePage('Nader Ghanawi');

  const el = useRef(null);

  const el2 = useRef(null);

  useEffect(() => {

    // first typing element
    const typed = new Typed(el.current, {
      strings: ["Welcome ,"],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      showCursor: false,
    });

    // second typing element
    const typed2 = new Typed(el2.current, {
      strings: ["I'm Nader Ghanawi", "I'm Front End Developer", "Browse My CV!"],
      startDelay: 1400,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      showCursor: true,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
      typed2.destroy();
    };

  }, []);

  return (
    <main>
      <div className="home">
        <span ref={el} className="welcome-typing"></span>
        <div ref={el2} className="info-typing"></div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/nader-ghanawi-4312451a4/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/NaderGh78" target="_blank"><FaGithub /></a>
          <a href="https://codepen.io/matrix78/pens/public" target="_blank"><FaCodepen /></a>
        </div>
        <div className="btn-box">
          <Link to="/contact" className="fill-btn">Let's Talk!</Link>
          <a href={Resume} target="_blank" className="borderd-btn">Download Resume</a>
        </div>
      </div>
    </main>
  )
}

export default Home;