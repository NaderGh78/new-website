import "./projectDetails.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GetTitlePage from "../../common/GetTitlePage";
import { FaGithub, FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import { Spinner } from "../../../allPagesPaths";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const ProjectDetails = () => {

  const { name } = useParams();

  GetTitlePage('Nader Ghanawi | Project');

  const [singleProj, setSingleProj] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // useEffect(() => {
  //   axios.get("./projectsData.json")
  //     .then(res => {
  //       setSingleProj(res.data)
  //     })
  // }, [])


  useEffect(() => {

    axios.get("./projectsData.json")
      .then(res => {

        setSingleProj(res.data)
        setLoading(false);

      })
      .catch(err => setError(true))

  }, []);











  // get single project details if match with useparams
  const getSingleProj = singleProj?.find(el => el.projRoutName === name);

  return (
    <main>
      <div className="project-details">
        <div className="project-details-content">
          {loading
            ?
            <Spinner />
            :
            <>
              <h2>
                {getSingleProj?.projName}
                <Link to="/projects" className="back-link"><FaArrowLeftLong /></Link>
              </h2>
              <div className="img-box">
                <img src={process.env.PUBLIC_URL + getSingleProj?.projImg} alt={getSingleProj?.projName} />
              </div>
              <div className="skill-usage">
                <h4 style={{ color: "var(--light_blue)", marginBottom: "0", whiteSpace: "nowrap" }}>Usages : </h4>
                <div className="skill-imgs-box">
                  {getSingleProj?.projSkillsImgArr.map((el, idx) => (
                    <img src={process.env.PUBLIC_URL + el} alt="" key={idx} />
                  ))}
                </div>
              </div>
              <div className="btn-box d-flex gap-3 mt-4">
                <a className="fill-btn" href={getSingleProj?.projLive} target="_blank">Live Show</a>
                {/* in case we dont have the github link , show the live show btn */}
                {getSingleProj?.projGithub !== "" ?
                  <>
                    <a
                      href={getSingleProj?.projGithub}
                      className="borderd-btn"
                      target="_blank"
                    >Github <span className="align-text-bottom"><FaGithub /></span></a>
                  </>
                  :
                  ""
                }
              </div>
            </>
          }
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails;