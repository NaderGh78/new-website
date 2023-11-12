import "./projectDetails.css";
import { Link, useParams } from "react-router-dom";
import GetTitlePage from "../../common/GetTitlePage";
import { projectsData } from "../../../allPagesPaths";
import { FaGithub, FaArrowLeftLong } from "react-icons/fa6";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const ProjectDetails = () => {

  const { name } = useParams();

  GetTitlePage('Nader Ghanawi | Project');

  // get single project details if match with useparams
  const getSingleProj = projectsData.find(el => el.projRoutName === name);

  // const calcWidth = `calc((100% + 30px)/${getSingleProj.projSkillsImgArr.length})`; 

  return (
    <main>
      <div className="project-details">
        <div className="project-details-content">
          <h2>
            {getSingleProj.projName}
            <Link to="/projects" className="back-link"><FaArrowLeftLong /></Link>
          </h2>
          <div className="img-box">
            <img src={getSingleProj.projImg} alt={getSingleProj.projName} />
          </div>
          <div className="skill-usage">
            <h4 style={{ color: "var(--light_blue)", whiteSpace: "nowrap" }}>Usages : </h4>
            <div className="skill-imgs-box">
              {getSingleProj.projSkillsImgArr.map((el, idx) => (
                <img src={el} alt="" key={idx} />
              ))}
            </div>
          </div>
          <div className="btn-box d-flex gap-3 mt-4">
            <a className="fill-btn" href={getSingleProj.projLive} target="_blank">Live Show</a>
            {/* in case we dont have the github link , show the live show btn */}
            {getSingleProj.projGithub !== "" ?
              <>
                <a
                  href={getSingleProj.projGithub}
                  className="borderd-btn"
                  target="_blank"
                >Github <span className="align-text-bottom"><FaGithub /></span></a>
              </>
              :
              ""
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails;