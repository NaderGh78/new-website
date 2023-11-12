import "./about.css";
import { Link } from "react-router-dom";
import { cardInfoData } from "../../data/cardInfoData";
import { CardInfo, GetTitlePage, HeadingTitle } from "../../allPagesPaths";
import myImg from "../../assets/images/personal_img.png";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const About = () => {

  GetTitlePage('Nader Ghanawi | About');

  return (
    <main>
      <div className="about">
        <HeadingTitle sub='get to know' head='about me' />
        <div className="about-content d-flex">
          <div className="left">
            <div className="about-content-img">
              <img src={myImg} alt="my-img" />
            </div>
          </div>
          <div className="right">
            <div className="about-content-top d-flex flex-wrap gap-3">
              {cardInfoData.map(d => (
                <CardInfo data={d} key={d.id} />
              ))}
            </div>
            <div className="about-content-bottom mt-3">
              <p style={{ color: "var(--light_gray)" }}>
                Hello, I'm Nader Ghanawi from <strong>Lebanon</strong> Front-end developer I have +2.5 years experience in Front-End development I can build a fully website with all features that make Customer familiar with it, I can build with Pure HTML, CSS and JavaScript This is a good choice; but React library is a very good one. My react knowledge isn't a big but ok, I hope to be at the best of your judgment, just work with me, I thought it was better to build that CV to show you my actual skills. I love programming not just a work, <strong>PROGRAMMING</strong> is my LIFE.
              </p>
              <Link to="/contact" className="fill-btn">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About;